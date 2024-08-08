/**Clase 14: Condicionales JS */
//if, else,if else
/*
let numero = 3;

if (numero > 3) {
  console.log("El numero es mayor a 3");
}
else if(numero===3){
  console.log("El numero es igual a 3")
}
else {
  console.log("El numero es menor a 3")
}
console.log("Continua con el programa");

//Else resumido
let edad = 19;
let esMayorEdad;

if (edad> 18){
  esMayorEdad = true;
}else{
  esMayorEdad = false;
}

console.log("Es mayor de edad?", esMayorEdad);


//Con Operador terniario

let edad = 15;

let esMayorEdad = edad >18? true : false;
console.log ("Es mayor de edad?", esMayorEdad);


let edad = 20;
let nombre = "Carmen";

edad>=18?
console.log(nombre + " es mayor de edad"): console.log(nombre+" no es mayor");

*/
// Switch
/*
let poweRanger= "blue";

switch (poweRanger){
  case "Red":
    console.log("Red ranger! Jason");
    break;
    case "blue":
      console.log("Blue ranger!, Billy");
      break;
      case "Green":
        console.log("Green ranger!, Gary");
        break;
      default:
        console.log('No sos Power ranger')

}

// Practica Switch
let diaSemana=new Date().getDay()

switch (diaSemana){
  case 1:
    diaSemana = ("Hoy es lunes");
  break;
  case 2:
    diaSemana = ("Hoy es martes");
  break;
  case 3:
    diaSemana = ("Hoy es miercoles");
  break;
  case 4:
    diaSemana = ("Hoy es jueves");
  break;
  case 6:
    diaSemana = ("Hoy es sabado");
  break;
  default:
    console.log("Que dia es hoy")
}
console.log(diaSemana)


let edad = prompt("Por favor ingresar tu edad: ");

if(edad !==null){
  edad = Number(edad);
  if (!isNaN(edad)){
    if (edad >= 18) {
      document.write("Erees mayor de edad");
    } else {
      document.write("Eres menor de edad");
    }
  } else {
    document.write("Por favor ingresa un numero valido");
  }
} else{
  document.write("No ingresaste ninguna edad");
}

let edad = prompt("Por favor ingresar tu edad: ");

if(edad !==null){
  edad = Number(edad);
    if (edad >= 18) {
      document.write("Erees mayor de edad");
    } else if(edad<=17){
      document.write("Eres menor de edad");
    }}
   else {
    document.write("Por favor ingresa un numero valido");
  }

let numero = prompt("Por favor ingrese un numero");

if (numero >= 1000){
  alert("Numero mayor a 1000")
}else {
  console.log("Si digito un numero menor a 1000")
}

let numero = prompt("Por favor ingrese un numero");
if (numero > 10){
  document.write("numero mayor a 10");
} else if (isNaN(numero)){
  document.write("no es valido");
}
else (numero <= 10) 
  document.write("numero menor a 10");
*/
function nombreLength() {
  nombre = prompt("Ingrese su nombre");
  return nombre.length;
}
//let largoNombre = nombreLength();
console.log(nombreLength());
