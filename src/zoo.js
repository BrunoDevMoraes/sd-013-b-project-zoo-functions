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
  // seu código aqui
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

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  const { employees } = data;
  const rq = employees.find((employee) =>
    employee.id === id);
  if (rq.firstName === 'Stephanie' || rq.firstName === 'Ola' || rq.firstName === 'Burl') {
    return true;
  }
  return false;
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(target) {
  const { species } = data;
  if (typeof target === 'string') {
    const animal = species.find((specie) => specie.name === target);
    return animal.residents.length;
  }
  if (typeof target === 'undefined') {
    const allAnimals = {};
    species.forEach((specie) => {
      const animalName = specie.name;
      const animalQuantity = specie.residents.length;
      allAnimals[`${animalName}`] = animalQuantity;
    });
    return allAnimals;
  }
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
  const { species } = data;
  const { employees } = data;
  const wantedEmployee = employees.find((employee) => employee.id === id);
  const firstAnimalId = wantedEmployee.responsibleFor[0];
  const wantedSpecie = species.find((specie) => specie.id === firstAnimalId);
  let higherAge = 0;
  let oldestResident;
  wantedSpecie.residents.forEach((resident) => {
    if (higherAge < resident.age) {
      higherAge = resident.age;
      oldestResident = resident;
    }
  });
  const topics = Object.values(oldestResident);
  return topics;
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

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
