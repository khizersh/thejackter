import { useState } from "react";
import { Button, Card, CardBody, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

import CustomModal from "../CustomModal";
import { CURRENCY } from "../../constant";
import "./style.css";

const CardFour = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="row mt-2">
      {
        props?.products.map((pro, index) => (
          <div className="col-md-3 col-6 p-1 mt-5">
            <Card className="product-card">
              <div className="product-img-wrapper">
                <div className="product-img-wrapper1">
                  <Link to={`/product/${pro?.id}`}>
                    <CardImg
                      top
                      width="100%"
                      // height="400px"
                      src={`data:image/png;base64,${pro?.imageList[0].picByte}`}
                      alt="Card image cap"
                    />
                  </Link>
                </div>
                <div className="product-btn-wrapper">
                  <Button
                    className="add-to-cart-btn btn-block btn-sm"
                    onClick={() => setShowModal(!showModal)}
                  >
                    Quick View
                  </Button>
                </div>
              </div>
              <CardBody className="text-center">
                <span className="product-title" tag="h5">
                  <Link to={`/product/${pro?.id}`}>{pro.title}</Link>
                </span>
                <br />
                <span tag="h6" className="mb-2 product-price">
                  {CURRENCY}{pro?.price}
                </span>
              </CardBody>
            </Card>
          </div>
        ))}
      {showModal && <CustomModal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
};

export default CardFour;
