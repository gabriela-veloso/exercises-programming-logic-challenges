/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  // Desenvolva seu código nessa função
  numbers.sort((a,b) => a - b); // ordena em ordem cresccente

  return numbers[0];
}

module.exports = getMinNumber;
