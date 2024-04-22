import React from "react";
import Todoinp from "./components/todoinp/todoinp";
import Tododisplay from "./components/tododisplay/tododisplay";
import "./App.css";
const App = () => (
  <div className="maindiv">
    <Todoinp />
    <Tododisplay />
  </div>
);

export default App;
