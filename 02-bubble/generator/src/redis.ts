import { Form } from "./interfaces/Form";
import { RedisClientType } from "./interfaces/redis-type";

export const insertForm = async (client: RedisClientType, form: Form) => {
  await client.set("toto", JSON.stringify(form));
  const value = await client.get("toto");
  console.log("value: ", value);
};
