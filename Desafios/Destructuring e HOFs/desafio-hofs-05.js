const data = require('./data');

// 5 - Filtre e retorne um array com as informações das bandas que contenham 'Rock' no gênero musical

const rockFilter = () => {
// return data.bands.map((band) => band.genre === 'Rock');
console.log(data.bands.filter((band) => band.genre === 'Rock'))
// const bandsGenre = data.bands.filter((band) => band.genre.includes('Rock')); alternativa
return data.bands.filter((band) => band.genre === 'Rock');
}

rockFilter();
module.exports = rockFilter;
