function createFibonacci(length) {
    let fibonacciSequence = [1, 1]
    for (let i = 1; i <= length; i++) {
       let summedNumbers = Number(fibonacciSequence[fibonacciSequence.length-1]) + Number(fibonacciSequence[fibonacciSequence.length-2]);
        fibonacciSequence.push(summedNumbers);
    }
    return fibonacciSequence.slice(0,fibonacciSequence.length-2);

}

function fibonacci(number) {
    number = Number(number);
    if (number < 0) {
        return "OOPS";
    } else {
    sequence = createFibonacci(number);
    return sequence[number-1] }
}

// Do not edit below this line
module.exports = fibonacci;
