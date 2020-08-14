import React, { useState, useEffect } from "react";
import classNames from "classnames";
import "./MainTodo.scss";

import MainTodo from "./MainTodo";

export default function MainTodoContainer() {
  const [todo, setTodo] = useState("");
  const [hidden, setHidden] = useState(false);
  const [check, setCheck] = useState(false);

  const onRemove = () => {
    setTodo("");
    setHidden(false);
  };
  const onReset = () => {
    console.log("hello");
    setHidden(false);
    setCheck(!check);
    setTodo("");
    localStorage.removeItem("todo");
  };

  const onHandleInput = (e) => {
    setTodo(e.target.value);
  };
  const onHandleSubmit = (e) => {
    if (e.keyCode !== 13 || todo.trim() === "") return;
    setHidden(true);
    localStorage.setItem("todo", todo);
    // localStorage.getItem("input");
  };

  const onHandleCheck = (e) => {
    setCheck(e.target.checked);
  };

  useEffect(() => {
    const getTodo = localStorage.getItem("todo");
    if (getTodo !== null) {
      setTodo(getTodo);
      setHidden(true);
    }
  }, []);

  return (
    <>
      <div className={classNames("inputContainer", { hidden })}>
        <div className="focus">What is your main focus for today?</div>
        <input
          // className={classNames("inputTodo", { hidden })}
          className="inputTodo"
          value={todo}
          type="text"
          size="20"
          onChange={onHandleInput}
          onKeyDown={onHandleSubmit}
        />
      </div>
      {hidden && (
        <MainTodo
          check={check}
          input={todo}
          onRemove={onRemove}
          onReset={onReset}
          hidden={hidden}
          onHandleCheck={onHandleCheck}
          onHandleSubmit={onHandleSubmit}
        />
      )}
    </>
  );
}
