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
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DarkModeContext } from "../../Context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [show, setShow] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <main className={show ? `space-toggle` : null}>
      <header className={`sidebar-header ${show ? `space-toggle` : null}`}>
        <div className="sidebar-toggle" onClick={() => setShow(!show)}>
          <MenuIcon />
        </div>
        <div className="item">
          <DarkModeIcon
            className="icon notShowOnMobile"
            onClick={() => dispatch({ type: "TOGGLE" })}
          />
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
                className={`nav-link ${
                  isActive("/meal-diary") ? "active" : ""
                }`}
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
                className={`nav-link ${
                  isActive("/subscription") ? "active" : ""
                }`}
              >
                <CreditCardIcon className="nav-link-logo" />
                <span className="nav-link-name">Subscription</span>
              </Link>
            </div>
          </div>

          <Link to="/dashboard" className="nav-link">
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
