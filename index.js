const readline = require("readline");
const { performance } = require("perf_hooks");

const bubbleSort = require("./sorts/bubbleSort");
const quickSort = require("./sorts/quickSort");
const mergeSort = require("./sorts/mergeSort");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {
  console.log("=== Sort Benchmark ===");

  const input = await askQuestion("Digite os números separados por vírgula: ");
  const numbers = input.split(",").map((n) => parseFloat(n.trim()));

  if (numbers.some(isNaN)) {
    console.log("Entrada inválida. Certifique-se de digitar apenas números.");
    rl.close();
    return;
  }

  console.log("\nEscolha o algoritmo de ordenação:");
  console.log("1. Bubble Sort");
  console.log("2. Quick Sort");
  console.log("3. Merge Sort");
  console.log("4. Executar todos (benchmark)");
  console.log("5. Comparar desempenho (em porcentagem)\n");

  const choice = await askQuestion("Opção: ");
  const results = [];

  switch (choice.trim()) {
    case "1":
      console.log("\nUsando Bubble Sort...");
      console.log(bubbleSort([...numbers]));
      break;

    case "2":
      console.log("\nUsando Quick Sort...");
      console.log(quickSort([...numbers]));
      break;

    case "3":
      console.log("\nUsando Merge Sort...");
      console.log(mergeSort([...numbers]));
      break;

    case "4":
      console.log("\nExecutando todos os algoritmos (benchmark)...\n");
      benchmarkAll(numbers, false);
      break;

    case "5":
      console.log("\nComparando desempenho dos algoritmos (em porcentagem)...\n");
      benchmarkAll(numbers, true);
      break;

    default:
      console.log("Opção inválida.");
      break;
  }

  rl.close();
}

/**
 * Executa todos os algoritmos e exibe os tempos e comparações.
 * @param {number[]} numbers - Array de entrada.
 * @param {boolean} showComparison - Se deve exibir a comparação percentual.
 */
function benchmarkAll(numbers, showComparison) {
  const benchmarks = [
    { name: "Bubble Sort", fn: bubbleSort },
    { name: "Quick Sort", fn: quickSort },
    { name: "Merge Sort", fn: mergeSort },
  ];

  const results = benchmarks.map(({ name, fn }) => {
    const start = performance.now();
    const sorted = fn([...numbers]);
    const end = performance.now();
    const time = end - start;

    return { name, sorted, time };
  });

  // Mostra os resultados básicos
  results.forEach((r) => {
    console.log(`\n${r.name}`);
    console.log(`Tempo: ${r.time.toFixed(3)} ms`);
    console.log(`Resultado: [${r.sorted.join(", ")}]`);
  });

  if (showComparison) {
    const minTime = Math.min(...results.map((r) => r.time));
    const best = results.find((r) => r.time === minTime);

    console.log(`\n🏆 Algoritmo mais rápido: ${best.name} (${best.time.toFixed(3)} ms)`);

    results.forEach((r) => {
      const percent = ((r.time / minTime - 1) * 100).toFixed(2);
      const comparison = r === best ? "100% (referência)" : `${(100 - percent).toFixed(2)}% do desempenho`;
      console.log(`${r.name}: ${comparison}`);
    });
  }
}

main();
