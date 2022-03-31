const data = require('../data/zoo_data');

function countEntrants(parametro) {
  const obj = {
    adult: parametro.filter((element) => element.age >= 18 && element.age < 50).length,
    child: parametro.filter((element) => element.age < 18).length,
    senior: parametro.filter((element) => element.age >= 50).length,
  };
  return obj;
}

function calculateEntry(parametro = {}) {
  if (!Object.keys(parametro)[0]) return 0;
  const { adult: adultPrice, senior: seniorPrice, child: childPrice } = data.prices;
  const { adult, child, senior } = countEntrants(parametro);
  return (child * childPrice + adult * adultPrice + senior * seniorPrice);
}

module.exports = { calculateEntry, countEntrants };
