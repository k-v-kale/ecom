import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
      alert("Login successfully")
      navigate("/Home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-container">
      <h1> Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          placeholder="set password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />
        <p className="para">Forgoy password?</p>
        <input className="btn" type="submit" value="Login" ></input>
        <p className="para">
          Don't have an account ? <Link to="/Signup"> Signin</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
