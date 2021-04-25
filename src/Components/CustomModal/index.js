import { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { add_to_cart } from "../../Store/actions/cart";
import Slider from "react-animated-slider";
import "react-image-gallery/styles/css/image-gallery.css";
import { useDispatch, useSelector } from "react-redux";

import "react-animated-slider/build/horizontal.css";

import { CURRENCY, Images } from "../../constant";

const CustomModal = (props) => {
  const { detail, className, showModal, setShowModal } = props;

  const [modal, setModal] = useState(showModal);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const toggle = () => {
    setShowModal(!props.showModal);
    setModal(!modal);
  };

  const addtocart = () => {
    let cartItemObj = {
      id: detail.id,
      itemName: detail?.title,
      itemImage: detail.imageList[0].picByte,
      attribute: {
        color: color ? color : "",
        size: size ? size : "",
      },
      quantity,
    };
    // console.log(cartItemObj);
    dispatch(add_to_cart(cartItemObj));
  };
  return (
    <div>
      <Modal
        centered={true}
        size="lg"
        style={{ maxWidth: "900px", width: "100%" }}
        isOpen={modal}
        toggle={toggle}
        className={className}
      >
        <ModalHeader toggle={toggle} style={{ border: "none" }}></ModalHeader>
        <ModalBody style={{ minHeight: "500px", width: "100%" }}>
          <div className="row w-100 ">
            <div className="col-md-6  d-flex justify-content-center align-items-center">
              <Slider>
                {Images.map((slide, index) => (
                  <img
                    key={index}
                    src={slide.original}
                    style={{ width: "400px", height: "500px" }}
                    alt={slide.originalClass}
                  />
                ))}
              </Slider>
            </div>
            <div className="col-md-6 marginTopAndBottom  ">
              <p className="product-title">{detail.title}</p>
              <p className="product-price my-3">
                {CURRENCY}70.00 - {CURRENCY}80.00
              </p>
              <p className="product-description my-3">
                A-ha Shop is a very slick and clean e-commerce template with
                endless possibilities.
              </p>

              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <div
                    className="custom-box"
                    onClick={() =>
                      setQuantity(quantity <= 1 ? quantity - 0 : quantity - 1)
                    }
                  >
                    -
                  </div>
                  <div className="custom-box">{quantity}</div>
                  <div
                    className="custom-box"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </div>
                </div>
                <div>
                  <button
                    className="btn btn-info btn-md mx-3"
                    onClick={addtocart}
                  >
                    Add to Cart
                  </button>
                </div>
                <div>
                  <button className="btn btn-dark btn-md">Buy Now</button>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CustomModal;
