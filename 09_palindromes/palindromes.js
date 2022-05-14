


// make letters consistant 
// remove numbers - Look up REgex
// split characters into an array 
// reverse the array 
// Use an if, or for loop to sort the array and see if characters match. 
// -- * possible use a for loop and see if that works 
// return a boolean value to see if it is true or false. 

const palindromes = function isPalindrome (string) {
  let newString = string.toLowerCase().replace(/[^a-z]/g, "");
  let Array1 = Array.from(newString.toLowerCase()); 
  let Array2 = Array.from(newString.toLowerCase());
      Array2.reverse();

  if(Array1.toString() == Array2.toString()) {
    return true; 
  } else{
    return false; 
  }
};







// Do not edit below this line
module.exports = palindromes;
