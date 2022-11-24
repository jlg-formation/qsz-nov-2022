import { createClient } from "redis";
import { sleep } from "./misc";
import { insertRandomForm } from "./redis";

(async () => {
  try {
    const client = createClient();

    client.on("error", (err) => console.log("Redis Client Error", err));

    await client.connect();

    while (true) {
      await sleep(1000);
      await insertRandomForm(client);
    }

    // await client.disconnect();
  } catch (err) {
    console.log("err: ", err);
  }
})();
