import { PDFLoader } from "langchain/document_loaders/fs/pdf";

export const pdfLoader = new PDFLoader("tmp/book.pdf");