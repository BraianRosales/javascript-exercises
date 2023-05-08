/**
 *  Create a function that returns the percent of a number.
 *  Examples: - soMuchPercent(20,100) // return: 20.
 *            - soMuchPercent(43,897) // return: 385.71.
 */

function soMuchPercent(percent, number) {
    return percent * number / 100;
}

console.log('devuelve:', soMuchPercent(43, 897));