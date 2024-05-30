// Sin parameteros y retorno
function saludo() {
  console.log("¡Hola, Mundo!");
}
saludo(); // Imprime: ¡Hola, Mundo!

// Con parametros
function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}
saludar("Juan"); // Imprime: ¡Hola, Juan!

// Con varios parametros
function sumar(a, b) {
  console.log(`La suma de ${a} y ${b} es ${a + b}`);
}

sumar(5, 3); // Imprime: La suma de 5 y 3 es 8

// Con retorno
function multiplicar(a, b) {
  return a * b;
}
let resultado = multiplicar(4, 5);
console.log(`El resultado de la multiplicación es ${resultado}`); // Imprime: El resultado de la multiplicación es 20

// Funciones dentro de funciones
function operacion(a, b) {
  function sumar(x, y) {
    return x + y;
  }
  function restar(x, y) {
    return x - y;
  }

  let suma = sumar(a, b);
  let resta = restar(a, b);

  console.log(`La suma es ${suma}`); // Imprime: La suma es (a + b)
  console.log(`La resta es ${resta}`); // Imprime: La resta es (a - b)
}
operacion(10, 5); // Imprime los resultados de la suma y resta

// Ejemplo de funciones creadas en el lenguaje
let array = [1, 2, 3, 4, 5];

let arraySum = array.reduce((acc, curr) => acc + curr, 0);
console.log(`La suma del array es ${arraySum}`); // Imprime: La suma del array es 15

let arrayFilter = array.filter((num) => num % 2 === 0);
console.log(`Los números pares del array son ${arrayFilter}`); // Imprime: Los números pares del array son 2,4

// Variable global
let globalVariable = "Soy global";

function mostrarGlobal() {
  console.log(globalVariable);
}
mostrarGlobal(); // Imprime: Soy global

// Variable local
function mostrarLocal() {
  let localVariable = "Soy local";
  console.log(localVariable);
}
mostrarLocal(); // Imprime: Soy local
// console.log(localVariable); // Esto causaría un error porque localVariable no está definida fuera de la función

// Alcance de variables
let variableGlobal = "Global";

function primeraFuncion() {
  let variableLocal = "Local de primeraFuncion";
  console.log(variableGlobal); // Imprime: Global
  console.log(variableLocal); // Imprime: Local de primeraFuncion
}

function segundaFuncion() {
  let variableLocal = "Local de segundaFuncion";
  console.log(variableGlobal); // Imprime: Global
  console.log(variableLocal); // Imprime: Local de segundaFuncion
}
primeraFuncion();
segundaFuncion();

// Comprobacion de funciones
console.log("Comprobación de funciones:");

saludo(); // ¡Hola, Mundo!
saludar("Ana"); // ¡Hola, Ana!
sumar(8, 2); // La suma de 8 y 2 es 10
resultado = multiplicar(6, 7);
console.log(`El resultado de la multiplicación es ${resultado}`); // El resultado de la multiplicación es 42
operacion(12, 4); // La suma es 16, La resta es 8
mostrarGlobal(); // Soy global
mostrarLocal(); // Soy local
primeraFuncion(); // Global, Local de primeraFuncion
segundaFuncion(); // Global, Local de segundaFuncion

/*
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 */

function imprimirNumeros(palabra1, palabra2) {
  let contador = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(palabra1 + palabra2); // Múltiplo de 3 y 5
    } else if (i % 3 === 0) {
      console.log(palabra1); // Múltiplo de 3
    } else if (i % 5 === 0) {
      console.log(palabra2); // Múltiplo de 5
    } else {
      console.log(i); // Número que no es múltiplo de 3 ni de 5
      contador++;
    }
  }
  return contador;
}
let vecesNumerosImpresos = imprimirNumeros("Fizz", "Buzz");
console.log(
  `Número de veces que se han impreso los números: ${vecesNumerosImpresos}`
);
