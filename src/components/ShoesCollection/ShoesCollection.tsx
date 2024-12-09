import React from "react";
import nike1 from "../../assets/images/shoe4.svg";
import nike2 from "../../assets/images/shoe5.svg";
import nike3 from "../../assets/images/shoe6.svg";
import nike4 from "../../assets/images/shoe7.svg";
import "./ShoesCollection.css";

const ShoesCollection: React.FC = () => {
  return (
    <div className="shoes-collection">
      <div className="nike-1">
        <img src={nike1} alt="" />
      </div>
      <div className="nike-2">
        <img src={nike2} alt="" />
      </div>
      <div className="nike-3">
        <img src={nike3} alt="" />
      </div>
      <div className="nike-4">
        <img src={nike4} alt="" />
      </div>
    </div>
  );
};

export default ShoesCollection;
