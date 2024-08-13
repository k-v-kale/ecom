import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
const[name ,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      try {
        console.log(email, password);
      } catch (error) {
        console.log(error);
      }
    };
  
  return (
    <div className="login-container">
      <h1 >Signin</h1>
      <form onSubmit={handleSubmit}>
      <label>Full Name</label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>password</label>
        <input
          type="password"
          placeholder="set password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
   
        <input className="btn" type="submit" value="Signin"></input>
        <p className="para">
         Already have an account <Link to="/"> Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
