import React from "react";
import Sidebar from "../layout/Sidebar";
import { NavLink } from "react-router-dom";
import { MdShoppingCartCheckout } from "react-icons/md";


const Home = () => {
  return (
    <div className="home" >
      <div>
        <Sidebar />
      </div>

      <div className=" homestyle">
        <h1 className=" homeheading"> Welcome To Shop</h1>
        <div className="homecontant">
          <div className="headdata" >
            <p className="headcont">  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting </p>
            <NavLink to={"/Add"}>
              <button className="homebtn">Let's shop</button></NavLink>
          </div>
          <div>
            <img className="homeimg" src="https://t3.ftcdn.net/jpg/06/79/00/28/360_F_679002855_fbZtkK8M8pM4krzxeVciRXhPWc56AOj5.jpg" alt=""></img>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
