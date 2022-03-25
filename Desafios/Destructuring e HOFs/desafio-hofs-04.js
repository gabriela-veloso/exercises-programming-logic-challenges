const data = require('./data');

// 4 - Filtre e retorne um array apenas com o nome das bandas que são dos Estados Unidos

const usaFilter = () => {
const bandsAllDetails = data.bands.filter((band) => band.country === 'United States');
const bandsNameOnly = bandsAllDetails.map((band) => band.bandName);
console.log(bandsNameOnly);
return bandsNameOnly;
}
usaFilter();

module.exports = usaFilter;
