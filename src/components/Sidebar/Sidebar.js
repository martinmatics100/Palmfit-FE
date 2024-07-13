import React, { useContext } from "react";
import "./Sidebar.scss";
import Logo from "../../Assets/Logo.svg";
import CalculateIcon from "@mui/icons-material/Calculate";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { type } from "@testing-library/user-event/dist/type";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/dashboard">
          <span className="logo">
            <img src={Logo} alt="logo" />
          </span>
        </Link>
      </div>

      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <CalculateIcon className="icon" />
            <Link to="/dashboard">
              <span>Calorie Calculator</span>
            </Link>
          </li>
          <p className="title">Meals</p>
          <li>
            <CalendarMonthIcon className="icon" />
            <Link to="/meal-plans">
              <span>Meal plans</span>
            </Link>
          </li>
          <li>
            <AutoStoriesIcon className="icon" />
            <Link to="/meal-diary">
              <span>Meal diary</span>
            </Link>
          </li>
          <p className="title">User</p>
          <li>
            <Person2Icon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">Payments</p>
          <li>
            <CreditCardIcon className="icon" />
            <span>Subscription</span>
          </li>
          <p className="title">Other</p>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color-option"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="color-option"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
