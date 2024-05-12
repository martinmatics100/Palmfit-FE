import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/style.css";

export default function Sidebar() {
  const [active, SetActive] = useState(1);
  return (
    <div className="sidebar d-flex justify-content-between flex-column py-3 ps-3 pe-5 vh-100">
      <div>
        <span className="p-3">
          <i className="bi bi-code-slash fs-4 me-4"></i>
          <span className="fs-3">Welcome Martin </span>
        </span>
        <hr className="text-white mt-2" />

        <ul className="nav nav-pills flex-column mt-3">
          <li
            className={active === 1 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(1)}
          >
            <span className="a p-1">
              <i class="bi bi-calculator me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Calorie Calculator</strong>
              </span>
            </span>
          </li>
          <li
            className={active === 2 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(2)}
          >
            <span className="a p-1">
              <i class="bi bi-calendar-week me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Meal plans</strong>
              </span>
            </span>
          </li>
          <li
            className={active === 3 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(3)}
          >
            <span className="a p-1">
              <i class="bi bi-book-fill me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Meal diary</strong>
              </span>
            </span>
          </li>
          <li
            className={active === 4 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(4)}
          >
            <span className="a p-1">
              <i class="bi bi-person-fill me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Profile</strong>
              </span>
            </span>
          </li>
          <li
            className={active === 5 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(5)}
          >
            <span className="a p-1">
              <i class="bi bi-credit-card-fill me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Subscription</strong>
              </span>
            </span>
          </li>
          <li
            className={active === 6 ? "active nav-item p-2" : "nav-item p-2"}
            onClick={(e) => SetActive(6)}
          >
            <span className="a p-1">
              <i class="bi bi-box-arrow-left me-3 fs-4"></i>
              <span className="fs-4">
                <strong>Logout</strong>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <hr className="text-white" />
        <div className="nav-item p-2">
          <a href="" className="p-1">
            <i class="bi bi-person-circle me-3 fs-4"></i>
            <span className="fs-4">
              <strong>Palmfit</strong>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
