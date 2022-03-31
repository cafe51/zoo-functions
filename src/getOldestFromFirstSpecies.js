const data = require('../data/zoo_data');

const getEmployeeById = (id) => data.employees.find((element) => element.id === id);

const getAnimalByID = (id) => data.species.find((element) => element.id === id);

const getAnimalByEmployee = (id) => getAnimalByID(getEmployeeById(id).responsibleFor[0]);

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const residentes = getAnimalByEmployee(id).residents;
  const oldest = residentes.reduce((acc, result) => {
    if (acc.age > result.age) return acc;
    return result;
  });
  return [oldest.name, oldest.sex, oldest.age];
}

console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
