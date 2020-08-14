import React, { useState } from 'react';
// import cn from 'classnames';
import './TodoToggle.scss';

const TodoToggle = ({ toggle, todos, onClick, togglefilter }) => {
  return (
    toggle && (
      <div className="toggle-wrap">
        <ul>
          <li>
            <span
              onClick={(e) => {
                onClick(e);
                togglefilter(e.target.textContent);
              }}
            >
              inbox
            </span>{' '}
            ({todos.length})
          </li>
          {/* <li>
            <span
              onClick={(e) => {
                onClick(e);
                // togglefilter(e);
                togglefilter(e.target.textContent);
              }}
            >
              Today
            </span>{' '}
            0
          </li> */}
          <li>
            <span
              onClick={(e) => {
                onClick(e);
                togglefilter(e.target.textContent);
              }}
            >
              Done
            </span>{' '}
            ({todos.filter((todo) => todo.checked).length})
          </li>
          {/* <li>+ New List</li> */}
        </ul>
      </div>
    )
  );
};

export default TodoToggle;
