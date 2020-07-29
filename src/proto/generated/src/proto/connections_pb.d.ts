// package: connaections
// file: src/proto/connections.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Connection extends jspb.Message {
  getSrcip(): string;
  setSrcip(value: string): void;

  getSrcport(): string;
  setSrcport(value: string): void;

  getSrccountry(): string;
  setSrccountry(value: string): void;

  getDstip(): string;
  setDstip(value: string): void;

  getDstport(): string;
  setDstport(value: string): void;

  getDstcountry(): string;
  setDstcountry(value: string): void;

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
    srcip: string,
    srcport: string,
    srccountry: string,
    dstip: string,
    dstport: string,
    dstcountry: string,
  }
}

