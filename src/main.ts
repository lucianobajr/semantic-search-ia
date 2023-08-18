import { Chain } from "./core/chain/chain";
import { GPT } from "./core/gpt/gpt"

import { prompt } from "./core/prompt/main-prompt";
import { openAiChat } from "./core/chat/open-ai";

import { HuggingFaceVectorStore } from "./core/vector-stores/hugging-face-vector-store";

import { redisClient } from "./infra";

async function main() {
    const huggingFaceVectorStore = new HuggingFaceVectorStore({
        client: redisClient.client
    });

    const chain = new Chain({
        llm: openAiChat,
        retriever: huggingFaceVectorStore.vectorStore.asRetriever(),
        prompt
    });

    const gpt = new GPT({
        chain: chain,
        redisClient: redisClient.client,
        typeVectorStore: "hugging-face"
    });

    const response = await gpt.main("O que são processos em enganharia  ?");

    console.log(response)
}

main()