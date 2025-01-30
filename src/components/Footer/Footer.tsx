import React from "react";
import "./Footer.css";

interface FooterProps {
  logoSrc: string;
}

const Footer: React.FC<FooterProps> = ({ logoSrc }) => {
  return (
    <div className="footer">
      <div className="logo">
        <img src={logoSrc} />
      </div>
    </div>
  );
};

export default Footer;
