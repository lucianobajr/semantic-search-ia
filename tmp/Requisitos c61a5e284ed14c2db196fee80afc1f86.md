# Requisitos

<aside>
💡 ***"A parte mais difícil de construir um sistema de software é decidir exatamente o que construir" - Frederick Brooks***

</aside>

# Introdução

- Requisitos definem o que um sistema deve fazer e sob quais restrições
- Requisitos Funcionais: o que um sistema deve fazer, na maioria das vezes são especificados em linguagem natural
- Requisitos Não Funcionais: Sob quais restrições o sistema deve funcionar, são especificados usando-se métricas
- A definição de requisitos é uma etapa crucial da construção de qualquer sistema de software

[Métricas para Requisitos Não Funcionais](Requisitos%20c61a5e284ed14c2db196fee80afc1f86/Me%CC%81tricas%20para%20Requisitos%20Na%CC%83o%20Funcionais%20a0a308f5d6e546e9910b816eb1e6a250.csv)

- Também classificam requisitos em ( Sommerville ) :
    - Requisitos de usuário: requisitos de mais alto nível, escritos por usuários, normalmente em linguagem natural e sem entrar em detalhes técnicos ⇒ próximos ao problema
    - Requisitos de sistema: são técnicos, precisos e escritos pelos próprios desenvolvedores ⇒ próximos da solução

# Engenharia de Requisitos

> Engenharia de Requisitos é  o nome que se dá ao conjunto de atividades relacionadas a descoberta, análise, especificação e manutenção dos requisitos de um sistema.
> 
- As atividades relacionadas com  a descoberta e entendimento de requisitos de um sistema são chamadas de Elicitação de Requisitos. Após elicitados, os requisitos devem ser:
    1. documentados
    2. verificados e validados
    3. priorizados
    
- Documento de Especificação de Requisitos: onde todos os requisitos do software que se pretende construir -  incluindo requisitos funcionais e não funcionais - são documentados em linguagem natural
- O objetivo de verificar e validar as especificações é garantir que eles estejam corretos, precisos, completos, consistentes  e verificáveis
    1. Requisitos devem estar corretos.Imagine por exemplo um sistema de banco onde a fórmula de caderneta de poupança esteja incorreto, isso ocasionaria um dano monetário significativo
    2. Requisitos devem ser precisos, isto é, não devem ser ambíguos. No entanto, ambiguidade ocorre com mais frequência do que gostaríamos quando usamos linguagem natural
    3. Requisitos devem ser completos. Isto é, não podemos esquecer de especificar certos requisitos.
    4. Requisitos devem ser verificáveis, isto é,  deve ser possível testar se os requisitos estão sendo atendidos.
    
- Os requisitos devem ser priorizados. Às vezes o termo requisitos é interpretado de forma literal, isto é, como uma lista de funcionalidades e restrições obrigatórios em um software.
- Adicionalmente os requisitos podem mudar, pois o mundo muda. Sendo assim, se existe um documento de especificação de requisitos, documentando tais regras, ele **deve** ser atualizado, assim como o código fonte de um sistema. Chama-se de *rastreabilidade ( traceability )* a capacidade de dado um trecho de código identificar os requisitos implementados por ele e vice-versa ( isto é, dado um requisito, identificar os trechos de código que o implementam )
- Requisitos então são a "ponte" que liga um problema do mundo real a um sistema de software que o soluciona
    
    ![untitled.png](Requisitos%20c61a5e284ed14c2db196fee80afc1f86/untitled.png)
    
    - Podemos dividir a documentação de requisitos em algumas categorias ( a partir da necessidade ) que serão vistas nas próximas subseções:
        1. Histórias de Usuário: podemos adotar documentos simplificados de especificação de requisitos
        2. Casos de Uso: sistemas de requisitos mais estáveis, sendo que são documentos bastante detalhados para especificação de requisitos.
        3. Produto Mínimo Viável (MVP): quando não sabemos nem mesmo se o "problema" que vamos resolver é de fato um problema, um possível teste envolve a construção de MVP.
        

## Histórias de Usuário

- Uma longa fase inicial de especificações de requisitos é cada vez mais rara, pelo menos em sistemas comerciais.
- Uma história de usuário é composta de três partes:
    - História de usuário = Cartão + Conversas + Confirmação
    1. Cartão: usado pelos clientes para escrever, na sua linguagem e em poucas sentenças, uma funcionalidade que esperam ver implementada no sistema
    2. Conversas: entre clientes e desenvolvedores, por meio das quais os clientes explicam e detalham o que escrevem em cada cartão
    3. Confirmação: basicamente um teste de alto nível para verificar se a história foi implementada conforme esperado. 
