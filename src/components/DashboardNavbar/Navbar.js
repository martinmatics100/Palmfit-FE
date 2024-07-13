import React, { useContext, useState } from "react";
import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatIcon from "@mui/icons-material/Chat";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import FormatListNumberedRtlIcon from "@mui/icons-material/FormatListNumberedRtl";
import defaultProfilePic from "../../Assets/profilePicAvatar.svg";
import { DarkModeContext } from "../../Context/darkModeContext";
import { type } from "@testing-library/user-event/dist/type";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [profilePic, setProfilePic] = useState(defaultProfilePic);

  // useEffect(() => {
  //   // Example: Fetch profile picture URL from backend
  //   axios
  //     .get("/api/profile/picture")
  //     .then((response) => {
  //       setProfilePic(response.data.profilePicUrl); // Assuming backend returns profilePicUrl
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching profile picture:", error);
  //       // Handle error gracefully or set a default profile picture
  //       setProfilePic(defaultProfilePic);
  //     });
  // }, []); // Empty dependency array to run effect only once

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchIcon className="search-icon" />
        </div>

        <div className="items">
          <div className="item">
            <LanguageIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <FormatListNumberedRtlIcon className="icon" />
          </div>
          <div className="item">
            <img src={profilePic} alt="img" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
