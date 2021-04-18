import React, { useEffect, useState } from "react";

import SliderComponent from "../../Components/Slider";
import CardFour from "../../Components/Cards/card-four";
import Footer from "../../Components/Footer";
import { getAllProducts } from "../../api/index";
import { slides } from "../../constant";
import "./style.css";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProductsWrapper();
  }, []);
  const getAllProductsWrapper = async () => {
    try {
      const data = await getAllProducts();
     
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4">
      <SliderComponent slides={slides} />
      <div className="container">
        <h1 className="text-center font-weight-bold mt-5">New Arrival</h1>
        <CardFour products={products} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
