// Clase 18 DOM
console.log(document);
console.dir(document);

console.log(document.head);
console.dir(document.head);

console.log(document.body);
console.dir(document.body);



// Métodos para acceder al DOM 
let titulo = document.getElementById('titulo');
console.log(titulo) // Accedo a toda la linea
console.log(titulo.innerHTML); //Accedo solo al titulo

let nombre = 'Cosme fulanito';
titulo.innerHTML = "Hola " + nombre;
console.log(titulo.innerHTML);


let parrafos = document.getElementsByClassName('parrafos');
console.log(parrafos)

let parrafosTag = document.getElementsByTagName('p');

console.log(parrafosTag)



//---------- Ejemplo modificacion de select dinámico

const categorias = [];

let entrada = prompt ("Ingresar categoria (Escribir 'ESC' para salir)");

while (entrada.toUpperCase() != 'ESC'){
  categorias.push(entrada.toUpperCase());
  entrada = prompt("Ingresar categoría (Escribir 'ESC' para salir)")
}

console.log(categorias)

//Obtener el elemento

let miSelect = document.getElementById('select')

/* 
miSelect.innerHTML = '<option>' +categorias[0] + '</option> ';
miSelect.innerHTML = '<option>' +categorias[1] + '</option> ';*/


//Recorremos el array para guardarlo en el nodo SELECT
/* for (const categoria of categorias){
  miSelect.innerHTML += '<option>' +categoria + '</option>';
} */


//CREACIÓN DE UN NUEVO NODO
  
let titulo1 = document.createElement('h2'); // crear el nodo
titulo1.innerHTML = 'Hola desde JS'; // defino el contenido
document.body.appendChild(titulo1); //aviso al html lo q cree


// Ejemplo de creación dinamica de nodos

class Producto { //creo clase llamada producto
  constructor (id, nombre, precio){
    this.id = parseInt(id);//parceint para definir entero
    this.nombre = nombre; 
    this.precio = parseFloat(precio)//float para definir decimal
  }
}

const productos=[];
productos.push(new Producto(1, "DONA", 3000))
productos.push(new Producto(2, "TORTA", 2700))
productos.push(new Producto(3, "PAN", 3500))
productos.push(new Producto(4, "CAFÉ", 5200))

// Recorro el array para crear un nodo por valor 

for (const producto of productos){
  let divProducto = document.createElement('div'); // creo el nodo, divproducto creo variabke

  divProducto.innerHTML =  `<h4> Nombre: ${producto.nombre} </h4>
                            <p> precio: ${producto.precio} </p> `;
  document.body.appendChild(divProducto);

}