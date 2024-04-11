import React from "react";
import HomePageLogo from "../../../src/images/HomepageLogo.svg";
import "./HomePage.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <img src={HomePageLogo} alt="love" />
        <a className="logo-text" href="#">
          Palmfit
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a href="#" className="nav-link active">
                Home
              </a>
            </li> */}
            <li className="nav-item">
              <a href="" className="nav-link">
                Calorie Counter
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Sign-in
              </a>
            </li>
            <li className="nav-item">
              <a
                href=""
                // className="btn text-white"
                className="btn"
                // style={{ backgroundColor: "teal" }}
              >
                Proceed
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
