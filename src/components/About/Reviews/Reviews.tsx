import React from "react";
import "./Reviews.css";
import { customer1 } from "../../../assets/images";
import { customer2 } from "../../../assets/images";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div className="inner-review-container">
        <h1>
          What Our <span className="highlight-customer">Customers</span> say?
        </h1>
        <p className="paragram-review">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="first-container">
        <img src={customer1} alt="" />
        <p>
          The attention to detail and the quality of the product exceeded my
          expectations. Highly recommended!
        </p>
        <span>⭐️</span>
        <h2>Morich Brown</h2>

        <img src={customer2} alt="" />
        <p>
          The product not only met but exceeded my expectations. I'll be a
          returning customer!
        </p>
        <span>⭐️</span>
        <h2>Lota Mongeskar</h2>
      </div>
    </div>
  );
};

export default Reviews;
