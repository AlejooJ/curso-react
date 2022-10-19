// Se treen las tareas (Ejemplo de consumo de datos)
// Nota: Recordar que se exporta con llaves porque lo estoy exportando directamente de la función, no se colocan llaves cuando lo estoy exportando por default
import { tareas } from "./tasks";
import TaskForm from "./TaskForm";

// Se muestran las tareas
import TaskList from "./TaskList";

// Se importan los hooks de React (Para asignar estado)
import { useState, useEffect } from "react";

function App() {
  // Para mostrar los datos que estoy importando desde task.js debo guardarlo en un estado

  // Hook para asignar a las constante task las tareas (Creando estado de react)
  const [task, setTask] = useState([]);
  // Lo que significa la linea anterior es que a la constante task se inicializando con un arreglo vacio usando la función (useState)

  // con useEffect decimos que cuando se cargue el componente con la función setTask asignamos el objeto con las tareas a la constante task
  // Nota: Enviamos como parametro en la función setTask las tareas que estamos importando desde tasks.js que son los datos que estamos consumiendo para ser visualizados por el cliente
  // Nota 2: Los [] que se colocan para indicarle que cuando cargue solo se ejecute una vez
  useEffect(() => {
    setTask(tareas);
  }, []);

  // Numero ramdon para el key
  var min = 100000000000000000;
  var max = 11111111111111111111;

  var x = Math.floor(Math.random() * (max - min + 1) + min);

  // console.log(x);
  //2509

  // Función que se va a enviar como prop en el componente TaskForm
  function createTask(taskTitle) {
    // los tres puntos(...), guarda en el arreglo constante task, el nuevo objeto que sigue
    setTask([
      ...task,
      {
        id: x,
        title: taskTitle,
        description: "Nueva tarea",
      },
    ]);
  }

  return (
    <>
      {/* Componentes en los cuales se envian props */}
      <TaskForm createTask={createTask} />
      <TaskList tasks={task} />
    </>
  );
}

export default App;
