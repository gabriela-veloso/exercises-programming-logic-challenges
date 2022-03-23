/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  // Desenvolva seu código nessa função
  numbers.sort((a,b) => b - a ); //ordena em ordem decrescente
  return numbers[0];
}

module.exports = getMaxNumber;
