import React from "react";
import "./OffersImage.css";
import img1 from "../../assets/images/offer.svg";

const OffersImage: React.FC = () => {
  return (
    <div className="offers-img-container">
      <img src={img1} alt="" />
    </div>
  );
};

export default OffersImage;
