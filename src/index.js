import ivm from 'isolated-vm';
import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(path.resolve() + '/src/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('script', (code) => {
    const isolate = new ivm.Isolate({ memoryLimit: 16 });
    const context = isolate.createContextSync();
    const jail = context.global;

    jail.setSync('global', jail.derefInto());
    jail.setSync('user', new ivm.ExternalCopy({roles: ["hackerman", "admin"]}).copyInto())
    jail.setSync('log', function(...args) {
      console.log(...args);
    });

    context.evalSync(code);
  })
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});