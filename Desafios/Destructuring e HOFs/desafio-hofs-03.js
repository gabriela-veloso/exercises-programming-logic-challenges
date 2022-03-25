const data = require('./data');

// 3 - Retorne um array utilizando HOF's que contenha apenas o nome das bandas

const getBandsName = () => {
return bandsName = data.bands.map((band) => band.bandName);
}

module.exports = getBandsName;
