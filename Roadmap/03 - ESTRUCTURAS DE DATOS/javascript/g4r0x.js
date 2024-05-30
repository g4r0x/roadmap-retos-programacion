// Arrays
let array = [5, 3, 8, 1];
console.log("Array inicial:", array);

array.push(10);
console.log("Después de push:", array);

array.unshift(2);
console.log("Después de unshift:", array);

array.pop();
console.log("Después de pop:", array);

array.shift();
console.log("Después de shift:", array);

array[1] = 6;
console.log("Después de actualización:", array);

array.sort((a, b) => a - b);
console.log("Después de sort:", array);

// Objetos
let objeto = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};
console.log("Objeto inicial:", objeto);

objeto.pais = "España";
console.log("Después de inserción:", objeto);

objeto.edad = 31;
console.log("Después de actualización:", objeto);

delete objeto.ciudad;
console.log("Después de borrado:", objeto);

// Sets
let set = new Set([1, 2, 3]);
console.log("Set inicial:", set);

set.add(4);
console.log("Después de add:", set);

set.delete(2);
console.log("Después de delete:", set);

// Mapas
let mapa = new Map([
  ["nombre", "Juan"],
  ["edad", 30],
  ["ciudad", "Madrid"],
]);
console.log("Mapa inicial:", mapa);

mapa.set("pais", "España");
console.log("Después de set (inserción):", mapa);

mapa.set("edad", 31);
console.log("Después de set (actualización):", mapa);

mapa.delete("ciudad");
console.log("Después de delete:", mapa);

// Ordenación de array de objetos
let personas = [
  { nombre: "Juan", edad: 30 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 35 },
];

personas.sort((a, b) => a.edad - b.edad);
console.log("Personas ordenadas por edad:", personas);

/*
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let contactos = [];

function mostrarMenu() {
  console.log("\nAgenda de Contactos");
  console.log("1. Buscar contacto");
  console.log("2. Insertar contacto");
  console.log("3. Actualizar contacto");
  console.log("4. Eliminar contacto");
  console.log("5. Salir");
  rl.question("Selecciona una opción: ", function (opcion) {
    switch (opcion) {
      case "1":
        buscarContacto();
        break;
      case "2":
        insertarContacto();
        break;
      case "3":
        actualizarContacto();
        break;
      case "4":
        eliminarContacto();
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Opción no válida");
        mostrarMenu();
    }
  });
}

function buscarContacto() {
  rl.question("Introduce el nombre del contacto a buscar: ", function (nombre) {
    const contacto = contactos.find(
      (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
    );
    if (contacto) {
      console.log(
        `Contacto encontrado: ${contacto.nombre} - ${contacto.telefono}`
      );
    } else {
      console.log("Contacto no encontrado");
    }
    mostrarMenu();
  });
}

function insertarContacto() {
  rl.question("Introduce el nombre del contacto: ", function (nombre) {
    rl.question("Introduce el número de teléfono: ", function (telefono) {
      if (esTelefonoValido(telefono)) {
        contactos.push({ nombre, telefono });
        console.log("Contacto añadido");
      } else {
        console.log("Número de teléfono no válido");
      }
      mostrarMenu();
    });
  });
}

function actualizarContacto() {
  rl.question(
    "Introduce el nombre del contacto a actualizar: ",
    function (nombre) {
      const indice = contactos.findIndex(
        (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
      );
      if (indice !== -1) {
        rl.question(
          "Introduce el nuevo número de teléfono: ",
          function (nuevoTelefono) {
            if (esTelefonoValido(nuevoTelefono)) {
              contactos[indice].telefono = nuevoTelefono;
              console.log("Contacto actualizado");
            } else {
              console.log("Número de teléfono no válido");
            }
            mostrarMenu();
          }
        );
      } else {
        console.log("Contacto no encontrado");
        mostrarMenu();
      }
    }
  );
}

function eliminarContacto() {
  rl.question(
    "Introduce el nombre del contacto a eliminar: ",
    function (nombre) {
      const indice = contactos.findIndex(
        (contacto) => contacto.nombre.toLowerCase() === nombre.toLowerCase()
      );
      if (indice !== -1) {
        contactos.splice(indice, 1);
        console.log("Contacto eliminado");
      } else {
        console.log("Contacto no encontrado");
      }
      mostrarMenu();
    }
  );
}

function esTelefonoValido(telefono) {
  return /^\d{1,11}$/.test(telefono);
}

rl.on("close", function () {
  console.log("\nPrograma finalizado");
  process.exit(0);
});
mostrarMenu();
