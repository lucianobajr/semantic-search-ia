import { NotionLoader } from "langchain/document_loaders/fs/notion";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

import { TokenTextSplitter } from "langchain/text_splitter";

import { RedisClient } from "../infra/redis/redis-client";
import { RedisVectorStore } from "langchain/vectorstores/redis";
import { Embeddings } from "langchain/dist/embeddings/base";

import { REDIS_INDEX_NAME, REDIS_KEY_PREFIX } from "../constants/redis";

interface LoadProps {
    loader: NotionLoader | PDFLoader;
    splliter: TokenTextSplitter;
    redisClient: RedisClient;
    embeddings: Embeddings;
}

class Load {
    private loader: NotionLoader | PDFLoader;
    private splliter: TokenTextSplitter;
    private redisClient: RedisClient;
    private embeddings: Embeddings;

    constructor({ loader, splliter, redisClient,embeddings }: LoadProps) {
        this.loader = loader;
        this.splliter = splliter;
        this.redisClient = redisClient;
        this.embeddings = embeddings;
    }

    async run() {
        const docs = await this.loader.load();

        const splittedDocuments = await this.splliter.splitDocuments(docs);

        await this.redisClient.client.connect();

        await RedisVectorStore.fromDocuments(
            splittedDocuments,
            this.embeddings,
            {
                indexName: REDIS_INDEX_NAME,
                redisClient: this.redisClient.client,
                keyPrefix: REDIS_KEY_PREFIX
            }
        );

        await this.redisClient.client.disconnect();
    }
}

export { Load }