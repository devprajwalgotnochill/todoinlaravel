import React from "react";
import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // Create
  function addTodo(e) {
    e.preventDefault();

    if (text.length < 3) {
      return;
    }

    const newTodo = {
      id: Date.now(), // temporary id, the backend will give a real one later
      title: text.trim(),
      completed: false,
    };

    setTodos([newTodo, ...todos]);

    setText("");
  }

  // UPDATE
  function toggleTodo(id) {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  }

  function deleteTodo(id) {
    // "Make a new list with everyone except the todo with this id,
    //  and use it as the new todos"
    setTodos(todos.filter((t) => t.id !== id));
  }

  return (
    <div className="border border-white p-4 m-2 flex flex-col gap-4 max-w-xl">
      <h2 className="text-center">not to or Todos</h2>

      <form onSubmit={addTodo} className="flex justify-center w-full gap-2">
        <input
          className="border-solid border  active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="somthing goes here"
        />

        <button
          type="submit"
          className="box-border border cursor-pointer active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
        >
          submit
        </button>
      </form>

      <div className="text-center">your list</div>

      {/* this shit is going crazy */}
      {todos.map((todo, index) => (
        <div key={todo.id} className="flex gap-2">
          <div
            className={`border p-2 flex-1 ${todo.completed ? "line-through opacity-50" : ""}`}
          >
            <span>
              {index + 1}. {todo.title}
            </span>
          </div>
          {/* Two buttons */}
          <button
            type="button"
            className="border p-2 cursor-pointer active:shadow-[0_0_10px_rgba(255,255,255,0.9)]"
            onClick={() => deleteTodo(todo.id)}
          >
            <span>❌</span>
          </button>
          <button
            type="button"
            onClick={() => toggleTodo(todo.id)}
            className="border p-2 cursor-pointer active:shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            ✔
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
