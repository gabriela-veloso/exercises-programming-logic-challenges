const data = require('./data');

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = () => {
const {bestAlbuns, bandName} = data.bands[0];
const everyNameAlbum = bestAlbuns.map((nameAlbum) => nameAlbum.name)
return  `Os Melhores álbuns do ${bandName}: ${everyNameAlbum}`;
}

module.exports = getBestAlbuns;
