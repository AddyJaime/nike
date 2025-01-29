import React from "react";
import "./SignUp.css";

const SignUp: React.FC = () => {
  return (
    <div className="sign-up-container">
      <div>
        <p className="signup-paragram">Sign Up for Updates & Newsletter</p>
      </div>
      <div>
        <input type="text" placeholder="subscribe@nike.com" />
      </div>
    </div>
  );
};

export default SignUp;
