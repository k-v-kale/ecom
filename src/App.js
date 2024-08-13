import React from "react";
import { AppProvider } from "./context/ProductContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./component/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Add from "./component/Add";
import Product from "./component/Product";
import User from "./component/User";
import SingleProduct from "./component/SingleProduct";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/User" element={<User />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
