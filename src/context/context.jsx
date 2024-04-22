import { useContext, useReducer, createContext } from "react";

const todoContext = createContext(null);

const useTodoContext = () => {
  return useContext(todoContext);
};

const todoHandler = (state, action) => {
  const payload = action.payload;
  const date = new Date()
  switch (action.type) {
    case "addtodo":
      return [...state, { id: date.getTime(), val: payload, done: false }];
    case "remtodo":
      return state.filter((todo) => todo.id !== payload);
    case "toggleDone":
      return state.map((todo) => {
        if (todo.id === payload) {
          return { ...todo, done: !todo.done };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(todoHandler, []);
  return (
    <todoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </todoContext.Provider>
  );
};

export { TodoContextProvider, useTodoContext };
