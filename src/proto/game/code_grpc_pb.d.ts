// package: code
// file: game/code.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as game_code_pb from "../game/code_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface ICodeService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    executeCode: ICodeService_IExecuteCode;
}

interface ICodeService_IExecuteCode extends grpc.MethodDefinition<game_code_pb.CodeRequest, game_code_pb.ExecutionResponse> {
    path: "/code.Code/ExecuteCode";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<game_code_pb.CodeRequest>;
    requestDeserialize: grpc.deserialize<game_code_pb.CodeRequest>;
    responseSerialize: grpc.serialize<game_code_pb.ExecutionResponse>;
    responseDeserialize: grpc.deserialize<game_code_pb.ExecutionResponse>;
}

export const CodeService: ICodeService;

export interface ICodeServer {
    executeCode: grpc.handleUnaryCall<game_code_pb.CodeRequest, game_code_pb.ExecutionResponse>;
}

export interface ICodeClient {
    executeCode(request: game_code_pb.CodeRequest, callback: (error: grpc.ServiceError | null, response: game_code_pb.ExecutionResponse) => void): grpc.ClientUnaryCall;
    executeCode(request: game_code_pb.CodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_code_pb.ExecutionResponse) => void): grpc.ClientUnaryCall;
    executeCode(request: game_code_pb.CodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_code_pb.ExecutionResponse) => void): grpc.ClientUnaryCall;
}

export class CodeClient extends grpc.Client implements ICodeClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public executeCode(request: game_code_pb.CodeRequest, callback: (error: grpc.ServiceError | null, response: game_code_pb.ExecutionResponse) => void): grpc.ClientUnaryCall;
    public executeCode(request: game_code_pb.CodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: game_code_pb.ExecutionResponse) => void): grpc.ClientUnaryCall;
    public executeCode(request: game_code_pb.CodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: game_code_pb.ExecutionResponse) => void): grpc.ClientUnaryCall;
}
