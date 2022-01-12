import dotenv from "dotenv";
dotenv.config();
import * as grpc from "@grpc/grpc-js";
import { CodeService } from "./proto/game/code_grpc_pb";
import { CodeServer } from "./CodeServer";

const PORT = process.env.PORT || "4001";

const grpcServer = new grpc.Server();
// @ts-ignore
grpcServer.addService(CodeService, new CodeServer());

grpcServer.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    grpcServer.start();
    console.log(`Listening on port *:${port}`);
  }
);
