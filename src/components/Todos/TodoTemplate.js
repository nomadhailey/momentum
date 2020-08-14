import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import cn from 'classnames';
import './TodoTemplate.scss';
import TodoToggle from './TodoToggle';

const TodoTemplate = ({ todos, children, togglefilter }) => {
  const [toggle, setToggle] = useState(false);
  const [onName, setOnName] = useState('inbox');

  const toggleClick = (e) => {
    setToggle(!toggle);
  };
  return (
    <div className="TodoTemplate">
      <div className="app-title">
        {onName}
        <div className={cn('app-toggle', { toggle })} onClick={toggleClick}>
          {toggle ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </div>
        <TodoToggle
          toggle={toggle}
          todos={todos}
          onClick={(e) => {
            setOnName(e.target.textContent);
            setToggle(!toggle);
          }}
          togglefilter={togglefilter}
        />
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
