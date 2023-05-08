/**
 * Exercise nine: having two arrays, return an array that containing only the numbers in the two arrays.
 * Example: commonElements([4,5,6,7],[7,8,9,7,5]) // return: [5,7].
 */

function commonElements(array1, array2){
    const newArray = array1.reduce((acc,curr) => {
        return array2.includes(curr) ? [...acc, curr] : [...acc]
    },[])
    return newArray;
}

console.log('coincidences:',commonElements([4,5,6,7], [7,8,9,7,5]));