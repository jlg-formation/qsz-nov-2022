import { createClient } from "redis";

(async () => {
  try {
    const client = createClient();

    client.on("error", (err) => console.log("Redis Client Error", err));

    await client.connect();

    await client.set("key", "value");
    const value = await client.get("key");
    await client.disconnect();
  } catch (err) {
    console.log("err: ", err);
  }
})();
