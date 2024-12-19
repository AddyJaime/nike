import React from "react";
import "./Shipping.css";

const Shipping: React.FC = () => {
  return (
    <div className="shipping">
      <div className="shipping-tems">
        <span>🛻</span>
        <h2>Free shipping</h2>
        <p>Enjoy seamless shopping with our complimentary shipping service.</p>
      </div>
      <div className="shipping-tems">
        <span>💳🔒</span>
        <h3>Secure Payment</h3>
        <p>
          Experience worry-free transactions with our secure payment options..
        </p>
      </div>
      <div className="shipping-tems">
        <span>❤️🤝</span>
        <h4>Love to help you</h4>
        <p>Our dedicated team is here to assist you every step of the way..</p>
      </div>
    </div>
  );
};

export default Shipping;
