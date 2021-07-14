const data = require('./data');

// First commit
function getSpeciesByIds(...ids) {
  const { species } = data;
  const arrayReturned = [];
  ids.forEach((id) => arrayReturned.push(species.find((specie) => specie.id === id)));
  return arrayReturned;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

function getAnimalsOlderThan(animal, age) {
}

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (typeof employeeName !== 'string') {
    return {};
  }
  const wantedEmployee = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return wantedEmployee;
}

console.log(getEmployeeByName());

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
