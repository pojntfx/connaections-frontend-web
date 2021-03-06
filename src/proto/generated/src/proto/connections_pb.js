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
goog.exportSymbol('proto.connaections.Edge', null, global);
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
proto.connaections.Edge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.connaections.Edge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.connaections.Edge.displayName = 'proto.connaections.Edge';
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
    source: (f = msg.getSource()) && proto.connaections.Edge.toObject(includeInstance, f),
    dst: (f = msg.getDst()) && proto.connaections.Edge.toObject(includeInstance, f)
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
      var value = new proto.connaections.Edge;
      reader.readMessage(value,proto.connaections.Edge.deserializeBinaryFromReader);
      msg.setSource(value);
      break;
    case 2:
      var value = new proto.connaections.Edge;
      reader.readMessage(value,proto.connaections.Edge.deserializeBinaryFromReader);
      msg.setDst(value);
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
  f = message.getSource();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.connaections.Edge.serializeBinaryToWriter
    );
  }
  f = message.getDst();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.connaections.Edge.serializeBinaryToWriter
    );
  }
};


/**
 * optional Edge source = 1;
 * @return {?proto.connaections.Edge}
 */
proto.connaections.Connection.prototype.getSource = function() {
  return /** @type{?proto.connaections.Edge} */ (
    jspb.Message.getWrapperField(this, proto.connaections.Edge, 1));
};


/**
 * @param {?proto.connaections.Edge|undefined} value
 * @return {!proto.connaections.Connection} returns this
*/
proto.connaections.Connection.prototype.setSource = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.clearSource = function() {
  return this.setSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.connaections.Connection.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Edge dst = 2;
 * @return {?proto.connaections.Edge}
 */
proto.connaections.Connection.prototype.getDst = function() {
  return /** @type{?proto.connaections.Edge} */ (
    jspb.Message.getWrapperField(this, proto.connaections.Edge, 2));
};


/**
 * @param {?proto.connaections.Edge|undefined} value
 * @return {!proto.connaections.Connection} returns this
*/
proto.connaections.Connection.prototype.setDst = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.connaections.Connection} returns this
 */
proto.connaections.Connection.prototype.clearDst = function() {
  return this.setDst(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.connaections.Connection.prototype.hasDst = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.connaections.Edge.prototype.toObject = function(opt_includeInstance) {
  return proto.connaections.Edge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.connaections.Edge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connaections.Edge.toObject = function(includeInstance, msg) {
  var f, obj = {
    ip: jspb.Message.getFieldWithDefault(msg, 1, ""),
    port: jspb.Message.getFieldWithDefault(msg, 2, ""),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    cityname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    countrycode: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.connaections.Edge}
 */
proto.connaections.Edge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.connaections.Edge;
  return proto.connaections.Edge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.connaections.Edge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.connaections.Edge}
 */
proto.connaections.Edge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLatitude(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLongitude(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCityname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountrycode(value);
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
proto.connaections.Edge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.connaections.Edge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.connaections.Edge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.connaections.Edge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPort();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getCityname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCountrycode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string ip = 1;
 * @return {string}
 */
proto.connaections.Edge.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Edge} returns this
 */
proto.connaections.Edge.prototype.setIp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string port = 2;
 * @return {string}
 */
proto.connaections.Edge.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Edge} returns this
 */
proto.connaections.Edge.prototype.setPort = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional double latitude = 3;
 * @return {number}
 */
proto.connaections.Edge.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.connaections.Edge} returns this
 */
proto.connaections.Edge.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional double longitude = 4;
 * @return {number}
 */
proto.connaections.Edge.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.connaections.Edge} returns this
 */
proto.connaections.Edge.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string cityName = 5;
 * @return {string}
 */
proto.connaections.Edge.prototype.getCityname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Edge} returns this
 */
proto.connaections.Edge.prototype.setCityname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string countryCode = 6;
 * @return {string}
 */
proto.connaections.Edge.prototype.getCountrycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.connaections.Edge} returns this
 */
proto.connaections.Edge.prototype.setCountrycode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.connaections);
