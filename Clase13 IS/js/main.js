/**Clase 13: Intro JS 
//Hola mundo desde un archivo externo
console.log("Hola mundo");

//Variables alcance global
var nombre = "Harry";
console.log(nombre);
//variable solo en el ambiente donde la declaramos
let nombrelet = "Hermione"; //string
console.log(nombrelet);

let edad = 10; //numerico

const PI = 3.14;
let tenerMascotas = true; //boleana
console.log(edad, PI, tenerMascotas);

let minombre = "Yesse";
let miapellido = "Espinoza";
let miedad = 36;
let nomascota = false;

console.log(minombre, miapellido, miedad, nomascota);

//Operaciones basicas
let numeroA = 2;
let numeroB = 5;

let resultadoSuma = numeroA + numeroB;
console.log(numeroA + numeroB);
console.log(resultadoSuma);

let elnombre = "Cosme";
let elapellido = "Fulanito";
const ESPACIO = " ";
let nombreCompleto = elnombre + ESPACIO + elapellido;
console.log(nombreCompleto);


// Prompt
let entrada = prompt('Ingrese su nombre');
let entrapellido = prompt ('Ingrese su apellido');
let salida ='Hola' + ' ' + entrada + ' ' + entrapellido;
alert(salida);

let numero = parseInt(prompt('Ingrese su numero'));
const numero30 = 2;
let salidanum = ('Su numero dividido entre 2 es' + numero / numero30)
alert(salidanum)


//arrays unidimencional
let numeros = [1, 3, 5, 7];
let colores = ["rojo", "blanco", "azul"];

console.log(numeros[1]);
console.log(colores[1].length);

let colorMasco = [
    ['perro', 'negro', 'cosita'],
    ['gato', 'blanco', 'missi']
]

console.log(colorMasco);
console.log(colorMasco[0][1]);
*/

//objeto utilizado como array asociativo
let persona = {
  nombre: "Rodo",
  edad: 43,
  profesion: "Comprador",
};
console.log(persona["nombre"]);
console.log(persona.edad);

let empleados = [
  { nombre: "Juan", edad: 34, profesion: "Desarrollador" },
  { nombre: "Fanny", edad: 76, profesion: "Frontend" },
];

console.log(empleados[1].nombre);

// Crear un array de strings con 5 elementos
let arrayStrings = [
  "Elemento1",
  "Elemento2",
  "Elemento3",
  "Elemento4",
  "Elemento5",
];

// Mostrar el array completo en la consola
console.log("Array completo:", arrayStrings);

// Mostrar la cantidad de elementos que tiene el array
console.log("Cantidad de elementos en el array:", arrayStrings.length);

// Mostrar el elemento en el índice 0 del array
console.log("Elemento en el índice 0:", arrayStrings[0]);
