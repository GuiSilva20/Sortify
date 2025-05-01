

### `README.md`


# Sortify - Benchmark de Algoritmos de Ordenação

O **Sortify** é uma aplicação interativa em **Node.js** para testar e comparar o desempenho de três algoritmos clássicos de ordenação: **Bubble Sort**, **Quick Sort** e **Merge Sort**. Através de um **benchmark**, o script permite visualizar o tempo de execução de cada algoritmo e comparar qual é o mais eficiente, com uma análise percentual.

## Funcionalidades

- **Bubble Sort**: Um algoritmo simples de ordenação que compara e troca elementos adjacentes.
- **Quick Sort**: Um algoritmo eficiente de ordenação baseado no conceito de dividir e conquistar.
- **Merge Sort**: Algoritmo eficiente de ordenação que utiliza a técnica de dividir e conquistar com fusão de subarrays.

Além disso, você pode:

- **Executar os algoritmos separadamente** para ver o resultado da ordenação.
- **Comparar o desempenho dos algoritmos** e ver qual é o mais rápido, com uma análise percentual.

## Pré-requisitos

Certifique-se de ter o **Node.js** instalado na sua máquina. Caso não tenha, instale o [Node.js](https://nodejs.org/) seguindo as instruções.

## Instalação

1. Clone o repositório para a sua máquina:

   ```bash
   git clone https://github.com/seu-usuario/sortify.git
   cd sortify
   ```

2. Instale as dependências necessárias:

   ```bash
   npm install
   ```

## Como Usar

Para iniciar o script e testar os algoritmos de ordenação, basta rodar o seguinte comando:

```bash
npm run sortify
```

### Passo a Passo do Script

1. O script pedirá para você digitar uma lista de números separados por vírgula.
2. Você poderá escolher entre as seguintes opções:
   - **1**: Usar **Bubble Sort**.
   - **2**: Usar **Quick Sort**.
   - **3**: Usar **Merge Sort**.
   - **4**: Executar todos os algoritmos e visualizar o **benchmark** de cada um.
   - **5**: Comparar o desempenho dos algoritmos em **porcentagem**.

### Exemplo de Execução

```bash
$ npm run sortify
=== Sort Benchmark ===
Digite os números separados por vírgula: 5, 3, 7, 1

Escolha o algoritmo de ordenação:
1. Bubble Sort
2. Quick Sort
3. Merge Sort
4. Executar todos (benchmark)
5. Comparar desempenho (em porcentagem)

Opção: 5

Comparando desempenho dos algoritmos (em porcentagem)...

Array: [5, 3, 7, 1]
Pivô: 5
Esquerda: [3, 1]
Direita : [7]
  Array: [3, 1]
  Pivô: 3
  Esquerda: [1]
  Direita : []
    Retornando: [1]
    Retornando: []
  Combinando: [1] + 3 + [] → [1, 3]
  Retornando: [7]
Combinando: [1, 3] + 5 + [7] → [1, 3, 5, 7]

🏆 Algoritmo mais rápido: Quick Sort (0.315 ms)

Bubble Sort: 82.45% do desempenho
Quick Sort: 100% (referência)
Merge Sort: 95.87% do desempenho
```

## Estrutura do Projeto

```
/sortify
│
├── /sorts
│   ├── bubbleSort.js    # Implementação do Bubble Sort
│   ├── quickSort.js     # Implementação do Quick Sort
│   └── mergeSort.js     # Implementação do Merge Sort
│
├── index.js              # Script principal
└── package.json         # Dependências e scripts
```

## Scripts Disponíveis

- **`npm run sortify`**: Executa o script de benchmark para testar e comparar os algoritmos de ordenação.

## Contribuindo

Se você quiser contribuir para o projeto, sinta-se à vontade para criar **issues** ou **pull requests** com melhorias, correções ou novos algoritmos de ordenação.

## Licença

Este projeto é de código aberto e licenciado sob a **MIT License**.

```
