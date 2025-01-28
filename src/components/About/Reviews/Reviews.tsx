import React from "react";
import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="reviews-container">
      <div>
        <h1>What Our Customers say</h1>
        <p>
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div>
        <img src="" alt="" />
        <p>
          The attention to detail and the quality of the product exceeded my
          expectations. Highly recommended!
        </p>
        <span>⭐️</span>
        <h2>Morich Brown</h2>
      </div>
      <div>
        <img src="" alt="" />
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
