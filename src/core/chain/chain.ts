import { RetrievalQAChain } from "langchain/chains"

import { ChatOpenAI } from "langchain/chat_models/openai";
import { BaseRetriever } from "langchain/dist/schema/retriever";
import { PromptTemplate } from "langchain/prompts"

interface ChainProps {
    llm: ChatOpenAI;
    retriever: BaseRetriever;
    prompt: PromptTemplate;
}

class Chain {
    retrievalQAChain: RetrievalQAChain;

    constructor({ llm, prompt, retriever }: ChainProps) {
        this.retrievalQAChain = RetrievalQAChain.fromLLM(llm, retriever, {
            prompt,
            returnSourceDocuments: true,
            verbose: true
        })
    }
}

export { Chain }