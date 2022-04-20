import React, { useState } from "react";
import "./login.css";
//, { useState } Dont forget to add useState when using state

function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login-container">
      <h1>Please Log In</h1>
      <form className="login-form">
        <input className="input" type="text" placeholder="UserName" onChange={(e) => setUserName(e.target.value)} />
        <input className="input" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
        <div className="checkbox">
          <input type="checkbox">Remember Me</input>
          <input type="checkbox">forgot Password</input>
        </div>
      </form>
    </div>
  );
}

export default Login;

// Login.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };
