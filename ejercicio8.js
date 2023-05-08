/**
 * Exercise 8: we have an integer, invert it and return the new integer.
 * Example: inverted(67) return: 76.
 */

function inverted(number) {
    let positiveNumber = Math.abs(number);
    return Number(positiveNumber.toString().split('').reverse().join(''))
}

console.log("result:", inverted(-72));
