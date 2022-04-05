




const ftoc = function(num) {
let hold = ((num-32) * (5/9) )
let Celcius = Math.round(hold*10)/10;
return Celcius; 

};




const ctof = function(num) {
  let hold = ((num* (9/5)+32));
  let farenheit = Math.round(hold*10)/10;
  return farenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
