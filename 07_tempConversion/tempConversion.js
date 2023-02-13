function convertToCelsius(inputTemperature) {
    let celsius = (inputTemperature - 32) * .5556
    return Math.round(celsius * 10) / 10

}

function convertToFahrenheit(inputTemperature) {
  let fahrenheit = (inputTemperature * 1.8) + 32
  return Math.round(fahrenheit * 10) / 10

}


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
