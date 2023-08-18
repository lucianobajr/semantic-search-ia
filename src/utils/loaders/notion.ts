import path from "node:path";

import { NotionLoader } from "langchain/document_loaders/fs/notion";

export const notionLoader = new NotionLoader(
    path.resolve(__dirname, '../../../tmp'),
);