const data = require('../data/zoo_data');

const animais = data.species.map((element) => element.name);
const week = Object.keys(data.hours);
const diasEanimais = [...animais, ...week];

function getExihibitiondays(animal) {
  const bixo = data.species.find((element) => element.name === animal);
  return bixo.availability;
}

function mountObject(day) {
  const obj = {};
  day.forEach((element) => {
    const exib = data.species.filter((element2) => element2.availability.includes(element))
      .map((element2) => element2.name);
    const { open, close } = data.hours[element];
    obj[element] = {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: exib.length === 0 ? 'The zoo will be closed!' : exib,
    };
  });
  return obj;
}

function getSchedule(...day) {
  if (day.length === 0 || !diasEanimais.includes(day[0])) return getSchedule(...week);
  if (animais.includes(day[0])) return getExihibitiondays(day[0]);
  return mountObject(day);
}

module.exports = getSchedule;
