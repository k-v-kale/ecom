import React from "react";
import { AppProvider } from "./context/ProductContext";
import { CartProvider } from "./context/Cartcontext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Signin from "./component/Signin";
import Add from "./component/Add";
import Cart from "./component/Cart";
import User from "./component/User";
import SingleProduct from "./component/SingleProduct";


function App() {
  return (
    <AppProvider>
      <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path="/User" element={<User />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </AppProvider>
  );
}

export default App;
