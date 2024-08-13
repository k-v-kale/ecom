import React from "react";
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../App.css";


const ProductData = (ele) => {
    const{id,name,image,price} = ele;
    return(
    <NavLink to={"/SingleProduct"}>
   
    <div className="card ">
         <div>
         <Card style={{ width: "18rem" }}>
            <Card.Body className="cardlayout">
              <Card.Title>{name}</Card.Title>
              <Card.Img className="img" src={image}/>
              <div>
                <p>{name}</p>
                <p>{price}</p>
              </div>
              <Button variant="primary">Show data</Button>
            </Card.Body>
          </Card>
         </div>
        </div>

    </NavLink>
    )
};

export default ProductData;