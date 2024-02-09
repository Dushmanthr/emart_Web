import React from "react";
import BgImage from "../../assets/images/bg2.jpg";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div classNameNameName="hero">
      <div className="card bg-dark text-white border-0">
        <img src={BgImage} className="card-img" alt="bg" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div classNameName="container">
            <h5 className="card-title display-3 fw-bold mb-0">WELCOME WITH NEW ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECKOUT NEW TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
