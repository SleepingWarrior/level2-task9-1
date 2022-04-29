import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [username, setUserName] = useState(" ");
  const [password, setPassword] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault(); //Prevent the page from reloading on submit
    console.log(username);
    // SetUserName("");
    // setPassword(" ");
  };

  return (
    <div className="container-login">
      <h1 className="h1-login">Please Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input className="input" type="text" placeholder="Enter Username" onChange={(e) => e.target.value} />
        <input className="input" type="password" placeholder="Enter Password" onChange={(e) => e.target.value} />
        <button type="Login">Submit</button>
        <div className="checkbox">
          <input className="input-checkbox" type="checkbox" name="checkbox1" />
          <label htmlFor="checkbox1">Remember Me</label>
          <input className="input-checkbox" type="checkbox" name="checkbox2" />
          <label htmlFor="checkbox2">forgot password</label>
        </div>
      </form>
    </div>
  );
};

export default Login;
