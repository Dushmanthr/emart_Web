import React from "react";
import {Link} from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#">
            EMART
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Contact
                </a>
              </li>
              
                
            </ul>
            
            <div className="buttons">
                <button className="btn btn-outline-dark"><FaSignInAlt className='me-1'/>Login</button>
                <button className="btn btn-outline-dark ms-2"><IoIosPersonAdd className='me-1'/>Register</button>
                <button className="btn btn-outline-dark ms-2"><FaShoppingCart className='me-1'/>Cart(0)</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
