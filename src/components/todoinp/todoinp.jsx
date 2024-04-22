import React, { useRef } from "react";
import { useTodoContext } from "../../context/context.jsx";
import "./todoinp.css"
function Todoinp() {
  const inpref = useRef(null);
  const context = useTodoContext();

  return (
    <div className="inpdiv">
      <input type="text" placeholder="Write task here" className="input" ref={inpref}></input>
      <button
        onClick={() => {
          if (inpref.current.value !== "") {
            context.dispatch({
              type: "addtodo",
              payload: inpref.current.value,
            });
            inpref.current.value = "";
          }
        }}
      >
        Add task
      </button>
    </div>
  );
}

export default Todoinp;
