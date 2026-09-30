import React from "react";
import { useState } from "react";

function Todo() {
  const [Text, setText] = useState("");
  const [Todo, setTodo] = useState([]);

  function addTodo(e) {
    e.preventDefault();

    setTodo([...Todo, Text]);
    setText("");
  }

  return (
    <div className="text-black border border-black p-4 m-2 flex flex-col gap-4 w-max">
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
        <div key={index} className="border border-black p-2">
          <span>
            {index + 1}. {todo} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sapiente voluptatum consequatur perferendis cumque
            qui provident impedit soluta corporis harum laboriosam nemo vitae
            odit adipisci sunt eum reprehenderit, rerum aspernatur ut.
          </span>
        </div>
      ))}
    </div>
  );
}

export default Todo;
