import React, { useEffect } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import classNames from "classnames";
import "./MainTodo.scss";

export default function MainTodo({
  hidden,
  onRemove,
  onReset,
  onHandleCheck,
  check,
  input,
}) {
  const random = ["Great Work!", "Nice.", "Way to go!", "Good job!"];
  return (
    <>
      <div className={classNames("todoContainer", { hidden })}>
        <label>
          <span className="today">TODAY</span>

          <div className="todoList">
            <input
              type="checkBox"
              id="checkBox"
              onChange={onHandleCheck}
              checked={check}
            />
            <div className="checkButton">
              {check ? (
                <MdCheckBox className="checkedIcon" />
              ) : (
                <MdCheckBoxOutlineBlank />
              )}
            </div>
            <span className={classNames("todoItem", { check })}>{input}</span>
            <div className="btns">
              <button
                className={classNames("closeBtn", { check })}
                onClick={onRemove}
              >
                X
              </button>
              <button
                className={classNames("plusBtn", { check })}
                onClick={onReset}
              >
                +
              </button>
            </div>
          </div>
          <div className={classNames("compliments", { check })}>
            {random[Math.floor(Math.random() * 4)]}
          </div>
          <div className="loading"></div>
        </label>
      </div>
    </>
  );
}
