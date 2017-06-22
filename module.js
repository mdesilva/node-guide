var numElements = function(arr){
  console.log("There are " + arr.length + " elements in the array");
};


var multiplier = function(a,b){
  return `The product of the 2 numbers is ${a*b}`;
};


var pi = 3.14;
// module.exports defines what parts of this module can be used in other modules

//module.exports patterns

//1. module.exports = numElements;

//2.
module.exports.numElements = numElements;
module.exports.multiplier = multiplier;
module.exports.pi = pi;

//3. literal notation
/*module.exports {
  numElements: numElements,
  multiplier: multiplier,
  pi: pi
}; */


//4
module.exports.adder = function(c,d){
  return `The sum of two numbers is ${c+d}`;
}
