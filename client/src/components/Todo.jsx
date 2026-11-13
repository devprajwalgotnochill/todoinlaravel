import React from "react";
import { useState, useEffect } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../api/todos";

const API = "http://localhost:8000/api/todos";
const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  // READ
  useEffect(() => {
    getTodos().then(setTodos).catch(console.error);
  }, []);

  //create
  async function addTodo(e) {
    e.preventDefault();
    if (text.trim().length < 3) {
      return -1;
    }

    try {
      const created = await createTodo(text.trim());
      setTodos([created, ...todos]);
      setText("");
    } catch (err) {
      console.error(err);
    }
  }

  // UPDATE
  async function toggleTodo(todo) {
    // setTodos(
    //   todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    // );
    //  // UPDATE

    try {
      const updated = await updateTodo(todo.id, {
        completed: !todo.completed,
      });
      setTodos(todos.map((t) => (t.id === todo.id ? updated : t)));
    } catch (err) {
      console.error(err);
    }
  }

  async function removeTodo(id) {
    // // "Make a new list with everyone except the todo with this id,
    // //  and use it as the new todos"
    // setTodos(todos.filter((t) => t.id !== id));

    try {
      await deleteTodo(id); // now this is the imported API function
      setTodos(todos.filter((t) => t.id !== id));
    } catch (err) {
      console.error(err);
    }
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
            onClick={() => removeTodo(todo.id)}
          >
            <span>❌</span>
          </button>
          <button
            type="button"
            onClick={() => toggleTodo(todo)}
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
