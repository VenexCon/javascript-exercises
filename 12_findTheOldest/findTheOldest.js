const findTheOldest = function(array) {
    return array.reduce(function (prev, current) {
        const oldestAge = getAge(prev.yearOfBirth, prev.yearOfDeath);
        const newAge = getAge(current.yearOfBirth,  current.yearOfDeath)
          return  (oldestAge > newAge) ? prev : current;
      })
  };
  

function getAge (birth, death ) {
    if (!death) {
        death = new Date().getFullYear()
    } return death - birth; 
}




// Do not edit below this line
module.exports = findTheOldest;
