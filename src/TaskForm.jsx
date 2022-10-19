// Utilizamos hook para agregar titula
import { useState } from "react";

// Función la cual tiene como parametro props
function TaskForm(props) {
  // Constante la cual recibe los titulos que se vayan guardando
  const [title, setTitulo] = useState("");

  // console.log(props.createTask);

  // console.log(titulo);

  // Esta función a su vez ejecutra otra la cual envia el valor del input del foprmulario
  const handleSubmit = (e) => {
    e.preventDefault();

    props.createTask(title);
  };

  return (
    // En el momento que se guarda el formulario con el evento onSubmit, ejecuto la función handleSubmit la cual envia el valor del input
    <form onSubmit={handleSubmit}>
      {/* Con el evento onChange le pasamos una función anonima con la cual obtenemos el valor del input que con la función  setTitulo le pasa ese valor a la constante title y posterior a ello se envia en la función handleSubmit que se ejecuta con el evento onSubmit */}
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitulo(e.target.value)}
      />
      {/* Bóton de guardar */}
      <button> Guardar</button>
    </form>
  );
}

export default TaskForm;
