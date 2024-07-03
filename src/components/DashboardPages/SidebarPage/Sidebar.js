import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../../Assets/Logo.png";

const Navbar = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="d-flex justify-content-between flex-column py-3 px-3 p-5 vh-100 sidebar">
      <div className="sidebar-items">
        <a href="" className="p-3 d-flex flex-column align-items-center">
          <img src={Logo} alt="logo" className="img-fluid logo-size" />
          <span className="fs-5">Pamlfit</span>
        </a>
        <hr className="text-white mt-1" />
        <ul className="nav nav-pills flex-column mt-4">
          <li
            className={
              active === 1 ? "active nav-item p-3 mb-2" : "nav-item p-3 mb-2"
            }
            onClick={() => setActive(1)}
          >
            <span className="p-1">
              <i className="bi bi-calculator me-3 fs-5"></i>
              <span className="fs-5">Calorie Calculator</span>
            </span>
          </li>
          <li
            className={
              active === 2 ? "active nav-item p-3 mb-2" : "nav-item p-3 mb-2"
            }
            onClick={() => setActive(2)}
          >
            <span className="p-1">
              <i className="bi bi-journal me-3 fs-5"></i>
              <span className="fs-5">Meal plans</span>
            </span>
          </li>
          <li
            className={
              active === 3 ? "active nav-item p-3 mb-2" : "nav-item p-3 mb-2"
            }
            onClick={() => setActive(3)}
          >
            <span className="p-1">
              <i className="bi bi-journal-text me-3 fs-5"></i>
              <span className="fs-5">Meal diary</span>
            </span>
          </li>
          <li
            className={
              active === 4 ? "active nav-item p-3 mb-2" : "nav-item p-3 mb-2"
            }
            onClick={() => setActive(4)}
          >
            <span className="p-1">
              <i className="bi bi-person-circle me-3 fs-5"></i>
              <span className="fs-5">Profile</span>
            </span>
          </li>
          <li
            className={
              active === 5 ? "active nav-item p-3 mb-2" : "nav-item p-3 mb-2"
            }
            onClick={() => setActive(5)}
          >
            <span className="p-1">
              <i className="bi bi-credit-card me-3 fs-5"></i>
              <span className="fs-5">Subscription</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="logout">
        <hr className="text-white" />
        <div className="nav-item p-3">
          <a href="" className="p-1">
            <i className="bi bi-box-arrow-right me-3 fs-5"></i>
            <span className="fs-5">Logout</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
