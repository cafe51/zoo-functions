const data = require('../data/zoo_data');

function getSpeciesByIds(...identificacao) {
  const { species } = data;
  const array = [];
  function buscador(elemento) {
    return array.push(species.find((element) => elemento === element.id));
  }

  identificacao.forEach(buscador);

  return array;
}

module.exports = getSpeciesByIds;
