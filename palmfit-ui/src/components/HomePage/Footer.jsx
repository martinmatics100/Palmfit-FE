import React from "react";
import "../../styles/HomePage.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container-first">
        <h2>PalmFit</h2>
        <p>
          Palmfit provides you the platform to calculate your calorie and
          monitor what you eat with ease.
        </p>

        <div
          style={{
            marginTop: "90px",
            color: "#ffffff",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          © 2024 Palmfit. All rights reserved
        </div>
      </div>
      <div className="footer-container-second">
        <h2>Programs</h2>
        <ul>
          <li>
            <a href="">Our Programs</a>
          </li>
          <li>
            <a href="">Become a member</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="footer-container-third">
        <h2>Contact</h2>
        <p>
          +8032921374 <br /> palmfit@gmail.com
        </p>
      </div>
      <div className="footer-container-fourth">
        <h2>Follow us</h2>
        <ul>
          <li>
            <a href="">Linkedln</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
          <li>
            <a href="">Facebook</a>
          </li>
          <li>
            <a href="">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
