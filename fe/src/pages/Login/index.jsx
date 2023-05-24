import React, { useState } from "react";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan email dan password yang di-submit
  };

  return (
    <div className="login-body">
      <div className="box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <label>Username</label>
          </div>
          <div className="inputBox">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={handlePasswordChange}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            />
            <label>Password</label>
          </div>
          <div className="action-login">
            <input type="submit" name="sign-in" value="Sign In" />
            <a href="/">Back</a>
          </div>
        </form>
      </div >
    </div >
  );
};

export default Login;