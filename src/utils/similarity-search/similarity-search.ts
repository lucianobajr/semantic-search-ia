import { RedisStoreHuggingFace } from "../../infra/redis/redis-store-hugging-face";

async function similaritySearch(question: string) {
    const redisStoreHuggingFace = new RedisStoreHuggingFace();

    await redisStoreHuggingFace.client.connect();

    const response = await redisStoreHuggingFace.vectorStore.similaritySearchWithScore(
        question
    )

    console.log(response)

    await redisStoreHuggingFace.client.disconnect();
}

export { similaritySearch }