import React from "react";
import "./Products.css";
import ShoesCollection from "../ShoesCollection/ShoesCollection";

const Products: React.FC = () => {
  return (
    <div id="products" className="products-section">
      <div className="products-title">
        <h1>
          Our <span className="popular-hightlight">Popular</span> Products
        </h1>
        <p>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <ShoesCollection />
    </div>
  );
};

export default Products;
