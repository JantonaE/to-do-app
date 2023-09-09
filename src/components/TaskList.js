import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TaskList.css';
import Task from "./Task";

function TaskList(){

  const [tareas,setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.nombre.trim()){
      tarea.nombre = tarea.nombre.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(
      tarea => {
        if(tarea.id === id){
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
    setTareas(tareasActualizadas);
  }
  
    return(
        <>
          <TaskForm onSubmit={agregarTarea} />
          <div className="tareas-lista-contenedor">
            {
              tareas.map(
                (tarea) => 
                  <Task 
                    key={tarea.id}
                    id={tarea.id}
                    nombre={tarea.nombre}
                    completada={tarea.completada}
                    eliminarTarea={eliminarTarea}
                    completarTarea={completarTarea}
                  />
              )
            }
          </div>
        </>
    );
}

export default TaskList;