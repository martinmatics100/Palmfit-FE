import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { useUser } from "../../../Context/UserContext";
import Toast from "../../../Toast/Toast";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const { loginUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setButtonLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      setButtonLoading(false);
      setToast({
        showToast: true,
        message: "Please enter both email and password",
        type: "warning",
      });
      return;
    }

    const backendData = [
      {
        name: "Admin",
        email: "admin@gmail.com",
        password: "85465955",
        role: "admin",
        id: "01",
        status: "online",
      },
      {
        name: "User",
        email: "user@gmail.com",
        password: "85465955",
        role: "user",
        id: "02",
        status: "offline",
      },
    ];

    const user = backendData.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setTimeout(() => {
        setToast({
          showToast: true,
          message: "Login is successful! welcome to palmfit",
          type: "success",
        });

        setTimeout(() => {
          setButtonLoading(false);
          localStorage.setItem("userRole", user.role);
          localStorage.setItem("userName", user.name);
          if (user.role === "admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/dashboard");
          }
        }, 5000);
      }, 3000);
    } else {
      setTimeout(() => {
        setToast({
          showToast: true,
          message: "Invalid email or password",
          type: "error",
        });
        setButtonLoading(false);
      }, 3000);
    }
  };

  const [toast, setToast] = useState({
    showToast: false,
    message: "",
    type: "",
  });

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div className="container-fluid login">
          <div className="row signup-container">
            <div className="col-md-6 signin-image"></div>
            <div className="col-md-6 p-5 left-login">
              {toast.showToast ? (
                <Toast
                  setToast={setToast}
                  message={toast.message}
                  type={toast.type}
                />
              ) : (
                ""
              )}
              <h3 className="text-center mb-4">Login into your account</h3>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group position-relative">
                    <span className="input-group-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-lock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a4 4 0 0 0-4 4v2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1V5a4 4 0 0 0-4-4zM4 5V4a4 4 0 1 1 8 0v1H4zm4 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                      </svg>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />

                    <button
                      type="button"
                      className="btn btn-outline-secondary toggle-button"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={buttonLoading}
                  className="btn w-100"
                >
                  {buttonLoading ? "please wait..." : "Log In"}
                </button>

                <div className="d-flex justify-content-between mt-2 login-alt">
                  <Link to="/reset-password">Having trouble logging in?</Link>
                  <span>
                    New user? <Link to="/register">Register</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
