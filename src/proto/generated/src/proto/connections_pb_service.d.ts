// package: connaections
// file: src/proto/connections.proto

import * as src_proto_connections_pb from "../../src/proto/connections_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {grpc} from "@improbable-eng/grpc-web";

type ConnectionsSubscribe = {
  readonly methodName: string;
  readonly service: typeof Connections;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof src_proto_connections_pb.Connection;
};

export class Connections {
  static readonly serviceName: string;
  static readonly Subscribe: ConnectionsSubscribe;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class ConnectionsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  subscribe(requestMessage: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata): ResponseStream<src_proto_connections_pb.Connection>;
}

