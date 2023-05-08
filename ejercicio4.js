/**
 * Invertir una oración usando solo iteradores/ estructura de control de javascript sin metodos.
 * Ejemplos: - invertir('hola') //devuelve 'aloh'.
 *           - invertir('victori') //devuelve 'rotciv'.
 */

function invertir(texto) {
    let invertedText = "";
    for (let index = 1; index <= texto.length; index++) {
        invertedText = invertedText + texto[texto.length - index];
    }
    return invertedText;
}

console.log('resultado:', invertir('Rosales'));