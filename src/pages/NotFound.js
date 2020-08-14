import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./notfound.scss";

export default function NotFound() {
  const [redirect, setRedirect] = useState(false);

  const redirectClick = () => {
    setRedirect(true);
  }
  return (
      <div className="notfound-container">
        <h1>404 Error 페이지를 찾을 수 없습니다.</h1>
        <button className="redirect" onClick={redirectClick}>
          Home
        </button>
        {redirect && <Redirect to="/" />}
        <div className="texture"></div>
      </div>
  );
}
