/**
 * Quick Sort com passo a passo visual no console.
 * @param {number[]} arr - Array de números a ser ordenado.
 * @param {number} depth - Nível de profundidade recursiva (para indentação visual).
 * @returns {number[]} - Array ordenado.
 */
function quickSort(arr, depth = 0) {
    const indent = "  ".repeat(depth); // Identação visual para profundidade
  
    if (arr.length <= 1) {
      console.log(`${indent}Retornando: [${arr.join(", ")}]`);
      return arr;
    }
  
    const pivot = arr[0];
    const left = arr.slice(1).filter((x) => x <= pivot);
    const right = arr.slice(1).filter((x) => x > pivot);
  
    console.log(`${indent}Array: [${arr.join(", ")}]`);
    console.log(`${indent}Pivô: ${pivot}`);
    console.log(`${indent}Esquerda: [${left.join(", ")}]`);
    console.log(`${indent}Direita : [${right.join(", ")}]`);
  
    const sortedLeft = quickSort(left, depth + 1);
    const sortedRight = quickSort(right, depth + 1);
    const result = [...sortedLeft, pivot, ...sortedRight];
  
    console.log(`${indent}Combinando: [${sortedLeft.join(", ")}] + ${pivot} + [${sortedRight.join(", ")}] → [${result.join(", ")}]`);
    return result;
  }
  
  module.exports = quickSort;
  