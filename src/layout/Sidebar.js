import React, { useState } from "react";
import { FaHome, FaList, FaShoppingBag, FaUser, FaBars } from "react-icons/fa";
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
      name: "List",
      icon: <FaList />,
    },
    {
      path: "/Product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/User",
      name: "User",
      icon: <FaUser />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isopen ? "250px" : "50px" }} className="sidebar">
        <div className="topsection">
          <h1 className="logo" style={{ display: isopen ? "block" : "none" }}>
            Logo
          </h1>
          <div style={{ marginLeft: isopen ? "40px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
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
              style={{ display: isopen ? "block" : "none" }}
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
