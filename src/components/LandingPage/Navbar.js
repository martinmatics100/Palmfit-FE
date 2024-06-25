import React, { useState } from "react";
import Logo from "../../Assets/Logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <a href="#">Calorie Calculator</a>
            </li>
            <li>
              <a href="#">Sign In</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
          <div className="mobile-nav-toggle" onClick={toggleMenu}>
            <FaBars />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
