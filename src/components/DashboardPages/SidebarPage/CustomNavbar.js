import React from "react";

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <a class="navbar-brand" href="#">
          Dashboard
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item rounded border">
              <a className="nav-link text-dark" aria-current="page" href="#">
                <i className="bi bi-search"></i>Search
              </a>
            </li>
            <li className="nav-item mx-1 rounded border">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Settings
              </a>
            </li>
            <li className="nav-item rounded border">
              <a className="nav-link text-dark" aria-current="page" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
