import React, { useEffect, useState } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { Link } from "react-router-dom";

const ResetPassword = () => {
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

    // Simulate reset password process (setTimeout can be replaced with actual API call)
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
        <div class="bg-light py-3 py-md-5">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
                <div class="bg-white p-4 p-md-5 rounded shadow-sm">
                  {showMessage && (
                    <div className="alert alert-success" role="alert">
                      Check your email for a link to reset your password.
                    </div>
                  )}
                  <div class="row gy-3 mb-5">
                    <div class="col-12">
                      <div class="text-center">
                        <a href="#!">
                          <h4>Palmfit</h4>
                        </a>
                      </div>
                    </div>
                    <div class="col-12">
                      <h2 class="fs-6 fw-normal text-center text-secondary m-0 px-md-5">
                        Provide the email address associated with your account
                        to recover your password.
                      </h2>
                    </div>
                  </div>
                  <form action="#!" onSubmit={handleSubmit}>
                    <div class="row gy-3 gy-md-4 overflow-hidden">
                      <div class="col-12">
                        <label for="email" class="form-label">
                          Email <span class="text-danger">*</span>
                        </label>
                        <div class="input-group">
                          <span class="input-group-text">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-envelope"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                          </span>
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            id="email"
                            required
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="d-grid">
                          <button
                            class="btn btn-primary w-100 btn-lg"
                            type="submit"
                          >
                            Reset Password
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div class="row">
                    <div class="col-12">
                      <hr class="mt-5 mb-4 border-secondary-subtle" />
                      <div class="d-flex gap-4 justify-content-center">
                        <Link
                          to="/login"
                          class="link-secondary text-decoration-none"
                        >
                          Log In
                        </Link>
                        <Link
                          to="/register"
                          class="link-secondary text-decoration-none"
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

export default ResetPassword;
