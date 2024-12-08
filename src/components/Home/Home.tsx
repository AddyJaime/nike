import React from "react";
import shoes from "../../assets/images/big-shoe1.png";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-section">
      <p className="title">Our Summer Collection</p>
      <h1 className="tagline">
        The New Arrival <br />
        <span className="highlight">Nike</span> Shoes
      </h1>
      <p className="description">
        Discover stylish Nike Arrivals, quality comform, and innovation for your
        active life.
      </p>
      <button className="btn-shop-now">
        Shop now <span>→</span>
      </button>
      <div className="stats">
        <div>
          <h2>1K+</h2>
          <p>Brands</p>
        </div>
        <div>
          <h2>500+</h2>
          <p>Shops</p>
        </div>
        <div>
          <h2>250K+</h2>
          <p>Customers</p>
        </div>
        <div className="nike-shoes">
          <img src={shoes} alt="shoes" />
        </div>
      </div>
    </div>
  );
};

export default Home;
