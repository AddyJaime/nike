import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

import React from "react";

const App: React.FC = () => {
  return (
    <div className="page-container">
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
