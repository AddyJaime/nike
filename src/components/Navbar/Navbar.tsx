import "./Navbar.css";
import React from "react";

interface NavbarProps {
  logoSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logoSrc} alt="logo" className="nav-logo" />
      </div>

      <div className="nav-link">
        <a href="home">Home</a>
        <a href="products">Products</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
      </div>

      <div className="nav-right">
        <span>Sign in / </span>
        <span>Explore now</span>
      </div>
    </nav>
  );
};

export default Navbar;
