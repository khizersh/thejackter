import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

import { getChildCategories } from "../../api";
import CategoryCard from "../../Components/Cards/category-card";

import "./style.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let data = await getChildCategories();
        console.log(data);
        setCategories(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <Container className="mt-5">
      <Row>
        <Col sm={0} md={3} className="p-0 filter">
          <section>
            <h5>MEN'S COLLECTION:</h5>
            <ul>
              <li>Leather Jackets</li>
              <li>Biker Jackets</li>
              <li>Bomber Jackets</li>
              <li>Biker Jackets</li>
              <li>Leather Jackets</li>
              <li>Bomber Jackets</li>
            </ul>
          </section>
          <section>
            <h5>WOMEN'S COLLECTION:</h5>
            <ul>
              <li>Leather Jackets</li>
              <li>Biker Jackets</li>
              <li>Bomber Jackets</li>
              <li>Biker Jackets</li>
              <li>Leather Jackets</li>
              <li>Bomber Jackets</li>
            </ul>
          </section>
        </Col>
        <Col md={9}>
          <Row className="card-wrapper">
            {categories?.length
              ? categories.map((cat, ind) => (
                  <Col
                    xs={6}
                    sm={6}
                    md={6}
                    className={ind % 2 === 0 ? "left-wrapper" : "right-wrapper"}
                  >
                    <CategoryCard
                      title={cat.title}
                      link={`/category/${cat.id}`}
                      isLeftAlign={ind % 2 === 0 ? false : true}
                      img="https://thejacketmaker-images.s3.amazonaws.com/Men-Leather-Jackets-1582970628214.jpg"
                    />
                  </Col>
                ))
              : null}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
