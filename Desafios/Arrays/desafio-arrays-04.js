/*

04 - Verifique se todos os dados de uma lista são do mesmo tipo

Escreva uma algoritmo que recebe um array de dados quaisquer e verifique se todos são do mesmo tipo.

Se todos forem retorne:
------
true
------

Caso contrário:
-------
false
-------

Obs: Os retornos tem que ser dados do tipo boolean.

*/

function dataType(types){
  // Desenvolva seu código aqui.
  // HOF que busca e retorna true or false é find e every (cada) ou some (algum)
  const typeOfLike = typeof types[0];
  return types.every((x) => typeof x === typeOfLike);
}

module.exports = dataType;
