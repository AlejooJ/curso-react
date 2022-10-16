// Se treen las tareas (Ejemplo de consumo de datos)
// Nota: Recordar que se exporta con llaves porque lo estoy exportando directamente de la función, no se colocan llaves cuando lo estoy exportando por default
import { tareas } from "./tasks";

// Se importan los hooks de React (Para asignar estado)
import { useState, useEffect } from "react";

// Verifico que si esten llegando las tareas
// console.log(tareas);

// Creo el componente y lo exporto por defecto
export default function TaskList() {
  // Para mostrar los datos que estoy importando desde task.js debo guardarlo en un estado

  // Hook para asignar a las constante task las tareas (Creando estado de react)
  const [task, setTask] = useState([]);
  // Lo que significa la linea anterior es que a la constante task se inicializando con un arreglo vacio usando la función (useState)

  // con useEffect decimos que cuando se cargue el componente con la función setTask asignamos el objeto con las tareas a la constante task
  // Nota: Enviamos como parametro en la función setTask las tareas que estamos importando desde tasks.js
  // Nota 2: Los [] que se colocan para indicarle que cuando cargue solo se ejecute una vez
  useEffect(() => {
    setTask(tareas);
  }, []);

  // Se verifica si las tareas vienen vacios o no (De la constante task)
  if (task.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  // Ahora mostramos las tareas
  return (
    // Recordar que se debe tener un contenedor principal
    <div>
      {/* Se recorren las tareas de la constante task */}
      {/* Nota: Mucho cuidado con la sintaxis ya que en la función anonima retornaba con {} ahora es con () */}
      {task.map((task) => (
        // Key => valor que se tiene que añadir, siempre debe ser el div padre
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
