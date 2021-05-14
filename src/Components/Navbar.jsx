import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const backHome = () => {
    setClick(false);
  };

  return (
    <nav>
      <div className="logo">
        <NavLink exact to="/" className="logo_btn">
          <h1>
            NATURE <i className="fa fa-lemon" />
          </h1>
        </NavLink>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className={click ? "nav_menu active" : "nav_menu"}>
        <ul>
          <li onClick={backHome}>
            <NavLink exact to="/" className="home_btn">
              Home
            </NavLink>
          </li>
          <li onClick={backHome}>
            <NavLink exact to="/photos" className="photos_btn">
              Photos
            </NavLink>
          </li>
          <li onClick={backHome}>
            <NavLink exact to="/about" className="about_btn">
              About us
            </NavLink>
          </li>
          <li onClick={backHome} className="sign_btn">
            <NavLink exact to="/signUp" className="signUp_btn">
              Sign-Up
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="btn">
        <button>
          <NavLink exact to="/signUp" className="signUp_btn" onClick={backHome}>
            SignUp
          </NavLink>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
