import React, { useContext } from "react";
import "./Sidebar.css";
import { DarkModeContext } from "../../Context/darkModeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import profilePicture from "../../Assets/profilePicAvatar.png";

const DropDownProfile = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="flex flex-col dropDownProfile non-clickable">
      <ul className="flex flex-col gap-4">
        <li>
          <div className="menu-items profile-picture">
            <img
              src={profilePicture}
              alt="Profile"
              className="img-thumbnail rounded-circle profile-picture-img clickable"
            />
          </div>
        </li>
        <div>
          <li className="clickable"> Privacy & Terms</li>
        </div>

        <div>
          <li className="clickable">Help Center</li>
        </div>
        <li>
          <div className="item menu-item clickable">
            <DarkModeIcon
              className="icon notShowOnMobile"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropDownProfile;
