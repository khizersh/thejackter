import React, { useState } from "react";
import "./style.css";
import { Collapse } from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import { BiUser, BiHeart } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
const Index = ({ setShowSidebar, categories }) => {
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
        <div className="mt-5">

          {/* Accordion / Drop Down */}
          {categories?.length
            ? categories.map((cat, ind) => (
                <div key={ind}>
                  <div className="custom-drop-down " onClick={toggle}>
                    <p className="side-nav-link">{cat?.title}</p>
                    <div>
                      <MdArrowDropDown className="drop-down-icon" />
                    </div>
                  </div>
                  <Collapse isOpen={isOpen}>
                    {cat?.childList?.length
                      ? cat?.childList.map((child_cat, index) => (
                          <p key={index} className="side-nav-link ml-3">
                            {child_cat?.childTitle}
                          </p>
                        ))
                      : null}
                  </Collapse>
                </div>
              ))
            : null}
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
