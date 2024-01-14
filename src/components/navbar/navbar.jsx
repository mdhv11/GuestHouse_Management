import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="logo-link">
          <span className="logo-text">Hindalco</span>
        </Link>
        <div className="navItems">
        <Link to="/register" className="navButton">
            <span>Register/Login</span>
          </Link> 
          <Link to="/guest-house" className="navButton">
            <span>Guest-Houses</span>
          </Link>
          <Link to="/hotel" className="navButton">
            <span>Hotels</span>
          </Link>
          <button className="navButton">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
