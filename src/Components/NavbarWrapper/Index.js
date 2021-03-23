import React from "react";
import MobileNavbar from "../MobileNavbar/Index";
import WebNavbar from "../WebNavbar/Index";
import "./style.css";
const Index = () => {
  return (
    <div>
      <div className="mob-navbar">
        <MobileNavbar />
      </div>
      <WebNavbar />
    </div>
  );
};

export default Index;
