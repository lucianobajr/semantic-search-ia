import "dotenv/config"

import { Load } from "./base/load"
import { pdfLoader } from "./utils/loaders/pdf";
import { tokenTextSplitter } from "./utils/splitter/token-text-splitter";

import { HuggingFaceInferenceEmbeddings } from "langchain/embeddings/hf";
import { redisClient } from "./infra";

async function load() {
    try {
        const baseLoad = new Load({
            loader: pdfLoader,
            splliter: tokenTextSplitter,
            embeddings: new HuggingFaceInferenceEmbeddings({
                apiKey: process.env.HUGGING_FACE_API_KEY
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