import React, { useState } from "react";

export const ToDoList = () => {
  // Estado para tareas predefinidas
  const [data, setData] = useState([
    { title: "Go to maths class", id: Math.random(), done: false },
    { title: "Buy new clothes", id: Math.random(), done: false },
    { title: "Visit Pepe", id: Math.random(), done: false }
  ]);

  // Estado para el texto del input
  const [inputValue, setInputValue] = useState("");

  // Manejador de cambio en el input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Manejador de submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTask = {
      title: inputValue,
      id: Math.random(),
      done: false
    };

    setData([...data, newTask]);
    setInputValue(""); // limpia el input
  };
  const handleDelete = (id) => {
    const filteredTasks = data.filter((task) => task.id !== id);
    setData(filteredTasks);
  };

  return (
    <div id="container">
      <h1>
        To Do(s) List <i className="fa fa-plus"></i>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new to do here"
          value={inputValue}
          onChange={handleChange}
        />
        <input type="submit" hidden />
      </form>
      <ul>
        {data.map((task) => (
          <li key={task.id}>
            {task.title}
            <button className="btn"
              onClick={() => handleDelete(task.id)}
            >
              <i class="fa-solid fa-delete-left"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};