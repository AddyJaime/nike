import React from "react";
import "./ShoesDisplay.css";
// import shoes from "../../../assets/images/big-shoe1.png";

interface ShoeDisplayProps {
  selectedShoe: string;
}

const ShoeDisplay: React.FC<ShoeDisplayProps> = ({ selectedShoe }) => {
  return (
    <div className="nike-shoes">
      <img src={selectedShoe} />
    </div>
  );
};

export default ShoeDisplay;
