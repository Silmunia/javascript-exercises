const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((acc, value) => acc += value, 0);
};

const multiply = function(array) {
  return array.reduce((acc, value) => acc *= value, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(value) {
  let result = 1;

  for (let i = value; i > 0; i--) {
    result *= i;
  }

  return result;
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
