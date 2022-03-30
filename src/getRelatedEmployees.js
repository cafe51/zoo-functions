const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

const stephanieId = getEmployeeByName('Stephanie').id;

const olaId = getEmployeeByName('Ola').id;

const burlId = getEmployeeByName('Burl').id;

const gerentes = [stephanieId, olaId, burlId];

function isManager(id) {
  // seu código aqui
  return gerentes.some((element) => element === id);
}

function getEmployeesByGerentes(managerId) {
  const array = [];
  data.employees.forEach((element) => {
    if (element.managers[0] === managerId || element.managers[1] === managerId) {
      array.push(`${element.firstName} ${element.lastName}`);
    }
  });
  return array;
}

function getRelatedEmployees(managerId) {
  data.employees.find((element) => element.id === managerId);
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else return getEmployeesByGerentes(managerId);
}

module.exports = { isManager, getRelatedEmployees };
