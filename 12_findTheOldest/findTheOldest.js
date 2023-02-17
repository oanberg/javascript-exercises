function findTheOldest(objectArray) {
    objectArray = findAge(objectArray);
    sortedArray = objectArray.sort((a,b) => {
        return b.age - a.age;
    });
    return sortedArray[0];
}

const date = new Date()

function findAge(objectArray) {
    for (let object of objectArray) {
        if (!object["yearOfDeath"]) {
            object["age"] = date.getFullYear() - object["yearOfBirth"]
        } else {
        object["age"] = object["yearOfDeath"] - object["yearOfBirth"]
    }
    }
    return objectArray;
}

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
// Do not edit below this line
module.exports = findTheOldest;
