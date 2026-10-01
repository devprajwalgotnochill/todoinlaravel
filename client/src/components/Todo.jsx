import React from "react";
import { useState } from "react";

function Todo() {
  const [Text, setText] = useState("");
  const [Todo, setTodo] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    if (Text.length < 3) {
      return;
    }

    setTodo([...Todo, Text]);
    setText("");
  }

  return (
    <div className=" border border-white p-4 m-2 flex flex-col gap-4 w-max">
      <h2 className="text-center">not to or Todos</h2>

      <div className="">
        <form onSubmit={addTodo} className="flex justify-center gap-2">
          <input
            className="border-solid border  active:shadow-[0_0_10px_rgba(0,0,0,0.3)] p-2"
            type="text"
            value={Text}
            onChange={(e) => setText(e.target.value)}
            placeholder="somthing goes here"
          />

          <button
            type="submit"
            className="box-border border cursor-pointer active:shadow-[0_0_10px_rgba(0,0,0,0.3)] p-2"
          >
            submit
          </button>
        </form>
      </div>

      {Todo.map((todo, index) => (
        <div key={index} className="border border-white p-2">
          <span>
            {index + 1}. {todo}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Todo;
