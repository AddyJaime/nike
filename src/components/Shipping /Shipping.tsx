import React from "react";
import "./Shipping.css";

const Shipping: React.FC = () => {
  return (
    <div className="shipping">
      <div className="shipping-tems">
        <span>🛻</span>
        <h3>Free shipping</h3>
        <p>Enjoy seamless shopping with our complimentary shipping service.</p>
      </div>
      <div className="shipping-tems">
        <span>💳</span>
        <h3>Secure Payment</h3>
        <p>Enjoy seamless shopping with our complimentary shipping service</p>
      </div>
      <div className="shipping-tems">
        <span>❤️</span>
        <h3>Love to help you</h3>
        <p>Enjoy seamless shopping with our complimentary shipping service.</p>
      </div>
    </div>
  );
};

export default Shipping;
