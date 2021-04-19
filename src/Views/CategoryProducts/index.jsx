import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "../../api/index";
import { useParams } from "react-router-dom";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import CardFour from "../../Components/Cards/card-four";
const Index = () => {
  const { slug } = useParams();
  const [volume, setVolume] = useState(0);
  const [products, setProducts] = useState([]);
  const voulumeChange = (value) => {
    setVolume(value);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const data = await getProductsByCategory(slug);
      console.log(data.data);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5">
      <div className="container">
        <img
          src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
          alt="background cover"
          width="100%"
          height="500px"
        />
      </div>
      <section>
        <div className="container-fluid mt-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-3">
              <h2>Filter By Price</h2>
              <Slider
                min={1000}
                max={5000}
                step={1000}
                tooltip={true}
                labels={{ 1000: "Low", 5000: "High" }}
                value={volume}
                orientation="horizontal"
                onChange={(e) => voulumeChange(e)}
              />
            </div>
            <div className="col-md-9">
              {products.length > 0 ? (
                <CardFour products={products} />
              ) : (
                <h1 className="text-center">Loading</h1>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
