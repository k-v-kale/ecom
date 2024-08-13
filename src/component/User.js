import React from "react";
import Sidebar from "../layout/Sidebar";

const User = () => {
    
  return (
    <div className="home">
      <div>
        <Sidebar />
      </div>
      <div className="profile_container">
        <h1>Profile</h1>
        <p>Name:</p>
        <p>Email:</p>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default User;
