import { createClient } from "redis";
import { insertForm } from "./redis";

(async () => {
  try {
    const client = createClient();

    client.on("error", (err) => console.log("Redis Client Error", err));

    await client.connect();

    await insertForm(client, {
      type: "circle",
      data: {
        cx: 23,
        cy: 12,
        r: 45,
        color: "#eee",
      },
    });
    await client.disconnect();
  } catch (err) {
    console.log("err: ", err);
  }
})();
