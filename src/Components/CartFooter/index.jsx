import React, { useState } from "react";
import "./style.css";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineYoutube,
  AiOutlineFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
import { Collapse, CardBody, Card } from "reactstrap";

const CartFooter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (id) => {
    if (isOpen === id) return setIsOpen(false);
    setIsOpen(id);
  };

  return (
    <div>
      {/* Web Footer */}
      <div className="cart-web-footer container mt-5">
        <div className="row ">
          <div className="col-md-4  ">
            <p className="font-weight-bold">Our Service</p>
            <p className="cart-footer-item">Customer Support</p>
            <p className="cart-footer-item">FAQ</p>
            <p className="cart-footer-item">Subscribe to email t</p>
            <p className="cart-footer-item">Quick order</p>
            <p className="cart-footer-item">Request a catalog</p>
            <p className="cart-footer-item">Online catalog</p>
            <p className="cart-footer-item">Blog</p>
          </div>
          <div className="col-md-4">
            <p className="font-weight-bold">About Us</p>
            <p className="cart-footer-item">Company</p>
            <p className="cart-footer-item">Jobs</p>
            <p className="cart-footer-item">Press</p>
            <p className="cart-footer-item">Sustainiblity</p>
          </div>
          <div className="col-md-4">
            <p className="font-weight-bold py-3">Contact Us</p>
            <h5 className="font-weight-bold mt-2 mb-0">1-800-245-8552</h5>
            <p className="text-muted">Mon - Sun. 9AM - 12 AM (ET)</p>
          </div>
        </div>
        {/* payment */}
        <div className="d-flex justify-content-between mt-3 align-items-center">
          <div>
            <img
              src="https://www.ullapopken.eu/images/cms/hc7/hc0/8909011615774.png"
              alt="footer"
            />
          </div>
          <div>
            Secure Connection With
            <img
              className="ml-3"
              src="https://www.ullapopken.eu/images/cms/hbe/h86/8814213791774.png"
              alt="footer"
            />
          </div>
        </div>
      </div>
      {/* Cart Mobile Footer */}
      <div className="mt-3 mob-cart-footer d-none">
        {/* Accordion Item */}
        <div className="mx-4  mt-2 ">
          <div className="">
            <div className="accordion-button" onClick={() => toggle(1)}>
              <p> Our Services</p>
              {isOpen === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <Collapse isOpen={isOpen === 1 ? true : false}>
              <Card style={{ border: "0px", outline: '"none"' }}>
                <CardBody style={{ border: "0px", outline: '"none"' }}>
                  <p className="cart-footer-item">Customer Support</p>
                  <p className="cart-footer-item">FAQ</p>
                  <p className="cart-footer-item">Subscribe to email t</p>
                  <p className="cart-footer-item">Quick order</p>
                  <p className="cart-footer-item">Request a catalog</p>
                  <p className="cart-footer-item">Online catalog</p>
                  <p className="cart-footer-item">Blog</p>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        {/* Accordion Item */}
        <div className="mx-4  mt-2 ">
          <div className="">
            <div className="accordion-button" onClick={() => toggle(2)}>
              <p> About Us</p>
              {isOpen === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <Collapse isOpen={isOpen === 2 ? true : false}>
              <Card style={{ border: "0px", outline: '"none"' }}>
                <CardBody style={{ border: "0px", outline: '"none"' }}>
                  <p className="cart-footer-item">Company</p>
                  <p className="cart-footer-item">Jobs</p>
                  <p className="cart-footer-item">Press</p>
                  <p className="cart-footer-item">Sustainiblity</p>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        {/* Accordion Item */}
        <div className="mx-4  mt-2 ">
          <div className="">
            <div className="accordion-button" onClick={() => toggle(3)}>
              <p> Contact</p>
              {isOpen === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <Collapse isOpen={isOpen === 3 ? true : false}>
              <Card style={{ border: "0px", outline: '"none"' }}>
                <CardBody style={{ border: "0px", outline: '"none"' }}>
                  <p className="font-weight-bold py-3">Contact Us</p>
                  <h5 className="font-weight-bold mt-2 mb-0">1-800-245-8552</h5>
                  <p className="text-muted">Mon - Sun. 9AM - 12 AM (ET)</p>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        {/* Accordion Item */}
        <div className="mx-4  mt-2 ">
          <div className="">
            <div className="accordion-button" onClick={() => toggle(4)}>
              <p>Payment</p>
              {isOpen === 4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <Collapse isOpen={isOpen === 4 ? true : false}>
              <Card style={{ border: "0px", outline: '"none"' }}>
                <CardBody style={{ border: "0px", outline: '"none"' }}>
                  <div>
                    <img
                      src="https://www.ullapopken.eu/images/cms/hc7/hc0/8909011615774.png"
                      alt=""
                    />
                  </div>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        <div className="text-center pt-4">
          Secure Connection With
          <img
            className="ml-3"
            src="https://www.ullapopken.eu/images/cms/hbe/h86/8814213791774.png"
          />
        </div>
      </div>
      {/* Bottom Part */}
      <div className="bg-dark bottom-footer">
        <div className="d-flex ">
          <AiOutlineYoutube className="mx-2" size={25} />
          <AiFillTwitterSquare className="mx-2" size={25} />

          <AiOutlineFacebook className="mx-2" size={25} />
          <AiOutlineInstagram className="mx-2" size={25} />
          <FaPinterestSquare className="mx-2" size={25} />
        </div>
        <div className="d-flex sub-bottom-footer justify-content-around  w-50 ">
          <p className="text-small">Privacy Policy</p>
          <p className="text-small">Returns {"&"} Exchanges</p>
          <p className="text-small">Shipping</p>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
