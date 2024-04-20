import React, { useState } from "react";
import loginImage from "../../images/login-signup.svg";
const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container-fluid">
      <div className="passwordreset-container row">
        <div className="col-md-6 p-0 d-flex align-items-center">
          <img src={loginImage} alt="" />
        </div>
        <div className="col-md-5">
          <div className="ForgotPassword-right-container">
            <h3>Palmfit</h3>
            <p className="text-two">Create new password</p>
            <p>
              Your new password must be different from previous used password
            </p>
            <form className="passwordreset-form" action="">
              <div className="form-group input">
                <label htmlFor="password">New Password</label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <h5>
                Must have uppercase, lowercase, number and special character
              </h5>
              <div className="form-group input">
                <label htmlFor="verifyPassword">Confirm New Passwor</label>
                <input
                  id="verifyPassword"
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
              <div className="form-group logs">
                <button type="submit" className="mt-1 p-2 form-control log">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
