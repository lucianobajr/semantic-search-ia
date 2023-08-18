import "dotenv/config";

import { RedisClientType } from "redis";

import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";

import { RedisVectorStore } from "langchain/vectorstores/redis";

import { REDIS_INDEX_NAME, REDIS_KEY_PREFIX } from "../../constants/redis";

interface HuggingFaceVectorStoreProps {
    client: RedisClientType;
}

class HuggingFaceVectorStore {
    client: RedisClientType;
    vectorStore: RedisVectorStore;

    constructor({ client }: HuggingFaceVectorStoreProps) {
        this.client = client;

        this.vectorStore = new RedisVectorStore(
            new HuggingFaceInferenceEmbeddings({
                apiKey: process.env.HUGGING_FACE_API_KEY
            }),
            {
                indexName: REDIS_INDEX_NAME,
                redisClient: this.client,
                keyPrefix: REDIS_KEY_PREFIX
            }
        );
    }

}

export { HuggingFaceVectorStore }