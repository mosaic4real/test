import React from "react";
import {Routes, Route, Redirect } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";


function App() {
   const user = false;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <LandingPage/> } />
        <Route exact path="/home" element={ <Home/> } />
        <Route path="/products/:category" element={ <ProductList/> } />
        <Route path="/product/:id" element={ <Product/> } />
        <Route path="/signup" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/cart" element={ <Cart/> } />
        <Route path="/success" element={ <Success/> } />
      </Routes>
    </div>
  )
};

export default App

