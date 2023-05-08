/**
 * Encontrar cuantas coincidencias hay en la frase con el parametro "palabra".
 *
 * Ejemplo: coincidencias("hola soy una palabra en una frase, PALABRA","palabra") = devuelve 2.
 *          coincidencias("soy la frase", "victor") = devuelve 0.
 */

function coincidencias(sentence, word) {
    const coincidences = sentence
    .split(" ")
    .map((word) => word.toLowerCase())
    .reduce((acc, curr) => {
        return curr == word ? acc + 1 : acc + 0;
    }, 0);

    return coincidences;
}

console.log("resultado:", coincidencias("hola soy una palabra en una frase, PALABRA.", "palabra"));
