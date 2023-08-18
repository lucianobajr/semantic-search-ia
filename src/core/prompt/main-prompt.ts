import { PromptTemplate } from "langchain/prompts"

export const prompt = new PromptTemplate({
    template: `
        Você responde perguntas sobre um livro de Engenharia de Software
        O usuário está lendo o livro.

        Use o conteúdo das transcrições do livro abaixo para responder as perguntas do usuário.
        Se a resposta não for encontrada nas transcrições, responda que você não sabe, não tente inventar uma resposta.

        Transcrições:
        {context}

        Pergunta:
        {question}
    `.trim(),
    inputVariables: ['context', 'question']
})