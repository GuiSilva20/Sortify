/**
 * @param {number[]} arr - Array de números a ser ordenado.
 * @returns {number[]} - Array ordenado.
 */
function bubbleSort(arr) {
    const array = [...arr]; // Evita modificar o array original
    const len = array.length;
  
    console.log("Início do Bubble Sort:\n");
    printArray(array);
  
    for (let i = 0; i < len; i++) {
      let swapped = false;
  
      for (let j = 0; j < len - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
  
          console.log(`Troca: ${array[j]} <--> ${array[j + 1]}`);
          printArray(array, j, j + 1);
        }
      }
  
      if (!swapped) break; // Otimização: encerra se não houve trocas
    }
  
    console.log("\nOrdenação concluída:");
    printArray(array);
    return array;
  }
  
  /**
   * Imprime o array com destaque para os elementos trocados.
   * @param {number[]} array - Array atual.
   * @param {number} [a] - Índice do primeiro elemento trocado.
   * @param {number} [b] - Índice do segundo elemento trocado.
   */
  function printArray(array, a, b) {
    const output = array
      .map((value, index) => {
        if (index === a || index === b) {
          return `[${value}]`; // Destaque para os trocados
        }
        return ` ${value} `;
      })
      .join(" ");
    console.log(output);
  }
  
  module.exports = bubbleSort;
  