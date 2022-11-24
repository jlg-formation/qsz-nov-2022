import { createClient } from "redis";

export const client = createClient();

client.on("error", (err) => console.log("Redis Client Error", err));

export const getBubbles = async () => {
  const bubbles = [];
  let cursor = 0;
  do {
    const value = await client.scan(cursor, { MATCH: "bubble:*" });
    console.log("value: ", value);
    cursor = value.cursor;

    console.log("value.keys: ", value.keys);
    if (value.keys.length > 0) {
      const result = await client.mGet(value.keys);
      console.log("result: ", result);
      for (const str of result) {
        bubbles.push(JSON.parse(str));
      }
    }
  } while (cursor !== 0);

  return bubbles;
};
