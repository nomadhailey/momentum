import React from "react";
<<<<<<< HEAD
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
=======
import Weather from "../components/weather/Weather";
import Setting from "../components/setting/Setting";

export default function Home() {
  return (
    <div>
      <h1>홈</h1>
      <Weather />
      <Setting />
>>>>>>> feature/weather
    </div>
  );
}
