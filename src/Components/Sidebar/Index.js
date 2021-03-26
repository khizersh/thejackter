import React, { useState } from "react";
import "./style.css";
import { Collapse } from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { BiUser, BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
const Index = ({ setShowSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="main">
      <div>
        {/* Close Button */}
        <p onClick={() => setShowSidebar(false)} className="close-btn">
          <AiOutlineClose />
        </p>
      </div>
      {/* Content */}
      <div className="mt-5">
        {/* Gender Choice */}
        <div className="d-flex">
          <p className="mr-3">Women</p>
          <p className="mx-3">Men</p>
        </div>

        <div className="mt-5">
          <p className="side-nav-link ">New</p>

          {/* Accordion / Drop Down */}
          <div>
            <div className="custom-drop-down " onClick={toggle}>
              <p className="side-nav-link">Clothing</p>
              <div>
                <MdArrowDropDown className="drop-down-icon" />
              </div>
            </div>
            <Collapse isOpen={isOpen}>
              <p className="side-nav-link ml-3">Shop By Category</p>
            </Collapse>
          </div>
          {/*////// End Accordion */}
          <p className="side-nav-link">SleepWares</p>
          <p className="side-nav-link">Tees</p>

          <p className="side-nav-link">8XL-10XL</p>
        </div>
      </div>
      {/* Footer */}
      <div className="sidebar-footer">
        <div className="footerItem">
          <p className="footerIcons">
            <BiUser />
          </p>
          <p className="item-name">Sign In</p>
        </div>
        <div className="footerItem">
          <p className="footerIcons">
            <BiHeart />
          </p>
          <p className="item-name">Favourites</p>
        </div>
        <div className="footerItem">
          <p className="footerIcons">
            <BsBag />
          </p>
          <p className="item-name">Quick Order</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
