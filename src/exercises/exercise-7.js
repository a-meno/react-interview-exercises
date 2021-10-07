/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import React, { useState } from "react";
import "../styles.css";

/**
 * Copy the implementation from the previous exercise.
   Add a 'show/hide' button which will conditionally render the Hello component
   Add a button that will cycle through the values world, planet, universe.
   
   Example: on button clicks component renders 'Hello world', 'Hello universe', 'Hello planet'
 */
const App = () => {
  const [todoText, setTodoText] = useState("");
  const [listaTodos, setListaTodos] = useState([
    "bed",
    "sacar a pasear al perro"
  ]);

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleOnDelete = (index) => {
    const newArray = listaTodos.filter((el, i) => i !== index);
    setListaTodos(newArray);
  };

  const addTodo = () => {
    setListaTodos([...listaTodos, todoText]);
    console.log(listaTodos);
  };

  return (
    <div className="App">
      <h1>Simple Todo App</h1>
      <input onChange={handleChange} value={todoText} />
      <button onClick={addTodo}>Add to List</button>
      <div>
        {listaTodos.map((todo, index) => (
          <li key={index}>
            {todo} <a onClick={() => handleOnDelete(index)}>Delete</a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default App;
