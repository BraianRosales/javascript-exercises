/**
 * Enunciado Ejercicio 2:
 * Dada una cadena de texto, comprobar si es un palíndromo o no.
 * Los palíndromos son palabras que se lee igual a un estado invertido.
 * Por ejemplo: ana, bob, otto, allivessevilla.
 * 
 * No tener en cuenta espacios o simbolos raros.
 * 
 * Ejmplos: 
 * - Ejecuto esta función:
 * palindromo("otto") // Devuelve: true.
 * palindromo("victor") //Devuelve: false.
 * 
 * Como hacerlo:
 * - Funcion con parametro "texto".
 * - Separar el texto en un array de letras.
 * - Darle la vuelta.
 * - Unir el array de letras en un string y comparar con el parametro.
 */

function palindromo(text) {
    // console.log(text.split(' ')); Devuelve un array [ 'Hola', 'mundo', 'todo', 'bien' ] en el caso de text sea = 'Hola mundo todo bien'
    const invertedWord = text.split('').reverse().join('')
    return invertedWord === text
}

console.log('¿Es palíndromo? -',palindromo('allivessevilla'));