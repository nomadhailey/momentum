import React, { useState } from "react";
import classNames from "classnames";

export default function Login() {
  const [login, setLogin] = useState({
    loginName: "",
    loginNameisHidden: true,
  });

  const onInputName = (e) => {
    setLogin({
      ...login,
      loginName: e.target.value,
    });
  };
  const onLoginName = (e) => {
    if (e.keyCode !== 13 || login.trim() === "") return;
    localStorage.setItem("login", login);
    setLogin({ ...login, loginNameisHidden: true });
  };

  return (
    <div className={classNames("yourNameWrapper", { loginNameisHidden })}>
      <div className="yourName">Hello, what's your name?</div>
      <input
        type="text"
        value={login}
        onChange={onInputName}
        onkeyDown={onLoginName}
      />
    </div>
  );
}
