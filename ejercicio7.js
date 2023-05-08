/**
 * Exercise 7: we have two numbers, return how many numbers odd there are between them.
 * example: odds(1,100) //return: 49.
 */

//Opcíon 1.
function odds(numberOne, numberTwo) {
    let oddCount = 0;
    for (let index = numberOne; index < numberTwo - 1; index++) {
        oddCount += index % 2 === 0 ? 0 : 1;
    }
    return oddCount;
}

//Opción 2.
function impares(numberOne, numberTwo) {
    let oddCount = 0;
    let index = numberOne;
    while(index < numberTwo - 1) {
        oddCount += index % 2 === 0 ? 0 : 1;
        index++
    }
    return oddCount;
}

console.log('números impares:',odds(1,100));
// console.log('números impares:',impares(1,100));