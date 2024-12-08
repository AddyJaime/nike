import React from "react";
import "./ShoesDisplay.css";
import shoes from "../../assets/images/big-shoe1.png";

const ShoeDisplay: React.FC = () => (
  <div className="nike-shoes">
    <img src={shoes} alt="Nike Shoes" />
  </div>
);

export default ShoeDisplay;
