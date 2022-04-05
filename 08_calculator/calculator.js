const add = function(a, b) {
	let total = (a+b);
  return total; 
};

const subtract = function(a, b) {
  let total = (a-b); 
  return total; 
	
};

const sum = function(array) {
  total = array.reduce(function(a, b) { return a + b; }, 0);
  return total;
	
};

const multiply = function(array) {
  let sum=1;
  for (var i=0; i<array.length; i++) {
      sum = sum * array[i];
  } 
  return sum;

};

const power = function(a, b) {
	let total = Math.pow(a, b);
  return total;
};


const factorial = function(num) {
  if (num < 0){
    return -1; 
  }else if (num === 0){
    return 1;
  } else {
    return (num * factorial(num-1));
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
