const data = require('../data/zoo_data');

const { species } = data;

function achaAnimais(animal) {
  const especie = species.find((element, index) => animal === species[index].name);
  return especie.residents;
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = achaAnimais(animal);
  return animais
    .map((element) => element.age)
    .every((element) => element > age);
}

console.log(getAnimalsOlderThan('penguins', 10));
// console.log(achaAnimais('lions'));

module.exports = getAnimalsOlderThan;
