const data = require('../data/zoo_data');

const species = (location, param) => {
  const speciess = data.species
    .filter((element) => element.location === location)
    .map((element) => element.name);
  return speciess;
};

function getAnimalByName(animal) {
  const bicho = data.species.find((element) => element.name === animal);
  return bicho.residents;
}

const inc = (element) => ({ [element]: getAnimalByName(element).map((element2) => element2.name) });

const incSort = (element) => {
  const obj = { [element]: getAnimalByName(element).map((element2) => element2.name).sort() };
  return obj;
};

function incSex2(param) {
  const incSex = (element) => ({ [element]: getAnimalByName(element).filter((element3) => {
    const condicao = (element3.sex === param.sex);
    return condicao;
  }).map((element2) => element2.name) });
  return incSex;
}

function incSexSort(param) {
  const incSex = (element) => ({ [element]: getAnimalByName(element).filter((element3) => {
    const condicao = (element3.sex === param.sex);
    return condicao;
  }).map((element2) => element2.name).sort() });
  return incSex;
}

function getAnimByLoc(location, param = {}) {
  const speciessss = species(location, param);
  if (!param.sorted && !param.sex) {
    return speciessss.map(inc);
  }
  if (param.sex !== undefined && !param.sorted) {
    return speciessss.map(incSex2(param));
  }
}

function getAnimByLocSort(location, param = {}) {
  const speciessss = species(location, param);
  if (!param.sex) {
    return speciessss.map(incSort);
  }
  if (param.sex !== undefined) {
    return speciessss.map(incSexSort(param));
  }
}

function Animals(param) {
  return {
    NE: species('NE', param),
    NW: species('NW', param),
    SE: species('SE', param),
    SW: species('SW', param),
  };
}

function defaultAnimals(param) {
  return {
    NE: param.sorted === true ? getAnimByLocSort('NE', param) : getAnimByLoc('NE', param),
    NW: param.sorted === true ? getAnimByLocSort('NW', param) : getAnimByLoc('NW', param),
    SE: param.sorted === true ? getAnimByLocSort('SE', param) : getAnimByLoc('SE', param),
    SW: param.sorted === true ? getAnimByLocSort('SW', param) : getAnimByLoc('SW', param),
  };
}

function getAnimalMap(param = {}) {
  // seu código aqui
  if (!param.includeNames) return Animals(param);
  if (param.includeNames === true) return defaultAnimals(param);
}

module.exports = getAnimalMap;
