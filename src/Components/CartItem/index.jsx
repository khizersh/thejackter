import React from "react";
import "./style.css"
const CartItem = () => {
  return (
    <div className="col-md-12 p-0 my-2">
      <div className="item-content-wrapper d-flex ">
        <div>
          <img
            src={
              "https://assets.ullapopken.de/images/products/74883210_model_g_30.jpg"
            }
            className="cart-image"
          />
        </div>
        <div className="pl-2 w-100">
          <p className="font-weight-bold">
            Salt and Pepper Tweed Full Lined Coat
          </p>
          <p className="no-space text-small">Color: Black</p>
          <p className="no-space">Size: 28/30 regular</p>
          <div className="d-flex justify-content-end no-space ">
            <p className="font-weight-bold float-right">$ 1293.95</p>
          </div>
          <div className="web-show-stuff">
            <div className="d-flex align-items-center  select-wrapper">
              <select name="cars" id="cars" className="custom-select">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <button className="btn btn-light delete-btn">X Delete</button>
            </div>
            <p className="text-available">
              Available - Delivery in 2-7 business days
            </p>
          </div>
        </div>
      </div>
      <div className="mob-show-stuff d-none mt-3">
        <div className="d-flex align-items-center  select-wrapper w-100">
          <select name="cars" id="cars" className="custom-select w-75">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <button className="btn btn-light delete-btn ">X Delete</button>
        </div>
        <p className="text-available">
          Available - Delivery in 2-7 business days
        </p>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
