import "./Seccion.css";
import { useState } from "react";
import Hogwarts1 from "../../assets/img/Howarts1.jpg";
import Boton from "../boton/Boton";

function Seccion() {
  const [nombre, setNombre] = useState("Hermione");
  const [mostrarInformacion, setMostrarInformacion] = useState(false);

  const handlerClicEnBoton = () => {
    alert("Hiciste click en el boton");
  };
  const handleClicEnBotonInformacion = () => {
    setMostrarInformacion(!mostrarInformacion);
  };
  return (
    <section className="seccion">
      <h2> Informacion sobre Hogwarts</h2>
      <p>La escuela de magia es un lugar donde los magos bla bla bla</p>
      <img src={Hogwarts1} alt="Hogwarts" />
      <p>{nombre}</p>
      <Boton color="orange" texto="Leer más" onClick={handlerClicEnBoton} />
      <Boton texto="comprar" />
      <button onClick={handleClicEnBotonInformacion}>
        {mostrarInformacion ? "Ocultar información" : "Mostrar información"}
      </button>
      {mostrarInformacion && (
        <div className="informacion-personaje">
          <p> Nombre: Hermione </p>
          <p> Casa: Gryffindor </p>
          <p> Rol: Estudiante </p>
          <p> mail: hermione@hogwarts.edu </p>
        </div>
      )}
    </section>
  );
}
export default Seccion;
