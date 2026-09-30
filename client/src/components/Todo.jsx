import React from 'react'

function Todo() {

  return (
    <div className='text-black border-solid border-1 border-blue-550 p-2'>

      <h2 className='text-center'>not to or Todos</h2>

      <div className='p-2'>
        <input

        className='border-solid border-1 border-black-550 p-2 m-2 active:shadow-[0_0_10px_rgba(0,0,0,0.3)]'
        // value={}
        // onChange={(e) => setText(e.target.value)}
        // onKeyDown={(e) => e.key === "Enter" && addTodo()}
        placeholder="somthing goes here"


      />

      <button
      type="submit"
      className='box-border border p-2 cursor-pointer active:shadow-[0_0_10px_rgba(0,0,0,0.3)]'
      >submit</button>

      </div>




    </div>
  )

}

export default Todo
