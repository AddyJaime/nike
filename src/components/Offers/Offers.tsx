import React from "react";
import "./Offers.css";
import OffersImage from "../OffersImage/OffersImage";
import Button from "../common/Button/Button";

const Offers: React.FC = () => {
  return (
    <div className="offers">
      <OffersImage />
      <div className="special-offer-container">
        <h2>
          <span className="hight-light">Special</span>
          Offer
        </h2>
        <p>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart. Navigate a realm of
          possibilities designed to fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of
          exceptional.
        </p>
        <Button>Shop Now </Button>
      </div>
    </div>
  );
};

export default Offers;
