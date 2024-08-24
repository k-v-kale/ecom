import React from "react";
import Sidebar from "../layout/Sidebar";
import CartItem from "../component/CartItem"
import { useCartContext } from "../context/Cartcontext";
import { NavLink } from "react-router-dom";


const Cart = () => {
  const { cart,clearCart } = useCartContext();

  if(cart.length === 0){
    return(
      <div>
        <Sidebar/>
        <h1 className="empty-cart">No Item In Cart</h1>
      </div>
    )
  }

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="cart-contanier">
        <div className="cart-heading">
          <p>Item</p>
          <p>Name</p>
          <p>Price</p>
          <p>Quntity</p>
          <p>Remove</p>
        </div>
        <hr />
        <div>
          {cart && cart.map((curElem) => {
            return <CartItem key={curElem.id} {...curElem} />
          })}
        </div>
        <hr/>
        <div className="cart-two-btn">
          <NavLink to ={'/Add'}>
          <button className="cart-btn1">Continous shopping</button>
          </NavLink>
          <button className="cart-btn2" onClick={clearCart}>Clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
