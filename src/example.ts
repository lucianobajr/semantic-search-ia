import "dotenv/config"

import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { TokenTextSplitter } from "langchain/text_splitter";
import { RedisVectorStore } from "langchain/vectorstores/redis"
import { createClient } from "redis";

import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";

import { REDIS_INDEX_NAME, REDIS_KEY_PREFIX } from "./constants/redis";

const loader = new PDFLoader("tmp/book.pdf");

async function load() {
    const docs = await loader.load();

    const splitter = new TokenTextSplitter({
        encodingName: 'cl100k_base',
        chunkSize: 600,
        chunkOverlap: 0
    });

    const splittedDocuments = await splitter.splitDocuments(docs);

    const redis = createClient({
        url: 'redis://127.0.0.1:6379'
    });

    await redis.connect();

    await RedisVectorStore.fromDocuments(
        splittedDocuments,
        new HuggingFaceInferenceEmbeddings({
            apiKey: process.env.HUGGING_FACE_API_KEY
        }),
        {
            indexName: REDIS_INDEX_NAME,
            redisClient: redis,
            keyPrefix: REDIS_KEY_PREFIX
        }
    );

    await redis.disconnect();
}

load()