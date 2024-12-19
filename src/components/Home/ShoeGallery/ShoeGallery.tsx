import React, { useState } from "react";
import "./ShoesGallery.css";
import shoes1 from "../../../assets/images/big-shoe1.png";
import shoes2 from "../../../assets/images/big-shoe2.png";
import shoes3 from "../../../assets/images/big-shoe3.png";
import ShoeDisplay from "../ShoeDisplay/ShoeDisplay";

const ShoeGallery: React.FC = () => {
  const [mainShoes, setMainShoes] = useState(shoes1);
  const shoes = [shoes1, shoes2, shoes3];
  return (
    <div className="all-shoes">
      <ShoeDisplay selectedShoe={mainShoes} />
      {shoes.map((shoe, index) => (
        <div
          key={index}
          className="shoe-item"
          onClick={() => setMainShoes(shoe)}
        >
          <img src={shoe} alt={`Shoe ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ShoeGallery;
