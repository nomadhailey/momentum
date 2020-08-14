import React, {useState} from "react";
import {Redirect} from "react-router-dom";

export default function FatalError() {
  const [redirect, setRedirect] = useState(false);

  const redirectClick = () => {
    setRedirect(true);
  };
  return (
    <div className="error-container">
      <h1>
        <span></span>
        <span>Error </span>
        <p>예기치 않은 오류가 발생했습니다.</p>
      </h1>
      <button className="redirect" onClick={redirectClick}>
        Home
        <span></span>
      </button>
      {redirect && <Redirect to="/" />}
      <div className="texture"></div>
    </div>
  );
}
