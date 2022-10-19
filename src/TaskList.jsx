// Verifico que si esten llegando las tareas
// console.log(tareas);

// Creo el componente y lo exporto por defecto
export default function TaskList(props) {
  // Se verifica si las tareas vienen vacios o no (De la constante task)

  console.log(props);
  if (props.tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  // Ahora mostramos las tareas
  return (
    // Recordar que se debe tener un contenedor principal
    <div>
      {/* Se recorren las tareas de la constante task */}
      {/* Nota: Mucho cuidado con la sintaxis ya que en la función anonima retornaba con {} ahora es con () */}
      {props.tasks.map((task) => (
        // Key => valor que se tiene que añadir, siempre debe ser el div padre
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}
