Desafios Técnicos – Angular, Node.js & C#

Este repositório contém a solução dos desafios técnicos propostos para a vaga de Desenvolvedor (Angular/Node.js/C#). Cada desafio foi implementado utilizando as linguagens e tecnologias mais adequadas para sua execução.

Descrição dos Desafios

1 Cálculo da Variável SOMA (C#)

Implementação de um laço while para calcular o valor final da variável SOMA.

Arquivo: desafio1/index.cs

2 Verificar se um Número Pertence à Sequência de Fibonacci (Node.js)

Função que recebe um número e verifica se ele pertence à sequência de Fibonacci.

Arquivo: desafio2/dibonacci.js

Faturamento Diário de uma Distribuidora (Node.js/TypeScript)

Cálculo do menor e maior valor de faturamento, além do número de dias com faturamento acima da média.

Arquivo: desafio3/index.ts
Dados: desafio3/faturamento.json

Percentual de Representação de Faturamento por Estado (C#)

Cálculo do percentual de faturamento de cada estado com base no valor total.

Arquivo: desafio4/index.cs

Inverter os Caracteres de uma String (Node.js/TypeScript)

Função que recebe uma string e retorna sua inversão sem utilizar métodos prontos.

Arquivo: desafio5/index.ts

Como Rodar os Desafios

Pré-requisitos

Antes de rodar os desafios, certifique-se de ter instalado:

.NET SDK (para rodar os desafios em C#) → Guia de instalação

Node.js e npm (para rodar os desafios em Node.js/TypeScript) → Baixar Node.js

TypeScript e ts-node

npm install -g typescript ts-node

Rodando os desafios em C#

Desafio 1 e Desafio 4

Acesse a pasta do desafio:

cd desafio1  # Ou cd desafio4

Compile e execute:

dotnet run

Rodando os desafios em Node.js/TypeScript

Desafio 2

node fibonacci.js

Desafio 3 e Desafio 5

Acesse a pasta do desafio:

cd desafio2  # Ou cd desafio3 / cd desafio5

Execute o código:

ts-node index.ts

Observação:

No Desafio 3, o script lê os dados do arquivo faturamento.json, então verifique se ele está na mesma pasta antes de rodar.
