import React from "react";
import "./Showtodos.css"

function Showtodos({todo,context,status}) {
  return (
    <div className="todoitem" key={todo.id}>
      <input
        type="checkbox"
        checked = {status?"checked":""}
        onChange={() => {
          context.dispatch({ type: "toggleDone", payload: todo.id });
        }} 
        
      ></input>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.val}
      </span>
      <button
        onClick={() => {
          context.dispatch({ type: "remtodo", payload: todo.id });
        }}
      >
        X
      </button>
    </div>
  );
}

export default Showtodos;
