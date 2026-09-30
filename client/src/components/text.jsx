import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    setTodos([...todos, input]);
    setInput("");
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />

        <button type="submit">Add</button>
      </form>

      <div>
        {todos.map((todo, index) => (
          <div key={index}>{todo}</div>
        ))}
      </div>
    </div>
  );
}
