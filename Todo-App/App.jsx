import { useState } from "react";

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo function
  const addTodo = () => {

    if (todo.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    setTodos([...todos, todo]);

    setTodo("");
  };

  // Delete Todo function
  const deleteTodo = (index) => {

    setTodos(todos.filter((item, i) => i !== index));

  };

  return (
    <div>

      <p>Todo Application</p>

      <input
        type="text"
        placeholder="Enter todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo}>Add Todo</button>

      <p>Todo List</p>

      {todos.map((item, index) => (

        <div key={index}>

          <p>{item}</p>

          <button onClick={() => deleteTodo(index)}>Delete</button>

        </div>

      ))}

    </div>
  );
}

export default App;