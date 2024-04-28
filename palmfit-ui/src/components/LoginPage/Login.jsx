import React, { useState } from "react";
import loginImage from "../../images/login-signup.svg";
import "../../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  // for toggling password
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // for toggling password Ends here

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
              <div className="form-group input">
                <label htmlFor="email">Email address</label>
                <input
                  id="email"
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="form-group input">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                />
                <span
                  className="toggle-password"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? "Hide password" : "Show password"}
                </span>
              </div>
              <div className="forgot-password mt-2">
                <Link to={"/search-email"}>Forgot Password?</Link>
              </div>
              <br />
              <Link to={"/dashboard"}>
                <div className="form-group logs">
                  <input
                    type="button"
                    value={"Login"}
                    className="mt-1 p-2 form-control log"
                  />
                </div>{" "}
              </Link>
              <div className="register">
                <span>
                  Don't have an account? <Link to={"/register"}>Register</Link>
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
