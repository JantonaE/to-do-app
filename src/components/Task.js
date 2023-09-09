import React from "react";
import '../stylesheets/Task.css';
import { AiFillCloseCircle} from "react-icons/ai";

function Task({ nombre, completada, id, completarTarea, eliminarTarea }){
    return(
      <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor'}>
        <div className="tarea-nombre"
        onClick={() => completarTarea(id)}
        >
          {nombre}
        </div>
       
        <div className="tarea-contenedor-iconos"
          onClick={()=> eliminarTarea(id)}
        >
          <AiFillCloseCircle className="tarea-icono" />
        </div>
      </div>

    );
}

export default Task; 