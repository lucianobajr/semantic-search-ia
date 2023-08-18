import "dotenv/config"

import { ChatOpenAI } from "langchain/chat_models/openai";

export const openAiChat = new ChatOpenAI({
    openAIApiKey: process.env.OPENAI_KEY,
    modelName: 'gpt-3.5-turbo',
    temperature: 0.3
})