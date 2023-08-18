import { ChatOpenAI } from "langchain/chat_models/openai";

import { OPENAI_KEY } from "../../constants/dotenv";

export const openAiChat = new ChatOpenAI({
    openAIApiKey: OPENAI_KEY,
    modelName: 'gpt-3.5-turbo',
    temperature: 0.3
})