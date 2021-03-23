import React from "react";
import { BiUser } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

import { RiPagesLine } from "react-icons/ri";
import "./style.css";

const MobileNavbar = () => {
  return (
    <div className="main-MobileNavbar">
      <div className="divider d-flex justify-content-between align-items-center  mt-4 w-100">
        <div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <GiHamburgerMenu />

            <img
              className="mobileLogo ml-3"
              src="https://www.ullapopken.com/medias/logo-ullapopken.svg?context=bWFzdGVyfGltYWdlc3w0MzI4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxYS9oM2UvODgzMzg3NTExNjA2Mi5zdmd8ZjU3MDdiN2RhMGRlNWIwZDYyNTRkYzkxMWIyNTRmY2Q0OGEwMzFkYmU2MTZiODVhMWIwMzU3M2I0MTJkMzg4OQ"
              alt="logo"
            />
          </div>
        </div>
        <div>
          <div className="col-md-4 d-flex align-items-center justify-content-center ">
            <span className="icon-Hover d-flex flex-column mx-2 align-items-center">
              <BiUser className="icon" />
              <p className="icon_name">Sign In</p>
            </span>
            <span className="icon-Hover d-flex flex-column mx-2 align-items-center">
              <RiPagesLine className="icon" />
              <p className="icon_name">Bag</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
