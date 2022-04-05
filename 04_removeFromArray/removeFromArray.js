
let removeFromArray = function(...args) {
   const array = args[0]
   return array.filter(val => !args.includes(val))
 }
// Do not edit below this line
module.exports = removeFromArray;

// Iterate through the array 
// when i == to the argument
// the index should be removed from the array
// the loop should continue until all elements have been checked 
// once finished it should return the original array 
// if no matches are found then it should return a string stating that  