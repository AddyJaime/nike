import React, { Children } from "react";
import "./Button.css";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ children, className }) => {
  // the btn is the main class that will handle how the btn will look like shape, and all of that but will not handle colores or specific attributes
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
