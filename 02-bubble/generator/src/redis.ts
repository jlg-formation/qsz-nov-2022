import { Form } from "./interfaces/Form";
import { RedisClientType } from "./interfaces/redis-type";
import { generateId, random } from "./misc";

export const insertForm = async (client: RedisClientType, form: Form) => {
  await client.setEx(
    "bubble:form:" + generateId(),
    random(10, 30),
    JSON.stringify(form)
  );
  const value = await client.get("toto");
  console.log("value: ", value);
};

export const insertRandomForm = async (client: RedisClientType) => {
  const form: Form = {
    type: "circle",
    data: {
      cx: random(0, 100),
      cy: random(0, 100),
      r: random(0, 100),
      color: "#eee",
    },
  };
  console.log("form: ", form);

  await insertForm(client, form);
};
