# testes-unitarios

Este repositório contém duas coleções de funções JavaScript e seus respectivos testes unitários. As funções incluem operações matemáticas básicas, cálculos de tempo e algumas funções mais complexas, como cálculo de fatorial, verificação de número primo, média de um array, ordenação de array e busca binária.

## Índice

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Estrutura dos Testes](#estrutura-dos-testes)
- [Executando os Testes](#executando-os-testes)
- [Descrição dos Testes](#descrição-dos-testes)

## Instalação

1. Clone o repositório:

```sh
   git@github.com:JVictor011/testes-unitarios.git
```

2. Navegue até o diretório do projeto:

```bash
    cd testes-unitarios
```

3. Instale as dependências:

```bash
    npm install
```

## Configuração

Certifique-se de que o [Jest](https://jestjs.io/) esteja instalado como dependência de desenvolvimento no seu projeto. As dependências necessárias estão listadas no `package.json`.

## Estrutura dos Testes

Os testes estão divididos em dois arquivos principais:

- `index.test.js`: Testa as funções matemáticas básicas e funções de tempo.
- `complexFunctions.test.js`: Testa as funções mais complexas.

## Executando os Testes

Para executar todos os testes, utilize o comando:

```sh
    npm test
```

## Descrição dos Testes

### Funções Matemáticas (`index.test.js`)

#### `sum(a, b)`

- Testa a soma de números positivos.
- Testa a soma de números negativos.
- Testa a soma de um número positivo e um número negativo.

#### `subtract(a, b)`

- Testa a subtração de números positivos.
- Testa a subtração de números negativos.
- Testa a subtração de um número negativo de um positivo.

#### `multiply(a, b)`

- Testa a multiplicação de números positivos.
- Testa a multiplicação de números negativos.
- Testa a multiplicação de um número por zero.

#### `divide(a, b)`

- Testa a divisão de números positivos.
- Testa a divisão de números negativos.
- Testa a divisão por zero, esperando um erro.

#### `inOneHour()`

- Testa o timestamp retornado para uma hora a partir do momento atual.

#### `inOneWeek()`

- Testa o timestamp retornado para uma semana a partir do momento atual.

### Funções Complexas (`complexFunctions.test.js`)

#### `factorial(n)`

- Testa o cálculo do fatorial de números positivos.
- Testa o retorno `undefined` para números negativos.

#### `isPrime(num)`

- Testa a identificação de números primos.
- Testa a identificação de números não primos.

#### `average(arr)`

- Testa o cálculo da média de um array de números.
- Testa o retorno `undefined` para arrays vazios ou entradas inválidas.

#### `sortArray(arr)`

- Testa a ordenação de um array de números.
- Testa o retorno `undefined` para entradas inválidas.

#### `binarySearch(arr, target)`

- Testa a busca binária para encontrar o índice de um elemento.
- Testa o retorno `-1` quando o elemento não está presente.
- Testa o retorno `undefined` para entradas inválidas.
