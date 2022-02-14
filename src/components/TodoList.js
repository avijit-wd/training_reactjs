import React, { useState, useEffect } from "react";
import "./TodoList.css";
import InputComponent from "./InputComponent";

const TodoList = ({ id, todo, isChecked = true }) => {
  return (
    <div className="todoList">
      <div className="todoList__todoContainer">
        <h4>{todo}</h4>
      </div>
    </div>
  );
};

export default TodoList;
