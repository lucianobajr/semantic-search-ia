// import * as tf from '@tensorflow/tfjs-node';

import { RedisClientType } from "redis";
import { Chain } from "../chain/chain";
import { ChainValues } from "langchain/dist/schema";

interface GTPProps {
    chain: Chain;
    redisClient: RedisClientType;
    typeVectorStore: "tensorflow" | "hugging-face";
}

class GPT {
    private chain: Chain;
    private redisClient: RedisClientType;
    private typeVectorStore: "tensorflow" | "hugging-face";

    constructor({ chain, redisClient, typeVectorStore }: GTPProps) {
        this.chain = chain;
        this.redisClient = redisClient;
        this.typeVectorStore = typeVectorStore;
    }

    async main(query: string): Promise<ChainValues> {
        /*
        if (this.typeVectorStore === "tensorflow") {
            await tf.setBackend('tensorflow');
        }
        */

        await this.redisClient.connect();

        const response = await this.chain.retrievalQAChain.call({
            query: query
        });

        await this.redisClient.disconnect();

        return response;
    }
}

export { GPT }