- Especificações de requisitos por meio de histórias não consistem apenas de duas ou três sentenças. A história que se escreve no cartão é um lembrete do representante dos clientes para os desenvolvedores
- O represente dos clientes está nos pedindo a história resumida nesse cartão, sendo que a obrigação do desenvolver na próxima sprint é implementá-la.
- Quando usamos histórias de usuário, atividades de Engenharia de Requisitos ocorrem ao longo de todo o desenvolvimento, em praticamente todos os dias de uma iteração.
- Boas histórias devem possuir as seguintes características:
    1. Devem ser independentes. Dadas duas histórias X e Y, deve ser possível implementá-las em qualquer ordem.
    2. Devem ser abertas para negociação. Histórias ( cartão ) são convites para conversas entre clientes e desenvolvedores. Os desenvolvedores devem estar abertos para implementar detalhes que não estão expressos ou que não cabem nos cartões da história. Clientes devem aceitar argumentos técnicos vindo dos desenvolvedores, por exemplo sobre a inviabilidade de implementar algum detalhe. 
    3. Histórias devem agregar valor para o negócio dos clientes
    4. Deve ser viável estimar o tamanho de uma história, por exemplo, quantos dias serão necessários para implementá-la
    5. Histórias devem ser sucintas
    6. Histórias devem ser testáveis, isto é, elas devem ter critérios de aceitação objetivos.

- Antes de começar a escrever histórias, recomenda-se listar os principais usuários que vão interagir com o sistema.
- Costuma-se escrever as histórias no seguinte formato:
    
    > Como um [papel de usuário], eu gostaria de [realizar algo com o sistema]
    > 

## Casos de Uso

- São documentos textuais de especificação de requisitos que incluem descrições mais detalhadas do que histórias de usuário sendo que são escritos pelos próprios desenvolvedores do sistema. Podem se valer, por exemplo, de entrevistas com os usuários do sistema.
- Casos de uso são escritos na perspectiva de um **ator** que deseja usar o sistema com um objetivo.Tipicamente, esse ator é um usuário humano ( embora possa ser um software, um outro sistema de software ). Em qualquer caso, o ator é uma entidade externa ao sistema.
- Um caso de uso enumera os passos que um ator realiza em um sistema com um determinado objetivo, sendo dividida em duas listas de passos.
    1. Fluxo normal de passos necessários para concluir uma operação com sucesso
    2. Extensões ao fluxo normal, as quais representam alternativas de execução de um passo normal ou então situações de erro

---

```
**Transferir Valores entre Contas**

**Ator:** Cliente do Banco

**Fluxo normal:**

1 - Autenticar Cliente

2 - Cliente informa agência e conta de destino da transferência

3 - Ciente informa valor que deseja transferir

4 - Cliente informa a data em que pretende realizar a operação

5 - Sistema efetua transferência

6 - Sistema pergunta se o cliente deseja realizar uma nova transferência

**Extensões:**

2a - Se conta e agência incorretas, solicitar nova conta e agência

3a - Se valor acima do saldo atual, solicitar novo valor

4a - Data informada deve ser a data atual ou no máximo um ano a frente

5a - Se data informada é a data atual, transferir imediatamente

5b - Se data informada é uma data futura, agendar transferência
```

---

- Todo caso de uso deve ter um nome, cuja primeira palavra deve ser um verbo no infinitivo , em seguida deve informar o ator principal do caso de uso.
- A sintaxe para tratar inclusões é sublinhar o nome do caso de uso
- Devido à existência de fluxos de extensão, recomenda-se evitar comandos de decisão ("se") no fluxo normal de casos de uso. Quando uma decisão entre comportamentos normais for necessária, pense em defini-la como uma extensão
- Algumas vezes, descrições de casos de uso incluem seções adicionais, tais como:
    1. propósito do caso de uso
    2. pré-condições ⇒ o que deve ser verdadeiro antes da execução
    3. pós-condições ⇒ o que deve ser verdadeiro após a execução
    4. uma lista de casos de uso relacionados
- Casos de uso são escritos em um formato aceito tanto por clientes como por desenvolvedores, de forma que cada um deles possa ler e concordar com o que está escrito.

# Modelagem

> Modelos são criados para ajudar no entendimento e análise de um sistema.
> 

## UML

- Unified Modelling Language
- É uma notação gráfica para modelagem de software

### Esteriótipos

- Estendem (enriquecem) o significado de um determinado elemento em um diagrama
- << esteriótipo >>

### Notas Explicativas

- Utilizadas para comentar ou esclarecer alguma parte de um diagrama

### Etiquetas (Tags)

- Propriedades para elementos de um diagrama podem também ser definidas através de etiquetas

## Modelos de Casos de Uso

- Representa quem faz o que com o sistema, sem considerar o comportamento interno do sistema
- UML + Documentação

### Cenários

- Descrição de uma das maneiras pelas quais um caso pode ser realizado

### Atores

- Elemento externo que interage com o sistema
- Ator primário: inicia uma sequência de interações
- Atores secundários: supervisionam,operam, mantêm ou auxiliam na utilização do sistema

### Relacionamentos - Comunicação

- Existe entre atores e casos de uso

