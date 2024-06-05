// Asignación por valor
let a = 10;
let b = a; // Se copia el valor de 'a' en 'b'
b = 20; // Cambiar 'b' no afecta a 'a'
console.log("a:", a); // Salida: a: 10
console.log("b:", b); // Salida: b: 20

// Asignación por referencia
let list1 = [1, 2, 3];
let list2 = list1; // 'list2' referencia al mismo objeto que 'list1'
list2.push(4); // Cambiar 'list2' afecta a 'list1'
console.log("list1:", list1); // Salida: list1: [1, 2, 3, 4]
console.log("list2:", list2); // Salida: list2: [1, 2, 3, 4]

// Funcion por valor
function increment(x) {
  x += 1;
  return x;
}
let c = 10;
let d = increment(c);
console.log("c:", c); // Salida: c: 10
console.log("d:", d); // Salida: d: 11

// Funcion por referencia
function addElement(lst) {
  lst.push(4);
}
let list3 = [1, 2, 3];
addElement(list3);
console.log("list3:", list3); // Salida: list3: [1, 2, 3, 4]

/*
 * DIFICULTAD EXTRA (opcional):
 * Crea dos programas que reciban dos parámetros (cada uno) definidos como
 * variables anteriormente.
 * - Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
 *   Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
 *   se asigna a dos variables diferentes a las originales. A continuación, imprime
 *   el valor de las variables originales y las nuevas, comprobando que se ha invertido
 *   su valor en las segundas.
 *   Comprueba también que se ha conservado el valor original en las primeras.
 */

// Programa que intercambia dos variables primitivas por valor
function swapByValue(x, y) {
  return [y, x];
}
let e = 5;
let f = 10;
let [g, h] = swapByValue(e, f);
console.log("e:", e); // Salida: a: 5
console.log("f:", f); // Salida: b: 10
console.log("g:", g); // Salida: c: 10
console.log("h:", h); // Salida: d: 5

// Programa que intercambia valores por referencia
function swapByReference(arr1, arr2) {
  let temp = arr1.slice(); // Copia de arr1
  arr1.length = 0;
  arr1.push(...arr2);
  arr2.length = 0;
  arr2.push(...temp);
}

let list4 = [1, 2, 3];
let list5 = [4, 5, 6];
swapByReference(list4, list5);

console.log("list4:", list4); // Salida: list4: [4, 5, 6]
console.log("list5:", list5); // Salida: list5: [1, 2, 3]
