import React from "react";
import StatsSection from "../../components/StatsSection/StatsSection";
import ShoeDisplay from "../../components/ShoeDisplay/ShoeDisplay";
import ShoeGallery from "../../components/ShoeGallery/ShoeGallery";
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
        Discover stylish Nike Arrivals, quality comfort, and innovation for your
        active life.
      </p>
      <button className="btn-shop-now">
        Shop now <span>→</span>
      </button>

      <StatsSection />
      <ShoeDisplay />
      <ShoeGallery />
    </div>
  );
};

export default Home;
