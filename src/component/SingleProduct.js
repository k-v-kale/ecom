import React, { useEffect } from "react";
import Sidebar from "../layout/Sidebar";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { NavLink } from "react-router-dom";
import Myimage from "./Myimage";
import AddToCart from "./AddToCart";


const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {


  const { getSignalProduct, sigleProducts } = useProductContext();
  console.log(sigleProducts);
  const { id } = useParams();
  console.log(id)

  const {
    id: alice,
    name,
    company,
    description,
    image,
    price,
    stock,
  } = sigleProducts;

  useEffect(() => {
    getSignalProduct(`${API}?id=${id}`);
  }, []);

  return (
    <div className="home">
      <div>
        <Sidebar />
      </div>

      <div className="product">
        <div className="productimg">
          <Myimage imgs={image} />
        </div>

        <div className="data">
          <h2>{name}</h2>
          <h5> # {company}</h5>
          <h4>Description : </h4>
          <p>{description}</p>
          <p className="descrip"></p> <br /><hr />
          <p className="price"> price : {price}</p>
          <p className="price">
            Avaliable :  {stock > 0 ? "In Stock" : "Not Available"}
          </p>

          {stock > 0 && <AddToCart product={sigleProducts} />}
          <div className="productpara">
            <NavLink to={"/Add"} >Back to product</NavLink>
          </div>

        </div>
      </div>


    </div>
  )
}

export default SingleProduct;




