import { useTodoContext } from "../../context/context.jsx";
import "./tododisplay.css";
import Showtodos from "./Showtodos.jsx";

function Tododisplay() {
  const context = useTodoContext();
  const completedTodos = context.todos.filter((todo) => todo.done === true);
  const pendingTodos = context.todos.filter((todo) => todo.done === false);

  return (
    <div className="display">
      <div className="pending">
        <h4 style={{textAlign:"center"}}>Pending Tasks</h4>
        {pendingTodos.map((todo, index) => (
          <Showtodos key={index} todo={todo} context={context} status={false} />
        ))}
      </div>
      <div className="done">
        <h4 style={{textAlign:"center"}}>Completed Tasks</h4>
        {completedTodos.map((todo, index) => (
          <Showtodos key={index} todo={todo} context={context} status={true}/>
        ))}
      </div>
    </div>
  );
}

export default Tododisplay;
