import React from "react";
import {Link} from 'react-router-dom'
import { FaSignInAlt } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow">
        <div className="container">
          <Link to='/' className="navbar-brand fw-bold fs-4">
            EMART
          </Link>
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
                <Link to='/' className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/products' className="nav-link" >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link" >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to= '/contact' className="nav-link" >
                 Contact
                </Link>
              </li>
              
                
            </ul>
            
            <div className="buttons">
                <Link to='/login'><button className="btn btn-outline-dark"><FaSignInAlt className='me-1'/>Login</button></Link>
                <Link to='/register'><button className="btn btn-outline-dark ms-2"><IoIosPersonAdd className='me-1'/>Register</button></Link>
                <Link to='/cart'><button className="btn btn-outline-dark ms-2"><FaShoppingCart className='me-1'/>Cart(0)</button></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
