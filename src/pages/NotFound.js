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
      <h1>
        <span>404 </span>
        <span>Error </span>
        <span>페이지를 찾을 수 없습니다.</span>
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
