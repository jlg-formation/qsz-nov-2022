import { RedisClientType } from "./interfaces/redis-type";

export const insertForm = async (client: RedisClientType) => {
  await client.set("toto", "jlg");
  const value = await client.get("toto");
  console.log("value: ", value);
};
