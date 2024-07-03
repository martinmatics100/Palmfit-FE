import React, { useEffect, useState } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { Link } from "react-router-dom";

const NewPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate password reset process (setTimeout can be replaced with actual API call)
    setTimeout(() => {
      setLoading(false);
      setShowMessage(true); // Show message after password reset simulation
    }, 3000);
  };
  return (
    <div>
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="bg-light py-3 py-md-5">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                <div className="bg-white p-4 p-md-5 rounded shadow-sm">
                  {showMessage && (
                    <div className="alert alert-success" role="alert">
                      Your password has been reset successfully.
                    </div>
                  )}
                  <div className="row gy-3 mb-5">
                    <div className="col-12">
                      <div className="text-center">
                        <a href="#!">
                          <h4>Palmfit</h4>
                        </a>
                      </div>
                    </div>
                    <div className="col-12">
                      <h2 className="fs-6 fw-normal text-center text-secondary m-0 px-md-5">
                        Please enter your new password and confirm it to reset
                        your password.
                      </h2>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-3 gy-md-4 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="newPassword" className="form-label">
                          New Password <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-lock"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 1a4 4 0 0 0-4 4v3h1V5a3 3 0 1 1 6 0v3h1V5a4 4 0 0 0-4-4Zm3 8V5a3 3 0 1 0-6 0v4H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H11Zm0 1H5v5h6v-5Z" />
                            </svg>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            name="newPassword"
                            id="newPassword"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label htmlFor="confirmPassword" className="form-label">
                          Confirm Password{" "}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-lock-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M2.5 7a1.5 1.5 0 0 0-1.5 1.5v5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 13.5 7H13V5a5 5 0 0 0-10 0v2H2.5ZM5 5a4 4 0 0 1 8 0v2H5V5Zm4 8a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 1 0v1Z" />
                            </svg>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            id="confirmPassword"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary btn-lg"
                            type="submit"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary-subtle" />
                      <div className="d-flex gap-4 justify-content-center">
                        <Link
                          to="/login"
                          className="link-secondary text-decoration-none"
                        >
                          Log In
                        </Link>
                        <Link
                          to="/register"
                          className="link-secondary text-decoration-none"
                        >
                          Register
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewPassword;
