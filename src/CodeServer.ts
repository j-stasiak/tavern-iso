import { ICodeServer } from "./proto/game/code_grpc_pb";
import { CodeRequest, ExecutionResponse } from "./proto/game/code_pb";
import * as grpc from "@grpc/grpc-js";
import ivm from "isolated-vm";
import fs from "fs";
import path from "path";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";

export class CodeServer implements ICodeServer {
  executeCode: grpc.handleUnaryCall<CodeRequest, ExecutionResponse> = (
    call,
    callback
  ) => {
    console.log("message recieved!");
    const gameObject = call.request.getGameobject()?.toJavaScript();
    console.log(gameObject);
    const isolate = new ivm.Isolate({ memoryLimit: 16 });
    const context = isolate.createContextSync();
    const jail = context.global;
    jail.setSync("global", jail.derefInto());
    context.global.setIgnored(
      "_gameObject",
      new ivm.ExternalCopy(gameObject).copyInto()
    );
    isolate
      .compileScriptSync(
        fs.readFileSync(require.resolve("./lib/index.js"), "utf-8")
      )
      .runSync(context);
    isolate.compileScriptSync("_init();").runSync(context);
    const script = isolate.compileScriptSync(call.request.getCode());
    const result = script.runSync(context);
    console.log(jail.getSync("_gameObject").copySync());
    const response = new ExecutionResponse();
    response.setUserid(call.request.getUserid());
    response.setGameobject(
      Struct.fromJavaScript(context.global.getSync("_gameObject").copySync())
    );
    callback(null, response);
  };
}
