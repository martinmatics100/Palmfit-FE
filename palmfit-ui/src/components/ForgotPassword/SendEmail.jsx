import React, { useState } from "react";
import loginImage from "../../images/login-signup.svg";
import "../../styles/SendEmail.css";
import { Link } from "react-router-dom";

const SendEmail = () => {
  return (
    <div className="container-fluid">
      <div className="passwordreset-container row">
        <div className="col-md-6 p-0 d-flex align-items-center">
          <img src={loginImage} alt="" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <div className="sendEmail-right-container">
            <h3>Palmfit</h3>
            <p className="text-two">Find your account</p>
            <p>Please enter your email address to search for your account.</p>
            <form className="sendEmail-form" action="">
              <div className="form-group input">
                <label htmlFor="firstname">Email address</label>
                <input
                  id="firstName"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
              </div>
              <div className="form-group logs">
                <Link to={"/verify-email"}>
                  <button type="submit" className="mt-3 p-2 form-control log">
                    Search
                  </button>{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendEmail;
