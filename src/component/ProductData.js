import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import FormatPrice from "./FormatPrice";


const ProductData = (ele) => {
  const { id, name, image, price } = ele;
  return (  
   <div className="card ">
      <div className="cardData">
        <div><img src={image} alt={name} /></div>
        <div className="card-content">
          <h3>{name}</h3>
          <p>{<FormatPrice price={price}/>}</p>
        </div>
        <NavLink to={`/SingleProduct/${id}`}>
          <button className="card-button">Show Deitals</button></NavLink>

      </div>
    </div>



  )
};

export default ProductData;