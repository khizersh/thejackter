import { useState, useEffect } from "react";
import { getParentCategoriesWithChild } from "../../api";
import MobileNavbar from "../MobileNavbar/Index";
import WebNavbar from "../WebNavbar/Index";
import "./style.css";
const Index = () => {
  const [categories, setCategories] = useState([]);
  useEffect(async () => {
    let parentCat = await getParentCategoriesWithChild();
    console.log(parentCat);
    setCategories(parentCat?.data);
  }, []);
  return (
    <div className="mt-3">
      <div className="mob-navbar">
        <MobileNavbar categories={categories} />
      </div>
      <div className="web-navbar">
        <WebNavbar categories={categories} />
      </div>
    </div>
  );
};

export default Index;
