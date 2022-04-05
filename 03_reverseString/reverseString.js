const reverseString = backwards;

function backwards(string) {
let newString = Array.from(string);
let arrayReverse = newString.reverse();
let newStringReverse= arrayReverse.join("");
return newStringReverse;
};
// Do not edit below this line
module.exports = reverseString;
