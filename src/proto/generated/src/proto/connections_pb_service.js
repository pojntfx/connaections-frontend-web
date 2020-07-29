// package: connaections
// file: src/proto/connections.proto

var src_proto_connections_pb = require("../../src/proto/connections_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Connections = (function () {
  function Connections() {}
  Connections.serviceName = "connaections.Connections";
  return Connections;
}());

Connections.Subscribe = {
  methodName: "Subscribe",
  service: Connections,
  requestStream: false,
  responseStream: true,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: src_proto_connections_pb.Connection
};

exports.Connections = Connections;

function ConnectionsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

ConnectionsClient.prototype.subscribe = function subscribe(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Connections.Subscribe, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.ConnectionsClient = ConnectionsClient;

