// Clase 16 Funciones
/*
function saludar(nombre,apellido, edad){
  console.log ("Hola", nombre, apellido, "tu edad es", edad)
}
saludar ("Cosme","Fulanito",5);
saludar ("Ron","Weasley",52);

//Declaracion de la funcion, con parametros

function sumar(num1, num2){
  return num1 + num2;
}
// Llamada de la funcion con los argumentos

sumar(5,6);
let resultado = sumar(9, 12);
console.log(resultado);

// funcion anonima y asignamos una variable
let suma = function( num1, num2){
  return num1 + num2;

}
let resultado = suma(12, 10);
console.log(resultado);


//Practica
function saludar(nombre,apellido, serief){
  console.log ("Hola", nombre, apellido, "tu serie favorita es", serief)
}
saludar ("Yesse","Espinoza","How I met your mother");


function saludar(nombre,apellido, serief){
  return ("Hola "+ nombre +" " +apellido + "tu serie favorita es "+ serief)
}
saludar ("Yesse","Espinoza","How I met your mother");
console.log(saludar("Yesse", "Espinoza", "How I met your m"));



function nombrel(nombre){
  return nombre.length;
}

console.log (nombrel("Yess"));



//scope
function multiplicar(num1, num2){
  const num3 = 10;
  return(num1 + num2) *num3;
}
let resultado = multiplicar (10, 2)
console.log(resultado)

let nombre = prompt("Ingrese su nombre");
let edad = prompt("Ingrese su edad");
let nomEdad = "Hola"+ " " +nombre +" "+ "nos indicaste que tu edad es:"+" "+ edad;
alert(nomEdad);

let edades = [];

        function pedirDatos() {
            let nombre = prompt("Por favor, ingresa tu nombre:");
            let edad = prompt("Por favor, ingresa tu edad:");

            // Convertir la edad a número y agregar al array de edades
            edad = parseInt(edad);
            if (!isNaN(edad)) {
                edades.push(edad);
            }

            let promedio = calcularPromedio(edades);
            document.getElementById("resultado").innerText = `El promedio de edad de las personas ingresadas es: ${promedio}`;
        }

        function calcularPromedio(array) {
            let suma = 0;
            for (let i = 0; i < array.length; i++) {
                suma += array[i];
            }
            return (suma / array.length).toFixed(2); // Promedio con dos decimales
        }
       
       console.log(document.head)
       console.log(document.body)
       console.dir(document.head)
       console.dir(document.body)

        */
//Seleccion de elementos del DOM queryselector
let titulo = document.querySelector("#titulo");
let parrafos = document.querySelectorAll(".parrafo");
let cambiarTextoBtn = document.querySelector("#cambiarTexto");
let cambiarColorBtn = document.querySelector("#cambiarColor");
let cambiarClaseBtn = document.querySelector("#cambiarClase");

console.log(titulo);
console.log(parrafos);
console.log(cambiarTextoBtn);
console.log(cambiarColorBtn);

//Funcion para cambiar texto

function cambiarTexto() {
  titulo.textContent = "Texto nuevo";
}

//Asignar el evento click a los botones
cambiarTextoBtn.addEventListener("click", cambiarTexto);

//Funcion para cambiar el color de los parrafos seleccionados
function cambiarColor() {
  parrafos.forEach((parrafo) => {
    parrafo.classList.toggle("cambiarColor");
  });
}
//Asignar el evento click a los botones
cambiarColorBtn.addEventListener("click", cambiarColor);

function cambiarClase() {
  parrafos.forEach((parrafo) => {
    parrafo.classList.toggle("nuevaClase");
  });
}
//Asignar el evento click a los botones
cambiarClaseBtn.addEventListener("click", cambiarClase);
