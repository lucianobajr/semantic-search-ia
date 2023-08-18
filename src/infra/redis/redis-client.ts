import "dotenv/config"

import { RedisClientType, createClient } from "redis";

class RedisClient {
    client: RedisClientType;

    constructor() {
        this.client = createClient({
            url: process.env.REDIS_URL
        });
    }
}

export { RedisClient }