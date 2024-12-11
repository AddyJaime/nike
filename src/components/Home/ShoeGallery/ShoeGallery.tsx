import React from "react";
import "./ShoesGallery.css";
import shoes1 from "../../assets/images/big-shoe1.png";
import shoes2 from "../../assets/images/big-shoe2.png";
import shoes3 from "../../assets/images/big-shoe3.png";

const ShoeGallery: React.FC = () => (
  <div className="all-shoes">
    <div className="shoe-item">
      <img src={shoes1} alt="Shoe 1" />
    </div>
    <div className="shoe-item">
      <img src={shoes2} alt="Shoe 2" />
    </div>
    <div className="shoe-item">
      <img src={shoes3} alt="Shoe 3" />
    </div>
  </div>
);

export default ShoeGallery;
