import { Load } from "./base/load"
import { pdfLoader } from "./utils/loaders/pdf";
import { tokenTextSplitter } from "./utils/splitter/token-text-splitter";

import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";
import { redisClient } from "./infra";

import { HUGGING_FACE_API_KEY } from "./constants/dotenv";

async function load() {
    try {
        const baseLoad = new Load({
            loader: pdfLoader,
            splliter: tokenTextSplitter,
            embeddings: new HuggingFaceInferenceEmbeddings({
                apiKey: HUGGING_FACE_API_KEY
            }),
            redisClient: redisClient
        });

        await baseLoad.run();

        console.log("load with success!");
    }
    catch (err) {
        console.log(err);
    }
}

load()