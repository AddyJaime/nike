import React from "react";
import "./Footer.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

interface FooterProps {
  logoSrc: string;
}

const Footer: React.FC<FooterProps> = ({ logoSrc }) => {
  return (
    <div className="footer">
      <div className="logo">
        <img className="logo" src={logoSrc} />
        <p>
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="social-media">
          <FaInstagram />
          <FaTwitter />
          <FaFacebook />
        </div>
        <p>copyright sign Copyright. All rights reserved.</p>
      </div>
      <div>
        <h1>Products</h1>
      </div>
      <div>
        <h1>Help</h1>
      </div>
      <div>
        <h1>Get in touch</h1>
      </div>
    </div>
  );
};

export default Footer;
