import Home from "./components/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import Products from "./components/Products/Products";
import "./index.css";
import logo from "./assets/images/header-logo.svg";
import React from "react";
import About from "./components/About/About";
import Shipping from "./components/Shipping /Shipping";
import Offers from "./components/Offers/Offers";
import Reviews from "./components/About/Reviews/Reviews";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Navbar logoSrc={logo} />

      <Home />
      <Products />
      <About />
      <Shipping />
      <Offers />
      <Reviews />
    </div>
  );
};

export default App;
