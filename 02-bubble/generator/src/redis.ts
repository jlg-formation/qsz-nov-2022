import type { Form, RedisClientType } from "@bubble/common";
import { generateId, random } from "./misc";

export const insertForm = async (client: RedisClientType, form: Form) => {
  const key = "bubble:form:" + generateId();
  const ttl = random(10, 30);
  console.log("ttl: ", ttl);
  await client.setEx(key, ttl, JSON.stringify(form));
  // const value = await client.get(key);
  // console.log("value: ", value);
};

export const insertRandomForm = async (client: RedisClientType) => {
  const form: Form = {
    type: "circle",
    data: {
      cx: random(0, 1000),
      cy: random(0, 1000),
      r: random(0, 20),
      color: `hsla(${random(0, 360)}, 100%, 50%, ${random(0, 1, 2)})`,
    },
  };
  console.log("form: ", form);

  await insertForm(client, form);
};
