/**
 * EXERCISE: We have a number to display all numbers since that number to zero of 8 by 8 in a lista with dashes and each number must to start for number. 
 * EXAMPLES: 
 *      toZero(100) // Return:
 * 
 * --- from 100 to 0 ---
 * - n°100
 * - n°92
 * - n°84
 * - n°76
 * - n°68
 * - n°60
 * - n°52
 * - n°44
 * - n°36
 * - n°28
 * - n°20
 * - n°12
 * - n°4
 * --- FIN ---
 */

function toZero(number) {
    let numberToDiscount = number;
    let numbersArray = ``;
    for (let index = 0; index < numberToDiscount;) {
        numbersArray += `- n°${numberToDiscount}\n`
        numberToDiscount = numberToDiscount - 8;
    }
    return numbersArray
}

console.log(toZero(100))