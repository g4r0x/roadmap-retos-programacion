// Acceso a caracteres especificos
let cadena = "Hola, mundo!";
let primerCaracter = cadena[0]; // 'H'
let ultimoCaracter = cadena[cadena.length - 1]; // '!'

// Subcadenas
let subcadena = cadena.substring(0, 4); // 'Hola'

// Longitud
let longitud = cadena.length; // 12

// Concatenacion
let cadena2 = " ¿Cómo estás?";
let concatenada = cadena + cadena2; // 'Hola, mundo! ¿Cómo estás?'

// Repeticion
let repetida = cadena.repeat(3); // 'Hola, mundo!Hola, mundo!Hola, mundo!'

// Recorrido
for (let caracter of cadena) {
  console.log(caracter);
}

// Conversion a mayusculas y minusculas
let mayusculas = cadena.toUpperCase(); // 'HOLA, MUNDO!'
let minusculas = cadena.toLowerCase(); // 'hola, mundo!'

// Reemplazo
let reemplazada = cadena.replace("mundo", "JavaScript"); // 'Hola, JavaScript!'

// Division
let dividida = cadena.split(", "); // ['Hola', 'mundo!']

// Union
let lista = ["Hola", "mundo!"];
let unida = lista.join(", "); // 'Hola, mundo!'

// Interpolacion
let nombre = "Juan";
let edad = 30;
let interpolada = `Me llamo ${nombre} y tengo ${edad} años.`; // 'Me llamo Juan y tengo 30 años.'

// Verificacion
let empiezaCon = cadena.startsWith("Hola"); // true
let terminaCon = cadena.endsWith("!"); // true
let contiene = cadena.includes("mundo"); // true

// Eliminacion de espacios en blanco
let cadenaEspacios = "  Hola, mundo!  ";
let sinEspacios = cadenaEspacios.trim(); // 'Hola, mundo!'

// Contar ocurrencias
let conteo = (cadena.match(/o/g) || []).length; // 2

// Encontrar indice
let indice = cadena.indexOf("mundo"); // 6

// Inversion
let invertida = cadena.split("").reverse().join(""); // '!odnum ,aloH'

// Comprobar si es numerica o alfabetica
let esNumerica = /^\d+$/.test(cadena); // false
let esAlfabetica = /^[a-zA-Z]+$/.test(cadena); // false

// Capitalizar (primera letra en mayuscula)
let capitalizada = cadena.charAt(0).toUpperCase() + cadena.slice(1); // 'Hola, mundo!'

// Titular (primera letra de cada palabra en mayuscula)
let titulo = cadena
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" "); // 'Hola, Mundo!'

// Alinear texto
let alineadaCentro = cadena
  .padStart((20 + cadena.length) / 2, " ")
  .padEnd(20, " "); // '   Hola, mundo!    '
let alineadaIzq = cadena.padEnd(20, " "); // 'Hola, mundo!       '
let alineadaDer = cadena.padStart(20, " "); // '       Hola, mundo!'

// Comprobacion de prefijo y sufijo
empiezaCon = cadena.startsWith("Hola"); // true
terminaCon = cadena.endsWith("!"); // true

/*
 * Crea un programa que analice dos palabras diferentes y realice comprobaciones
 * para descubrir si son:
 * - Palíndromos
 * - Anagramas
 * - Isogramas
 */

function limpiarCadena(cadena) {
  return cadena.toLowerCase().replace(/[^a-z]/g, "");
}

function esPalindromo(cadena) {
  const cadenaLimpia = limpiarCadena(cadena);
  return cadenaLimpia === cadenaLimpia.split("").reverse().join("");
}

function sonAnagramas(cadena1, cadena2) {
  const cadenaLimpia1 = limpiarCadena(cadena1).split("").sort().join("");
  const cadenaLimpia2 = limpiarCadena(cadena2).split("").sort().join("");
  return cadenaLimpia1 === cadenaLimpia2;
}

function esIsograma(cadena) {
  const cadenaLimpia = limpiarCadena(cadena);
  const letrasVistas = new Set();
  for (let letra of cadenaLimpia) {
    if (letrasVistas.has(letra)) {
      return false;
    }
    letrasVistas.add(letra);
  }
  return true;
}

function analizarPalabras(palabra1, palabra2) {
  console.log(`Analizando las palabras: "${palabra1}" y "${palabra2}"`);

  console.log(`"${palabra1}" es un palíndromo: ${esPalindromo(palabra1)}`);
  console.log(`"${palabra2}" es un palíndromo: ${esPalindromo(palabra2)}`);

  console.log(
    `"${palabra1}" y "${palabra2}" son anagramas: ${sonAnagramas(
      palabra1,
      palabra2
    )}`
  );

  console.log(`"${palabra1}" es un isograma: ${esIsograma(palabra1)}`);
  console.log(`"${palabra2}" es un isograma: ${esIsograma(palabra2)}`);
}

const palabra1 = "amor";
const palabra2 = "Roma";
analizarPalabras(palabra1, palabra2);
