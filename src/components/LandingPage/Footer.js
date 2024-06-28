import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer
      className="text-white pt-5 pb-4 mt-5"
      style={{ backgroundColor: "#1A8D8D" }}
    >
      <div className="container text-md-left">
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h3 className="mb-4 font-weight-bold text-white">Palmfit</h3>
            <p>
              Palmfit provides you the platform to calculate your calorie and
              monitor what you eat.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 programs">
            <h5 className="mb-4 font-weight-bold text-white">Programs</h5>
            <p>
              <a href="#"> Our Programs</a>
            </p>
            <p>
              <a href="#"> Become a member</a>
            </p>
            <p>
              <a href="#"> Privacy policy</a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold text-white">Contact</h5>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                palmfit@gmail.com
              </a>
            </p>
            <p>
              <a
                href="#"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                +2348032921374
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto ml-auto mt-3 socials">
            <h5 className="mb-4 font-weight-bold text-white">Follow us</h5>
            <p>
              <a href="#">
                <i className="bi bi-linkedin mr-3"></i>Linkedin
              </a>
            </p>
            <p>
              <a href="#">
                <i className="bi bi-twitter mr-3"></i>Twitter
              </a>
            </p>
            <p>
              <a href="#">
                <i className="bi bi-facebook mr-3"></i>Facebook
              </a>
            </p>
            <p>
              <a href="#">
                <i className="bi bi-instagram mr-3"></i>Instagram
              </a>
            </p>
          </div>
        </div>

        {/* <hr className="mb-4" /> */}

        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-md-7 col-lg-12 ">
            <p> © 2024 Palmfit. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
