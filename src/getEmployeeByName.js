const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = 'vazio') {
  // seu código aqui
  if (employeeName === 'vazio') return {};
  function funcaoInterna(element) {
    return employeeName === element.firstName
    || employeeName === element.lastName;
  }
  return employees.find(funcaoInterna);
}

module.exports = getEmployeeByName;
