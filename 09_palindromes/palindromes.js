


// make letters consistant 
// remove numbers 
// split characters into an array 
// reverse the array 
// Use an if, or for loop to sort the array and see if characters match. 
// -- * possible use a for loop and see if that works 
// return a boolean value to see if it is true or false. 

const palindromes = function isPalindromes (string) {
    let Array1 = Array.from(string.toLowerCase()); 
    let Array2 =  Array.from(string.toLowerCase());
    Array2.reverse();
  console.log(Array2)
  console.log(Array1)
    if(Array1.toString() == Array2.toString()) {
      return true; 
    } else {
      return false; 
    }
};







// Do not edit below this line
module.exports = palindromes;
