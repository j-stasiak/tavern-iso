// package: code
// file: game/code.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class CodeRequest extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): CodeRequest;
    getCode(): string;
    setCode(value: string): CodeRequest;

    hasGameobject(): boolean;
    clearGameobject(): void;
    getGameobject(): google_protobuf_struct_pb.Struct | undefined;
    setGameobject(value?: google_protobuf_struct_pb.Struct): CodeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CodeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CodeRequest): CodeRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CodeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CodeRequest;
    static deserializeBinaryFromReader(message: CodeRequest, reader: jspb.BinaryReader): CodeRequest;
}

export namespace CodeRequest {
    export type AsObject = {
        userid: string,
        code: string,
        gameobject?: google_protobuf_struct_pb.Struct.AsObject,
    }
}

export class ExecutionResponse extends jspb.Message { 
    getUserid(): string;
    setUserid(value: string): ExecutionResponse;

    hasGameobject(): boolean;
    clearGameobject(): void;
    getGameobject(): google_protobuf_struct_pb.Struct | undefined;
    setGameobject(value?: google_protobuf_struct_pb.Struct): ExecutionResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ExecutionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ExecutionResponse): ExecutionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ExecutionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ExecutionResponse;
    static deserializeBinaryFromReader(message: ExecutionResponse, reader: jspb.BinaryReader): ExecutionResponse;
}

export namespace ExecutionResponse {
    export type AsObject = {
        userid: string,
        gameobject?: google_protobuf_struct_pb.Struct.AsObject,
    }
}
