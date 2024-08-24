import React, { useState } from "react";
import { FaHome, FaList, FaUser, FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5"
import { NavLink } from "react-router-dom";


const Sidebar = ({ childrrn }) => {
  const [isopen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isopen);

  const menuItem = [
    {
      path: "/Home",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/Add",
      name: "Products",
      icon: <FaList />,
    },
    {
      path: "/Cart",
      name: "Cart",
      icon: <IoCartOutline/>,
    },

    {
      path: "/User",
      name: "User",
      icon: <FaUser />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isopen ? "160px" : "160px" }} className="sidebar">
        <div className="topsection">
          <h1 className="logo" style={{ display: isopen ? "block" : "block" }} onClick={toggle}>
            Logo
          </h1>
          <div style={{ marginLeft: isopen ? "40px" : "40px" }} className="bars">
            <FaBars style={{ marginLeft: isopen ? "0px" : "-5px", display: isopen ? "none" : "none" }} onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            className="link"
            to={item.path}
            key={index}
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isopen ? "block" : "block" }}
              className="link-text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{childrrn}</main>
    </div>
  );
};

export default Sidebar;
