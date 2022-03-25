const data = require('./data');

// 6 - Filtre e retorne um array com todos os álbuns que possuem nota igual a 100

const highestRatingFilter = () => {
// console.log(data.bands.map((band) => band.bestAlbuns === 100));
// return data.bands.bestAlbuns.filter((album) => album.rate === 100)

console.log(bandAlbum = data.bands.map((band) => band.bestAlbuns) // array de arrays com names e rates
//cada banda tem objetos com nome do album e rate
.reduce((a, b) => [...a, ...b])
// spread dentro de um array.
// O indice 0 é cheio de names com rates. Abre ele
// O proximo indice, a mesma coisa
// reduce faz um push
// spread abre o indice 0, abre o indice 1, etc
.filter((item) => item.rate === 100)); // filtra o array com rate = 100
}

highestRatingFilter();

module.exports = highestRatingFilter;
