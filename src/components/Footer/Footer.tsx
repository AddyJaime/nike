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
      </div>
    </div>
  );
};

export default Footer;
