/**
 * Exercise six: Paint a hollow square with asterisks.
 * Example: square(4)
 * 
 * return:
 *   ****
 *   *  *
 *   *  *
 *   ****
 */

function asterisksLeftRight(size, originalSize) {
    let lineLeftRight = '';
    let asterisksleftRight = '';
    for (let index = 0; index < originalSize; index++) {
        lineLeftRight += index == 0 || index == originalSize - 1 ? '*' : " ";
    }
    for (let i = 0; i < size; i++) {
        asterisksleftRight += `${lineLeftRight}\n`;
    }
    return asterisksleftRight
}

function square(size) {
    let asterisksUpDown = '';
    for (let index = 0; index < size; index++) {
        asterisksUpDown += '*';
    }
    return `${asterisksUpDown}\n${asterisksLeftRight(size - 2, size)}${asterisksUpDown}`
}

console.log(square(6));