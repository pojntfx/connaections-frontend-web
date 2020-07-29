// package: connaections
// file: src/proto/connections.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Connection extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): Edge | undefined;
  setSource(value?: Edge): void;

  hasDst(): boolean;
  clearDst(): void;
  getDst(): Edge | undefined;
  setDst(value?: Edge): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connection.AsObject;
  static toObject(includeInstance: boolean, msg: Connection): Connection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connection;
  static deserializeBinaryFromReader(message: Connection, reader: jspb.BinaryReader): Connection;
}

export namespace Connection {
  export type AsObject = {
    source?: Edge.AsObject,
    dst?: Edge.AsObject,
  }
}

export class Edge extends jspb.Message {
  getIp(): string;
  setIp(value: string): void;

  getPort(): string;
  setPort(value: string): void;

  getLatitude(): number;
  setLatitude(value: number): void;

  getLongitude(): number;
  setLongitude(value: number): void;

  getCityname(): string;
  setCityname(value: string): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Edge.AsObject;
  static toObject(includeInstance: boolean, msg: Edge): Edge.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Edge, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Edge;
  static deserializeBinaryFromReader(message: Edge, reader: jspb.BinaryReader): Edge;
}

export namespace Edge {
  export type AsObject = {
    ip: string,
    port: string,
    latitude: number,
    longitude: number,
    cityname: string,
    countrycode: string,
  }
}

