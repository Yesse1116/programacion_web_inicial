// Clase 17 Funciones y DOM
class Mascota{
  constructor(nombre){
    this.nombre = nombre;
    this.adoptada = false;
  }
  //metodo
  adoptar(){
    this.adoptada = true;
  }
}
//funcion para agregar mascota a la lista

function agregarMascota(){
  const inputMascota = document.getElementById("nuevaMascota");
  const nombreMascota =inputMascota.value.trim();

if (nombreMascota != ""){
  const nuevaMascota = new Mascota(nombreMascota);
  //Crear el elemento de la lista
  const elementoLista = document.createElement('li');
  elementoLista.textContent = nuevaMascota.nombre;

    //Boton para eliminar
    const botonEliminar = document.createElement("span");
    botonEliminar.textContent = "Eliminar";
botonEliminar.classList.add("eliminar")

//Evento para eliminar
botonEliminar.addEventListener("click", function(){
  elementoLista.remove();
})


  //Agregar clase si la mascota es adoptada
  if (nuevaMascota.adoptada){
    elementoLista.classList.add("adoptada")
  }
  //Evento para indicar que fue adoptada
  elementoLista.addEventListener("click", function(){
    nuevaMascota.adoptar();
    elementoLista.classList.add("adoptada")
  })
  const listaMascota = document.getElementById("listaMascotas");
  listaMascota.appendChild(elementoLista)
}
}

const botonAgregarMascotas = document.getElementById("agregarMascota");
botonAgregarMascotas.addEventListener("click", agregarMascota)

//Permitir agregar mascota al presionar enter
e         if (event.key === "Enter{}{
  agregarMascota();
}
)