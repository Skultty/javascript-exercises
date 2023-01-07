const findTheOldest = function(people) {
    let oldest = 0;
    let oldestPerson = {};
    people.forEach(person => {
        let age = getAge(person);
        if (age > oldest) {
        oldest = age;
        oldestPerson = person;
        }
    });
    return oldestPerson;
};

const getAge = function(person) {
    let age = 0;
    if (person.yearOfDeath) {
        age = person.yearOfDeath - person.yearOfBirth;
    } else {
        age = new Date().getFullYear() - person.yearOfBirth;
    }
    return age;
};

// Do not edit below this line
module.exports = findTheOldest;
