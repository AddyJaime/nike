import "./Navbar.css";
import React from "react";

interface NavbarProps {
  logoSrc: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc }) => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#about", label: "About Us" },
    { href: "#footer", label: "Footer" },
  ];
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logoSrc} alt="logo" className="nav-logo" />
      </div>

      <div className="nav-link">
        {links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <span>Sign in / </span>
        <span>Explore now</span>
      </div>
    </nav>
  );
};

export default Navbar;
