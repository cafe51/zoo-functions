const data = require('../data/zoo_data');

const listaDeIds = () => data.employees.map((element) => element.id);

const listaDeNames = () => data.employees.map((element) => element.firstName);

const listadeLastName = () => data.employees.map((element) => element.lastName);

const listaTotal = [...listaDeIds(), ...listaDeNames(), ...listadeLastName()];

const getAnimalByID = (id) => data.species.find((element) => element.id === id);

const getEmployeeById = (id) => {
  if (!listaTotal.includes(id)) throw new Error('Informações inválidas');
  const resposta = data.employees.find((element) => element.id === id);
  return resposta;
};

const getEmployeeIdByName = (name) => {
  if (!listaTotal.includes(name)) throw new Error('Informações inválidas');
  const employee = data.employees.find((element) => {
    const resposta = (element.firstName === name || element.lastName === name);
    return resposta;
  });
  return employee.id;
};

const getResonsibleAnimals = (id) => getEmployeeById(id)
  .responsibleFor
  .map((element) => getAnimalByID(element).name);

const getLocation = (id) => getEmployeeById(id).responsibleFor
  .map((element) => getAnimalByID(element).location);

const getOneEmployee = (id = {}) => {
  const obj = {
    id,
    fullName: `${getEmployeeById(id).firstName} ${getEmployeeById(id).lastName}`,
    species: getResonsibleAnimals(id),
    locations: getLocation(id),
  };
  return obj;
};

const listOfEmployees = () => {
  const resposta = listaDeIds().map((element) => {
    const obj = {
      id: element,
      fullName: `${getEmployeeById(element).firstName} ${getEmployeeById(element).lastName}`,
      species: getResonsibleAnimals(element),
      locations: getLocation(element),
    };
    return obj;
  });
  return resposta;
};

function getEmployeesCoverage(parameter) {
  // seu código aqui
  if (!parameter) return listOfEmployees();
  if (!parameter.name) return getOneEmployee(parameter.id);
  if (!parameter.id) return getOneEmployee(getEmployeeIdByName(parameter.name));
}

module.exports = getEmployeesCoverage;
