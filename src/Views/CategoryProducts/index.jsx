import React, { useEffect, useState } from "react";
import {
  getProductsByCategory,
  getParentCategoriesWithChild,
} from "../../api/index";
import { Link, useParams } from "react-router-dom";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import CardFour from "../../Components/Cards/card-four";
import { Col } from "reactstrap";
const Index = () => {
  const { slug } = useParams();
  const [volume, setVolume] = useState(0);
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [parentCategories, setParentCategories] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  const voulumeChange = (value) => {
    setVolume(value);

    let array = products.filter((m) => {
      if (m.range) {
        let price = parseInt(m.range.split("-")[0].trim());

        if (price <= value) {
          return m;
        }
      }
    });

    setFilterProduct(array);
  };
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const data = await getProductsByCategory(slug);

      let rangeList = [];
      data.data.map((m) => {
        if (m.range) {
          let range = m.range.split("-")[0].trim();
          rangeList.push(range);
        }
      });

      let max = Math.max(...rangeList);
      let min = Math.min(...rangeList);
      setMin(min);
      setMax(max);
      setProducts(data.data);

      let parentCat = await getParentCategoriesWithChild();
      setParentCategories(parentCat?.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-4">
      <div className="container-fluid ">
        <img
          src="https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg"
          alt="background cover"
          width="100%"
          height="400px"
        />
      </div>
      <section>
        <div className="container-fluid mt-1">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-2">
              <div>
                <Col sm={0} md={3} className="p-0 filter">
                  {parentCategories?.length
                    ? parentCategories.map((cat, ind) => (
                        <section key={ind}>
                          <h5>{cat?.title}:</h5>
                          <ul>
                            {cat?.childList?.length
                              ? cat?.childList?.map((child_cat, index) => (
                                  <li key={index}>
                                    <Link to={`/category/${child_cat.id}`}>
                                      {child_cat.childTitle}
                                    </Link>
                                  </li>
                                ))
                              : null}
                          </ul>
                        </section>
                      ))
                    : null}
                </Col>
              </div>
              <div className="mt-5">
                <h5>Filter By Price</h5>
                <Slider
                  min={min}
                  max={max}
                  step={1}
                  tooltip={true}
                  // labels={{ min: "Low", max: "High" }}
                  value={volume}
                  orientation="horizontal"
                  onChange={(e) => voulumeChange(e)}
                />
              </div>
            </div>
            <div className="col-md-9">
              {!filterProduct.length ? (
                products.length > 0 ? (
                  <CardFour products={products} />
                ) : (
                  <h1 className="text-center">Loading</h1>
                )
              ) : (
                <CardFour products={filterProduct} />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
