import React from "react";
import "../components/Background/Background.scss";
import "../components/Clock/Clock.scss";
import "../components/MainTodo/MainTodo.scss";
import "../components/Common.scss";

import ClockContainer from "../components/Clock/Clock";
import MainTodoContainer from "../components/MainTodo/MainTodoContainer";

export default function Home() {
  return (
    <div className="Container">
      <ClockContainer />
      <MainTodoContainer />
    </div>
  );
}
