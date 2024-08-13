import React from "react";
import Sidebar from "../layout/Sidebar";

const SingleProduct=(ele)=>{
  const {name,image,price}=ele;
    return(
        <div className="home">
        <div>
          <Sidebar />
        </div>
       
       <div className="singleproduct">
        <div>image</div>
        <div><h1>card data</h1></div>
       </div>
       
      </div>
    )
}

export default SingleProduct;