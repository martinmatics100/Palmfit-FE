import React, { useState } from "react";
import { styles } from "./Styles";
import "./Index.css";
import ChatIcon from "@mui/icons-material/Chat";

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={props.style}>
      <div
        className="transition-3"
        style={{
          ...styles.avatarHello,
          ...{ opacity: hovered ? "1" : "0" },
        }}
      >
        Hey chat with admin
      </div>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="transition-3"
        onClick={() => props.onClick && props.onClick()}
        style={{
          ...styles.chatWithMeButton,
          ...{ border: hovered ? "1px solid #1a8d8d" : "4px solid #1a8d8d" },
        }}
      >
        <ChatIcon
          style={{
            fontSize: "48px",
          }}
        />
      </div>
    </div>
  );
};

export default Avatar;
