import React, { useContext, useState } from "react";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Outlet, useLocation } from "react-router-dom";
import CalculateIcon from "@mui/icons-material/Calculate";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import ArticleIcon from "@mui/icons-material/Article";
import ReportIcon from "@mui/icons-material/Assessment"; // Use AssessmentIcon for Reports Admin
import FeedbackIcon from "@mui/icons-material/Feedback"; // FeedbackIcon for Feedback
import SupportAgentIcon from "@mui/icons-material/SupportAgent"; // SupportAgentIcon for Support
import DashboardIcon from "@mui/icons-material/Dashboard"; // DashboardIcon for Dashboard
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useUser } from "../../Context/UserContext"; // Adjust import based on your actual file path

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { user } = useUser();
  const [show, setShow] = useState(false);
  const [role, setRole] = useState(localStorage.getItem("userRole")); // Retrieve role from local storage
  const location = useLocation();

  const isActive = (path) => location.pathname.startsWith(path);

  const userLinks = (
    <>
      <Link
        to="/dashboard"
        className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
      >
        <CalculateIcon className="nav-link-logo" />
        <span className="nav-link-name">Calorie Calculator</span>
      </Link>
      <Link
        to="/meal-plan"
        className={`nav-link ${isActive("/meal-plan") ? "active" : ""}`}
      >
        <CalendarMonthIcon className="nav-link-logo" />
        <span className="nav-link-name">Meal plan</span>
      </Link>
      <Link
        to="/meal-diary"
        className={`nav-link ${isActive("/meal-diary") ? "active" : ""}`}
      >
        <AutoStoriesIcon className="nav-link-logo" />
        <span className="nav-link-name">Meal diary</span>
      </Link>
      <Link
        to="/profile"
        className={`nav-link ${isActive("/profile") ? "active" : ""}`}
      >
        <Person2Icon className="nav-link-logo" />
        <span className="nav-link-name">Profile</span>
      </Link>
      <Link
        to="/settings"
        className={`nav-link ${isActive("/settings") ? "active" : ""}`}
      >
        <SettingsIcon className="nav-link-logo" />
        <span className="nav-link-name">Setting</span>
      </Link>
      <Link
        to="/subscription"
        className={`nav-link ${isActive("/subscription") ? "active" : ""}`}
      >
        <CreditCardIcon className="nav-link-logo" />
        <span className="nav-link-name">Subscription</span>
      </Link>
      <Link
        to="/admin-chat"
        className={`nav-link ${isActive("/admin-chat") ? "active" : ""}`}
      >
        <CreditCardIcon className="nav-link-logo" />
        <span className="nav-link-name">Chat Admin</span>
      </Link>
    </>
  );

  const adminLinks = (
    <>
      <Link
        to="/admin-dashboard"
        className={`nav-link ${isActive("/admin-dashboard") ? "active" : ""}`}
      >
        <DashboardIcon className="nav-link-logo" />
        <span className="nav-link-name">Dashboard</span>
      </Link>
      <Link
        to="/user-management"
        className={`nav-link ${isActive("/user-management") ? "active" : ""}`}
      >
        <Person2Icon className="nav-link-logo" />
        <span className="nav-link-name">User Management</span>
      </Link>
      <Link
        to="/meal-plan-management"
        className={`nav-link ${
          isActive("/meal-plan-management") ? "active" : ""
        }`}
      >
        <AutoStoriesIcon className="nav-link-logo" />
        <span className="nav-link-name">Meal Plan Admin</span>
      </Link>
      <Link
        to="/content-management"
        className={`nav-link ${
          isActive("/content-management") ? "active" : ""
        }`}
      >
        <ArticleIcon className="nav-link-logo" />
        <span className="nav-link-name">Content Admin</span>
      </Link>
      <Link
        to="/reports"
        className={`nav-link ${isActive("/reports") ? "active" : ""}`}
      >
        <ReportIcon className="nav-link-logo" />
        <span className="nav-link-name">Reports Admin</span>
      </Link>
      <Link
        to="/feedback"
        className={`nav-link ${isActive("/feedback") ? "active" : ""}`}
      >
        <FeedbackIcon className="nav-link-logo" />
        <span className="nav-link-name">Feedback</span>
      </Link>
      <Link
        to="/support"
        className={`nav-link ${isActive("/support") ? "active" : ""}`}
      >
        <SupportAgentIcon className="nav-link-logo" />
        <span className="nav-link-name">Support</span>
      </Link>
      <Link
        to="/settings"
        className={`nav-link ${isActive("/settings") ? "active" : ""}`}
      >
        <SettingsIcon className="nav-link-logo" />
        <span className="nav-link-name">Settings</span>
      </Link>
    </>
  );

  return (
    <main className={show ? `space-toggle` : null}>
      <header className={`sidebar-header ${show ? `space-toggle` : null}`}>
        <div className="sidebar-toggle" onClick={() => setShow(!show)}>
          <MenuIcon />
        </div>
        <div className="items">
          <div className="item">
            <h5>
              Welcome <span>Martin{user?.firstName}</span>
            </h5>
          </div>
          <div className="item">
            <DarkModeIcon
              className="icon notShowOnMobile"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
        </div>
      </header>

      <aside className={`sidebar ${show ? `show` : null}`}>
        <nav className="nav">
          <div>
            <Link to="/dashboard" className="nav-logo">
              <LocalFloristIcon className="nav-logo-icon" />
              <span className="nav-logo-name">Palmfit</span>
            </Link>

            <div className="nav-list">
              {role === "admin" ? adminLinks : userLinks}
            </div>
          </div>

          <Link to="/logout" className="nav-link">
            <LogoutIcon className="nav-link-logo" />
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>
      <div className="content">
        <Outlet />
      </div>
    </main>
  );
};

export default Sidebar;
