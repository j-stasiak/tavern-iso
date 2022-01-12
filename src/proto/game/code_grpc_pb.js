// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var game_code_pb = require('../game/code_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_code_CodeRequest(arg) {
  if (!(arg instanceof game_code_pb.CodeRequest)) {
    throw new Error('Expected argument of type code.CodeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_code_CodeRequest(buffer_arg) {
  return game_code_pb.CodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_code_ExecutionResponse(arg) {
  if (!(arg instanceof game_code_pb.ExecutionResponse)) {
    throw new Error('Expected argument of type code.ExecutionResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_code_ExecutionResponse(buffer_arg) {
  return game_code_pb.ExecutionResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CodeService = exports.CodeService = {
  executeCode: {
    path: '/code.Code/ExecuteCode',
    requestStream: false,
    responseStream: false,
    requestType: game_code_pb.CodeRequest,
    responseType: game_code_pb.ExecutionResponse,
    requestSerialize: serialize_code_CodeRequest,
    requestDeserialize: deserialize_code_CodeRequest,
    responseSerialize: serialize_code_ExecutionResponse,
    responseDeserialize: deserialize_code_ExecutionResponse,
  },
};

exports.CodeClient = grpc.makeGenericClientConstructor(CodeService);
