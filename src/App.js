import React from "react";
import "./App.css";
import Todos from "./components/Todos";
import TodoForm from "./components/TodoForm";

const todos = [
  { id: 1, title: "todo 1", isChecked: true },
  { id: 2, title: "todo 2", isChecked: false },
  { id: 3, title: "todo 3", isChecked: false },
];

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <h1 className="container__heading">Todo App</h1>
        <TodoForm />
        <Todos todos={todos} />
      </div>
    </div>
  );
};

export default App;
