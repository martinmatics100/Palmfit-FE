import React, { useState } from "react";
import "../css/style.css";

export default function Navbar() {
  const [active, SetActive] = useState(1);
  return (
    <nav class="navbar navbar navbar-expand-lg">
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          className={active === 1 ? "active nav-item" : "nav-item"}
          onClick={(e) => SetActive(1)}
        >
          Feedback
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              className={active === 2 ? "active nav-item" : "nav-item"}
              onClick={(e) => SetActive(2)}
            >
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li
              class="nav-item"
              className={active === 3 ? "active nav-item" : "nav-item"}
              onClick={(e) => SetActive(3)}
            >
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li
              class="nav-item dropdown"
              className={active === 4 ? "active nav-item" : "nav-item"}
              onClick={(e) => SetActive(4)}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="nav-item"
              className={active === 5 ? "active nav-item" : "nav-item"}
              onClick={(e) => SetActive(5)}
            >
              <a class="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