### Relacionamentos - Inclusão (Include)

- Existe somente entre casos de uso
    - Quando dois ou mais casos de uso incluem uma sequência de interações comum, esta sequência comum pode ser descrita em outro caso de uso
    - é um relacionamento entre dois classificadores, que descreve as razões para o relacionamento e as regras que o regem
- Quando o caso de uso A “inclui” o caso de uso B, significa que sempre que o caso de uso A for executado o caso de uso B também será executado. A direção do relacionamento é do caso de uso que está incluindo para o caso de uso incluído.

### Relacionamentos - Extensão (Extend)

- Diferentes sequências de interações em um caso de uso
    - Quando um ator opta por executar a sequência de
    interações definida no caso de uso extensor, este é
    executado
    - Após a sua execução, o fluxo de interações volta ao
    caso de uso estendido, recomeçando logo após o ponto
    em que o extensor foi inserido
- Quando o caso de uso B estende o caso de uso A, significa que quando o caso de uso A for executado o caso de uso B poderá (poderá – talvez não seja) ser executado também. A direção do relacionamento é do caso de uso extensor (aqui o caso de uso B) para o caso de uso estendido (aqui o caso de uso A).

### Relacionamentos - Generalização

- Este relacionamento pode existir entre dois casos de uso ou
entre dois atores.
- Evidencia o reuso
    - Permite que um caso de uso (ou um ator) herde
    características de um caso de uso (ator) mais
    genérico.
    - O caso de uso (ator) herdeiro pode especializar o
    comportamento do caso de uso (ator) base.
- Quando o caso de uso B generaliza o caso de uso C isso significa que, além de fazer tudo que nele está especificado (ele = B), ele também executará tudo que está especificado no caso de uso C.

## Modelo de Classes

- O diagrama da UML utilizado para representar o aspecto estrutural estático é o diagrama de classes
- Representa as classes no domínio do negócio em questão
    - Atributos: O que o objeto conhece
    - Operações: O que objeto sabe fazer
        
        ![untitled.png](Requisitos%20c61a5e284ed14c2db196fee80afc1f86/untitled%201.png)
        

### Associações

- Representada através de um segmento de reta ligando as classes cujos objetos se relacionam
- Multiplicidade
    - Representam os limites de uma associação, ou seja, indicam a quantidade de objetos aos quais um outro objeto pode estar associado
        
        ![untitled (1).png](Requisitos%20c61a5e284ed14c2db196fee80afc1f86/untitled_(1).png)
        
- Conectividade
    - Tipo de associação entre duas classes
    - Depende da Multiplicidade
        
        ![untitled (2).png](Requisitos%20c61a5e284ed14c2db196fee80afc1f86/untitled_(2).png)
        
    

# Regra de Negócio

<aside>
💡 Regras do negócio são políticas, condições ou restrições que devem ser consideradas na execução dos processos existentes em uma organização

</aside>

- Constituem uma parte importante dos processos organizacionais,porque descrevem a maneira como a organização funciona.
- Cada Organização pode ter várias regras do negócio. As regras do negócio de uma organização são normalmente identificadas nas fases de levantamento de requisitos de análise.
- A  regras são documentadas no chamado *modelo de regras do negócio*
- A descrição do modelo de regras do negócio pode ser feita utilizando-se um texto informal ou alguma forma de estruturação. Alguns exemplos de regras do negócio (não pertencentes a uma mesma
organização) são apresentados aqui:
    1. O valor total de um pedido é igual à soma dos totais dos itens do pedido acrescido de 10% de taxa de entrega.
    2. Um professor só pode estar lecionando disciplinas para as quais esteja habilitado.
    3. Um cliente do banco não pode retirar mais de R$ 1.000,00 por dia de sua conta.
    4. Os pedidos para um cliente não especial devem ser pagos antecipadamente.
    5. Para alugar um carro, o proponente deve estar com a carteira de motorista válida.
    6. O número máximo de alunos por turma é igual a trinta.
    7. Um aluno deve ter a matrícula cancelada se obtiver dois conceitos D no curso.
    8. Uma vez que um professor confirma as notas de uma turma, elas não podem ser modificadas.
    9. Senhas devem ter, no mínimo, seis caracteres, entre números e letras, e devem ser atualizadas a cada três meses.
    
- A regras de negócio normalmente têm influência sobre a lógica de execução de um ou mais casos de uso
- Para conectar uma regra a um caso de uso no qual ela é relevante deve ser utilizado o identificador da regra do negócio que influenciar no caso de uso em questão
    
    ![Captura de tela de 2021-09-17 14-15-22.png](Requisitos%20c61a5e284ed14c2db196fee80afc1f86/Captura_de_tela_de_2021-09-17_14-15-22.png)
    

- Requisito Funcional ≠ Regra de Negócio
- Regras existem e continuam valendo mesmo que não exista um sistema para automatizá-las
- O sistema deve ⇒ Requisito não Regra