import Home from "./components/Home/Home";
import Navbar from "./components/common/Navbar/Navbar";
import Products from "./components/Products/Products";
import "./index.css";
import logo from "./assets/images/header-logo.svg";

import React from "react";
import About from "./components/About/About";

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Navbar logoSrc={logo} />
      <Home />
      <Products />
      <About />
    </div>
  );
};

export default App;
