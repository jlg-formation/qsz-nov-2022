import cors from "cors";
import express from "express";
import serveIndex from "serve-index";
import { api } from "./api";
import { client, listenForEvents } from "./redis";

(async () => {
  try {
    await client.connect();
    listenForEvents();

    const wwwDir = ".";
    const port = 3000;

    const app = express();

    app.use(cors());

    app.use("/api", api);

    app.use(express.static(wwwDir));
    app.use(serveIndex(wwwDir, { icons: true }));

    app.listen(port, () => {
      console.log(`server started on port ${port}`);
    });
  } catch (err) {
    console.log("err: ", err);
  }
})();
