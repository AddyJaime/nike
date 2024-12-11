import React from "react";
import StatsSection from "../../components/StatsSection/StatsSection";
import ShoeDisplay from "../../components/ShoeDisplay/ShoeDisplay";
import ShoeGallery from "../../components/ShoeGallery/ShoeGallery";
import "./Home.css";
import Button from "../Button/Button";

const Home: React.FC = () => {
  return (
    <div id="home" className="home-section">
      <p className="title">Our Summer Collection</p>
      <h1 className="tagline">
        The New Arrival <br />
        <span className="highlight">Nike</span> Shoes
      </h1>
      <p className="description">
        Discover stylish Nike Arrivals, quality comfort, and innovation for your
        active life.
      </p>
      <Button className="btn-primary">
        Shop now <span>→</span>
      </Button>

      <StatsSection />
      <ShoeDisplay />
      <ShoeGallery />
    </div>
  );
};

export default Home;
