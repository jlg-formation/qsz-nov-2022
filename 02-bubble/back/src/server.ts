import cors from "cors";
import express from "express";
import serveIndex from "serve-index";
import { api } from "./api";
import { client, listenForEvents } from "./redis";
import { WebSocketServer, WebSocket } from "ws";
import { createServer } from "http";

(async () => {
  try {
    await client.connect();

    listenForEvents();

    const wwwDir = ".";
    const port = 3000;

    const app = express();
    const server = createServer(app);
    const wss = new WebSocketServer({
      server,
    });

    wss.on("connection", (ws: WebSocket) => {
      //connection is up, let's add a simple simple event
      ws.on("message", (message: string) => {
        //log the received message and send it back to the client
        console.log("received: %s", message);
        ws.send(`Hello, you sent -> ${message}`);
      });

      //send immediatly a feedback to the incoming connection
      ws.send("Hi there, I am a WebSocket server");
    });

    app.use(cors());

    app.use("/api", api);

    app.use(express.static(wwwDir));
    app.use(serveIndex(wwwDir, { icons: true }));

    server.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  } catch (err) {
    console.log("err: ", err);
  }
})();
