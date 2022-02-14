import React, { useState } from "react";
import "./TodoForm.css";
import InputComponent from "./InputComponent";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  return (
    <div className="todoForm">
      <h1 className="todoForm__heading">Add Item</h1>
      <form className="todoForm__inputBox">
        <InputComponent value={todo} />

        <button type="submit" className="todoForm__btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
