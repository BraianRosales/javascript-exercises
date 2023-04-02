/**
 * We have a number, show a stair with steps of "[-]"
 * using the number for the levels of the stair.
 * 
 *  Example:
 *  stair(4) // Return: 
 *  [-]
 *  [-][-]
 *  [-][-][-]
 *  [-][-][-][-]
 */

/** My exercise. */

// function stair(steps) {
//     let stair = '';
//     for (let index = 1; index <= steps; index++) {
//         stair += `${numbersOfSteps(index)}\n`;
//     }
//     return stair;
// }

// function numbersOfSteps(lineSize) {
//     let stairLine = '';
//     for (let index = 0; index < lineSize; index++) {
//         stairLine += "[-]"
//     }
//     return stairLine;
// }

/** Exercise made by chatGPT. */

function stair(steps) {
    let stair = '';
    for (let index = 1; index <= steps; index++) {
        stair += `${"[-]".repeat(index)}\n`;
    }
    return stair;
}

console.log(stair(4));