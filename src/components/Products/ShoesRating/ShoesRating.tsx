import React, { FC } from "react";
import "./ShoesRating.css";

interface ShoesRatingProps {
  productName: string;
}

const ShoesRating: React.FC<ShoesRatingProps> = ({ productName }) => {
  return (
    <div className="shoes-item">
      <span>⭐️(4.5)</span>
      <p>{productName}</p>
      <p>Rs.21000</p>
    </div>
  );
};

export default ShoesRating;
