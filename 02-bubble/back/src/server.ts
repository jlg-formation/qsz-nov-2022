import express from "express";
import serveIndex from "serve-index";
import { api } from "./api";
import { client } from "./redis";

(async () => {
  try {
    await client.connect();

    const wwwDir = ".";
    const port = 3000;

    const app = express();

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
