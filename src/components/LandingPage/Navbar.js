import React, { useState } from "react";
import Logo from "../../Assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import CalculateCalorie from "./CalculateCalorieModal/CalculateCalorie";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body scroll lock
    document.body.classList.toggle("mobile-nav-active");
  };

  return (
    <div
      className={`header d-flex align-items-center sticky-top ${
        isMenuOpen ? "mobile-nav-active" : ""
      }`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="#" class="logo d-flex align-items-center">
          <img src={Logo} alt="logo-image" />
          <h1 class="sitename">Palmfit.</h1>
        </a>
        <nav className="navmenu">
          <ul className="d-flex">
            <li>
              <a href="#" onClick={() => setModalShow(true)}>
                Calorie Calculator
              </a>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Get Started</Link>
            </li>
          </ul>
          <div className="mobile-nav-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>
      <CalculateCalorie show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Navbar;
