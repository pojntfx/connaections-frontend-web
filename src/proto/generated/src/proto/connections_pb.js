// source: src/proto/connections.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.connaections.Connection', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.connaections.Connection = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.connaections.Connection, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.connaections.Connection.displayName = 'proto.connaections.Connection';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.connaections.Connection.prototype.toObject = function(opt_includeInstance) {
  return proto.connaections.Connection.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.connaections.Connection} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connaections.Connection.toObject = function(includeInstance, msg) {
  var f, obj = {
    srcip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    srcport: jspb.Message.getFieldWithDefault(msg, 2, ""),
    srccountry: jspb.Message.getFieldWithDefault(msg, 3, ""),
    dstip: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dstport: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dstcountry: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.connaections.Connection}
 */
proto.connaections.Connection.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.connaections.Connection;
  return proto.connaections.Connection.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.connaections.Connection} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.connaections.Connection}
 */
proto.connaections.Connection.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcip(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrcport(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSrccountry(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstip(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstport(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDstcountry(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.connaections.Connection.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.connaections.Connection.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.connaections.Connection} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connaections.Connection.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSrcip();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSrcport();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSrccountry();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDstip();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDstport();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDstcountry();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string srcIP = 1;
 * @return {string}
 */
proto.connaections.Connection.prototype.getSrcip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.setSrcip = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string srcPort = 2;
 * @return {string}
 */
proto.connaections.Connection.prototype.getSrcport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.setSrcport = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string srcCountry = 3;
 * @return {string}
 */
proto.connaections.Connection.prototype.getSrccountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.setSrccountry = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string dstIP = 4;
 * @return {string}
 */
proto.connaections.Connection.prototype.getDstip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.setDstip = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string dstPort = 5;
 * @return {string}
 */
proto.connaections.Connection.prototype.getDstport = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.setDstport = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string dstCountry = 6;
 * @return {string}
 */
proto.connaections.Connection.prototype.getDstcountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.setDstcountry = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.connaections);
