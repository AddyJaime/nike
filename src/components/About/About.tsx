import React from "react";
import photo from "../../assets/images/shoe8.svg";
import "./About.css";

const About: React.FC = () => {
  return (
    <>
      <div id="about" className="about">
        <h1>
          We Provide You <span>Super Quality</span> Shoes
        </h1>
        <p>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <br />
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="image">
          <img src={photo} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
