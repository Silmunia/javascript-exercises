const convertToCelsius = function(fahrenheitTemp) {
  let newTemp = (fahrenheitTemp - 32) * 5 / 9;

  let result = Math.round(newTemp * 10) / 10;

  return result;
};

const convertToFahrenheit = function(celsiusTemp) {
  let newTemp = (celsiusTemp * 9 / 5) + 32;

  let result = Math.round(newTemp * 10) / 10;

  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
