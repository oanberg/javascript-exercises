function add(a,b) {
  return a + b;

}

function subtract (a, b) {
  return a - b

}

function sum(array) {
  let total = 0;
  for (const number of array) {
    total += number;
  }
  return total
}

function multiply(array) {
  let sum = 1;
  for (const a of array) {
    sum *= a;

  }
  return sum
}

function power(a,b) {
  return a ** b
}

function factorial(n) {
  let product = 1; 
  for (let i = 1; i <= n; i++) {
    product *= i
  }
  return product
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
