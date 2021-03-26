import React from "react";
import MobileNavbar from "../MobileNavbar/Index";
import WebNavbar from "../WebNavbar/Index";
import "./style.css";
const Index = () => {
  return (
    <div className="mt-3">
      <div className="mob-navbar">
        <MobileNavbar />
      </div>
      <div className="web-navbar">
        <WebNavbar />
      </div>
    </div>
  );
};

export default Index;
