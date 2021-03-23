import React, { useEffect, useState } from "react";
import "./style.css";
import { BiUser, BiHeart } from "react-icons/bi";
import { BsBag, BsSearch } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const WebNavbar = () => {
  const [isMobile, setIsMobile] = useState("");
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth >= 768;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);
  return (
    <div className="main-webnavbar">
      <div
        className={`${
          isMobile ? "container" : "container-fluid"
        } mt-4 `}
      >
        <div className="row topNavbar  ">
          <div className="col-md-4 d-flex justify-content-start ">
            <p className="nav-item">Women</p>
            <p className="ml-4 nav-item">Men</p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div>
              <img
                className="logo"
                src="https://www.ullapopken.com/medias/logo-ullapopken.svg?context=bWFzdGVyfGltYWdlc3w0MzI4fGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2gxYS9oM2UvODgzMzg3NTExNjA2Mi5zdmd8ZjU3MDdiN2RhMGRlNWIwZDYyNTRkYzkxMWIyNTRmY2Q0OGEwMzFkYmU2MTZiODVhMWIwMzU3M2I0MTJkMzg4OQ"
                alt="logo"
              />
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <span className="icon-Hover d-flex flex-column mx-2 align-items-center justify-content-center">
              <BiUser className="icon" />
              <p className="icon_name">Sigin In</p>
            </span>

            <span className="icon-Hover d-flex flex-column mx-2 align-items-center justify-content-center">
              <BsBag className="icon" />
              <p className="icon_name">Favourites</p>
            </span>
            <span className="icon-Hover d-flex flex-column mx-2 align-items-center justify-content-center">
              <RiPagesLine className="icon" />
              <p className="icon_name">Bag</p>
            </span>
          </div>
        </div>
      </div>

      {/* Bottom  */}

      <div
        className={`${
          isMobile ? "container" : "container-fluid"
        } mt-4 `}
      >
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 d-flex justify-content-start align-items-center mt-2 navItemsList  ">
            <p className="nav-item ">New Arrivals</p>
            <p className="nav-item ml-3">Clothing</p>
            <p className="nav-item ml-3">Active {"&"} Swim</p>
            <p className="nav-item ml-3">Trends</p>
            <p className="nav-item ml-3">Our Brands</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center searchBar_Wrapper">
            <div className="d-flex justify-content-end align-items-center w-100">
              <input placeholder="Search" className="search-bar" />
              <BsSearch className="search-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebNavbar;
