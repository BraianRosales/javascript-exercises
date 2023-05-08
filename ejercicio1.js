/**
 * Enunciado Ejercicio 1:
 * Dado un número, devolver su tabla de multiplicar completa.
 * 
 * Ejemplos:
 * - Ejecuto esta función:
 * tablaMultiplicar(5)
 * 
 * - Me devuelve este resultado:
 * # Tabla del 5 #
 * 1 x 5 = 5
 * 2 x 5 = 10
 * 3 x 5 = 15
 * 4 x 5 = 20
 * Etc... hasta 10.
 * 
 * Como hacerlo:
 * - Funcion con parametro "numero".
 * - Variable con texto encabezado.
 * - Bucle del 1 al 10.
 * - Concatenar a la variable string con multiplicación y su resultado.
 */
function tablaMultiplicar(n) {
    let result = '';
    let table = [];
    for (let index = 1; index <= 10; index++) {
        result = index * n
        table += `${index} X ${n} = ${result} \n`
    }
    return table;
}

console.log(tablaMultiplicar(5));

