#!/bin/bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/../

PROTO_DEST=./src/proto

mkdir -p ${PROTO_DEST}

# JavaScript code generation
./node_modules/.bin/grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DEST} \
    --grpc_out=grpc_js:${PROTO_DEST} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./protos \
    protos/**/*.proto


./node_modules/.bin/grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DEST} \
    -I ./protos \
    protos/**/*.proto