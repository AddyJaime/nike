import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import "./index.css";
import logo from "./assets/images/header-logo.svg";

import React from "react";

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Navbar logoSrc={logo} />
      <Home />
      <Products />
    </div>
  );
};

export default App;
