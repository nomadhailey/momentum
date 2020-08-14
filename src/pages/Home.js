import React, { useState } from "react";
import "../components/Background/Background.scss";
import "../components/Clock/Clock.scss";
import "../components/MainTodo/MainTodo.scss";
import "../components/Common.scss";
import TodosApp from "../TodosApp";

import ClockContainer from "../components/Clock/Clock";
import MainTodoContainer from "../components/MainTodo/MainTodoContainer";

export default function Home() {
  const [showTodos, setShowTodos] = useState(false);
  const todosBtnClick = () => {
    setShowTodos(!showTodos);
    console.log(showTodos);
  };
  return (
    <div className="Container">
      <ClockContainer />
      <MainTodoContainer />
      {showTodos && <TodosApp />}
      <button className="mainTodoBtn" onClick={todosBtnClick}>
        todos
      </button>
    </div>
  );
}
