const data = require('../data/zoo_data');

function getAnimalByName(animal) {
  const bicho = data.species.find((element) => element.name === animal);
  return bicho;
}

function getAimalsBySex(animal, sex) {
  const residentes = getAnimalByName(animal).residents;
  const sexList = residentes.filter((element) => element.sex === sex);
  return sexList;
}

function getAnimalsQuantity() {
  const obj = {};
  data.species.forEach((element) => {
    obj[element.name] = getAnimalByName(element.name).residents.length;
  });
  return obj;
}

function countAnimals(parametro) {
  // seu código aqui
  if (parametro === undefined) return getAnimalsQuantity();
  const animal = Object.values(parametro)[0];
  const sexo = Object.values(parametro)[1];
  const total = getAnimalByName(animal).residents.length;
  const porSexo = getAimalsBySex(animal, sexo);
  if (sexo === undefined) return total;
  return porSexo.length;
}

module.exports = countAnimals;
