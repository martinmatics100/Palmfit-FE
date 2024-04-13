import React from "react";
import loginImage from "../../images/login-signup.svg";
import "../../styles/Login.css";

const Login = () => {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <div className="col-md-6 p-0 d-flex align-items-center">
          <img src={loginImage} alt="login-image" className="img-fluid" />
        </div>
        <div className="col-md-5">
          <div className="login-right-container">
            <h3>Palmfit</h3>
            <p>Login to your account</p>
            <form action="">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <a href="" className="forgot-password mb-5">
                Forgot Password?
              </a>
              <br />
              <div className="form-group logs">
                <input
                  type="button"
                  value={"Login"}
                  className="mt-3 p-2 form-control log"
                />
              </div>
              <div>
                <span>
                  Don't have an account? <a href="">Register</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
