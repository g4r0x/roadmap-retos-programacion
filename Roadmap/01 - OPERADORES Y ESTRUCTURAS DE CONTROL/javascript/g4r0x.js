// Operadores aritmeticos
let a = 10;
let b = 5;
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);
console.log("Exponenciación:", a ** b);

// Operadores logicos
let x = true;
let y = false;
console.log("AND:", x && y); // false
console.log("OR:", x || y); // true
console.log("NOT:", !x); // false

// Operadores de comparacion
console.log("Igual:", a == b); // false
console.log("No Igual:", a != b); // true
console.log("Mayor que:", a > b); // true
console.log("Menor que:", a < b); // false
console.log("Mayor o igual:", a >= b); // true
console.log("Menor o igual:", a <= b); // false

// Operadores de asignacion
let c = 20;
console.log("Asignación:", c);

c += 10;
console.log("Asignación con suma:", c);

c -= 5;
console.log("Asignación con resta:", c);

c *= 2;
console.log("Asignación con multiplicación:", c);

c /= 5;
console.log("Asignación con división:", c);

c %= 3;
console.log("Asignación con módulo:", c);

// Operadores de identidad
console.log("Estrictamente igual:", a === b); // false
console.log("Estrictamente no igual:", a !== b); // true

// Operadores de pertenencia
let array = [1, 2, 3, 4, 5];
console.log("Incluye 3:", array.includes(3)); // true
console.log("Incluye 6:", array.includes(6)); // false

// Operadores de Bits
let m = 5; // 0101
let n = 3; // 0011
console.log("AND a nivel de bits:", m & n); // 1 (0001)
console.log("OR a nivel de bits:", m | n); // 7 (0111)
console.log("XOR a nivel de bits:", m ^ n); // 6 (0110)
console.log("Desplazamiento a la izquierda:", m << 1); // 10 (1010)
console.log("Desplazamiento a la derecha:", m >> 1); // 2 (0010)

// Estructuras de control (if, if-else, switch, for, for-in, for-of, while, do-while)
// if
let age = 20;
if (age >= 18) {
  console.log("Eres mayor de edad.");
}

// if-else
age = 30;
if (age >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

// switch
let dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Día inválido");
}

// for
for (let i = 0; i < 5; i++) {
  console.log(`For loop, iteración: ${i}`);
}

// for-in
let object = { a: 1, b: 2, c: 3 };
for (let key in object) {
  console.log(`For-In loop, clave: ${key}, valor: ${object[key]}`);
}

// for-of
let arr = [10, 20, 30, 40, 50];
for (let value of arr) {
  console.log(`For-Of loop, valor: ${value}`);
}

// while
let i = 0;
while (i < 5) {
  console.log(`While loop, iteración: ${i}`);
  i++;
}

// do-while
let j = 0;
do {
  console.log(`Do-While loop, iteración: ${j}`);
  j++;
} while (j < 5);

// Excepciones (try-catch-finally)
try {
  let result = 10 / 0;
  if (!isFinite(result)) {
    throw new Error("División por cero");
  }
  console.log(`Resultado: ${result}`);
} catch (error) {
  console.log(`Error capturado: ${error.message}`);
} finally {
  console.log("Bloque finally ejecutado.");
}

/*
 * Programa que imprime por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 */

for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}
