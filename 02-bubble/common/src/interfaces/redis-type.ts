import { createClient } from "@redis/client";

export type RedisClientType = ReturnType<typeof createClient>;
