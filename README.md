# Semantic Search

![concept](https://github.com/lucianobajr/semantic-search/assets/45442173/0803ae2f-db07-4e7d-b33e-fb1017cd8c5e)

A busca semântica é uma abordagem avançada na área de processamento de linguagem natural (PLN) que visa melhorar a precisão e relevância dos resultados de busca ao compreender o significado semântico das consultas dos usuários e o conteúdo dos documentos a serem buscados. Em contraste com a busca baseada em palavras-chave tradicional, onde os resultados são correspondências exatas de palavras individuais, a busca semântica considera o contexto, a intenção e as relações entre as palavras e frases.

Essa abordagem envolve o uso de técnicas de PLN, como análise semântica, processamento de linguagem natural profundo e aprendizado de máquina, para entender a linguagem humana em um nível mais profundo. Isso permite que os mecanismos de busca compreendam a intenção por trás das consultas dos usuários e identifiquem documentos que sejam semanticamente relevantes, mesmo que não contenham exatamente as mesmas palavras-chave.

A busca semântica é usada em diversas aplicações, como motores de busca na web, sistemas de recomendação, assistentes virtuais e análise de sentimentos. Ela ajuda a melhorar a experiência do usuário, oferecendo resultados mais relevantes e úteis, independentemente das variações nas palavras-chave usadas nas consultas de pesquisa.

## Fine Tuning

O "fine-tuning" (ajuste fino) é um conceito comum no campo de aprendizado de máquina e inteligência artificial, incluindo modelos de linguagem como o GPT-3.5. É um processo no qual um modelo pré-treinado é ajustado ou adaptado para uma tarefa específica ou conjunto de dados, a fim de melhorar seu desempenho nessa tarefa específica.

Aqui está um processo geral de como o fine-tuning funciona:

- Pré-treinamento: Inicialmente, um modelo é treinado em um grande conjunto de dados genérico. No caso do GPT-3.5, ele é exposto a uma ampla variedade de texto da internet para aprender padrões linguísticos e conhecimento geral.

- Fine-tuning: Depois do pré-treinamento, o modelo é ajustado em um conjunto de dados menor e específico para a tarefa que se deseja realizar. Isso envolve continuar o treinamento do modelo em exemplos mais relevantes para a aplicação pretendida.

- Ajuste dos hiperparâmetros: Durante o processo de fine-tuning, os hiperparâmetros (configurações que afetam o processo de treinamento, como taxa de aprendizado e tamanho do lote) podem ser ajustados para otimizar o desempenho na tarefa específica.

- Avaliação e ajuste: Após o fine-tuning, o modelo é avaliado em um conjunto de dados de validação ou teste para medir seu desempenho. Com base nos resultados, os ajustes finais podem ser feitos para melhorar a eficácia do modelo na tarefa.

O fine-tuning é uma abordagem poderosa porque aproveita o conhecimento prévio e as representações de linguagem adquiridas durante o pré-treinamento, permitindo que o modelo se adapte a tarefas específicas com menos dados de treinamento. Isso é particularmente útil em situações onde não há dados suficientes para treinar um modelo completamente do zero.

No contexto dos modelos de linguagem como o GPT-3.5, o fine-tuning permite personalizar o modelo para realizar tarefas específicas, como responder a perguntas, gerar texto em um estilo específico ou realizar outras tarefas de processamento de linguagem natural.

*Se comporta como uma memória de longo prazo*


## Links Úteis

[LangChain](https://js.langchain.com/docs/get_started/introduction/)
[Exalidraw](https://excalidraw.com/#json=bEzH2JbGKFtoNltGjzhqT,ZikWHYKwmmf1CUDEqdpQ0w)

## Redis

```sh

$ docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest
```

## Executar

### Install

```sh

$ pnpm i
```

### Load data

```sh

$ pnpm load
```

### Semantic Search main
```sh

$ pnpm main
```