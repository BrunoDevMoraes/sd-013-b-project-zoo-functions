const data = require('./data');

const { species } = data;
const { employees } = data;

// Requisito 1
function getSpeciesByIds(...ids) {
  const arrayReturned = [];
  ids.forEach((id) => arrayReturned.push(species.find((specie) => specie.id === id)));
  return arrayReturned;
}

// Requisito 2
function getAnimalsOlderThan(animal, age) {
  const wantedSpecie = species.find((specie) => specie.name === animal);
  const { residents } = wantedSpecie;
  const filteredResidents = residents.filter((resident) => resident.age >= age);
  if (filteredResidents.length === residents.length) return true;
  return false;
}

// Requisito 3
function getEmployeeByName(employeeName) {
  if (typeof employeeName !== 'string') {
    return {};
  }
  const wantedEmployee = employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);

  return wantedEmployee;
}

// Requisito 4
function createEmployee(personalInfo, associatedWith) {
  const { id } = personalInfo;
  const { firstName } = personalInfo;
  const { lastName } = personalInfo;
  const { managers } = associatedWith;
  const { responsibleFor } = associatedWith;
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

// Requisito 5
function isManager(id) {
  const rq = employees.find((employee) =>
    employee.id === id);
  if (rq.firstName === 'Stephanie' || rq.firstName === 'Ola' || rq.firstName === 'Burl') {
    return true;
  }
  return false;
}

// Requisito 6
function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  employees.push(newEmployee);
}

// Requisito 7
function countAnimals(target) {
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

// Requisito 8
function calculateEntry(entrants) {
  // seu código aqui
}

// Requisito 9
function getAnimalMap(options) {
  // seu código aqui
}

// Requisito 10
function getSchedule(dayName) {
  // seu código aqui
}

// Requisito 11
function getOldestFromFirstSpecies(id) {
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

// Requisito 12;
function increasePrices(percentage) {
  // seu código aqui
}

// Requisito 13
function returnAllEmployees() {
  const allEmployees = {};
  employees.forEach((employee) => {
    const responsabilities = employee.responsibleFor;
    responsabilities.forEach((responsability, index) => {
      species.forEach((specie) => {
        let animalName;
        if (specie.id === responsability) {
          animalName = specie.name;
          responsabilities[index] = animalName;
        }
      });
    });
    allEmployees[`${employee.firstName} ${employee.lastName}`] = responsabilities;
  });
  return allEmployees;
}
function getEmployeeCoverage(idOrName) {
  if (typeof idOrName === 'undefined') return returnAllEmployees();
  const wantedEmployee = employees
    .find((employee) => {
      const a = employee.firstName;
      const b = employee.lastName;
      const c = employee.id;
      return a === idOrName || b === idOrName || c === idOrName;
    });
  const employeeName = `${wantedEmployee.firstName} ${wantedEmployee.lastName}`;
  const allEmployees = returnAllEmployees();
  return { [`${employeeName}`]: allEmployees[`${employeeName}`] };
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
