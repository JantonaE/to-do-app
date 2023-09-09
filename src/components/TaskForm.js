import React, { useState } from "react";
import '../stylesheets/TaskForm.css';
import { v4 as uuidv4 } from "uuid";

function TaskForm(props){

  const [input,setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  }

  const manejarEnvio = e =>{
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      nombre: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }

    return(
        <form className="tarea-formulario"
          onSubmit={manejarEnvio}>
            <input 
              className="tarea-input"
              type="text"
              placeholder="Name of the task"
              name="texto"
              onChange={manejarCambio}
            />
            <button className="tarea-boton">
              Add Task
            </button>
        </form>
    );
}

export default TaskForm;