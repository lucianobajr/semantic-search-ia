import { TokenTextSplitter } from "langchain/text_splitter";

const tokenTextSplitter = new TokenTextSplitter({
    encodingName: 'cl100k_base',
    chunkSize: 600,
    chunkOverlap: 0
});

export { tokenTextSplitter }