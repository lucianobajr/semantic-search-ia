import { RedisClientType, createClient } from "redis";

import { REDIS_URL } from "../../constants/dotenv";

class RedisClient {
    client: RedisClientType;

    constructor() {
        this.client = createClient({
            url: REDIS_URL
        });
    }
}

export { RedisClient }