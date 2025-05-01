/**
 * Merge Sort com passo a passo visual no console.
 * @param {number[]} arr - Array de números a ser ordenado.
 * @returns {number[]} - Array ordenado.
 */
function mergeSort(arr, depth = 0) {
    const indent = "  ".repeat(depth); // Recuo visual para facilitar leitura
  
    if (arr.length <= 1) {
      console.log(`${indent}Retornando: [${arr.join(", ")}]`);
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    console.log(`${indent}Dividindo: [${arr.join(", ")}]`);
    console.log(`${indent}Esquerda: [${left.join(", ")}]`);
    console.log(`${indent}Direita : [${right.join(", ")}]`);
  
    const sortedLeft = mergeSort(left, depth + 1);
    const sortedRight = mergeSort(right, depth + 1);
    const merged = merge(sortedLeft, sortedRight);
  
    console.log(`${indent}Mesclando: [${sortedLeft.join(", ")}] + [${sortedRight.join(", ")}] → [${merged.join(", ")}]`);
    return merged;
  }
  
  /**
   * Mescla dois arrays ordenados em um único array ordenado.
   * @param {number[]} left - Subarray da esquerda.
   * @param {number[]} right - Subarray da direita.
   * @returns {number[]} - Array mesclado e ordenado.
   */
  function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
  
    return result.concat(left, right);
  }
  
  module.exports = mergeSort;
  