import "@tensorflow/tfjs-backend-cpu";

import { RedisClientType } from "redis";

import { TensorFlowEmbeddings } from "langchain/embeddings/tensorflow";
import { RedisVectorStore } from "langchain/vectorstores/redis";

import { REDIS_INDEX_NAME, REDIS_KEY_PREFIX } from "../../constants/redis";

interface TensorFlowVectorStoreProps {
    client: RedisClientType;
}

class TensorFlowVectorStore {
    client: RedisClientType;
    vectorStore: RedisVectorStore;

    constructor({ client }: TensorFlowVectorStoreProps) {
        this.client = client;

        this.vectorStore = new RedisVectorStore(
            new TensorFlowEmbeddings(),
            {
                indexName: REDIS_INDEX_NAME,
                redisClient: this.client,
                keyPrefix: REDIS_KEY_PREFIX
            }
        );
    }

}

export { TensorFlowVectorStore }