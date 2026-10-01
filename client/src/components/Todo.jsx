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
    <div className=" border border-white p-4 m-2 flex flex-col gap-4 max-w-xl ">
      <h2 className="text-center">not to or Todos</h2>

      <div className="">
        <form onSubmit={addTodo} className="flex justify-center w-full gap-2">
          <input
            className="border-solid border  active:shadow-[0_0_10px_rgba(255,255,255,0.9)] p-2"
            type="text"
            value={Text}
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
      </div>

      <div className="text-center">your list</div>

      {Todo.map((todo, index) => (
        <div key={index} className="flex gap-2">
          <div className="border p-2 flex-1 ">
            <span>
              {index + 1}. {todo}
            </span>
          </div>
          {/* Two buttons */}
          <button
            type="button"
            className="border p-2 cursor-pointer active:shadow-[0_0_10px_rgba(255,255,255,0.9)]"
          >
            <span>❌</span>
          </button>
          <button
            type="button"
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
