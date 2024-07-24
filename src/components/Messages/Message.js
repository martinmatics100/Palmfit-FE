import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Message.scss";

const Message = ({ type, message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Hide message after 5 seconds

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`message ${type} ${visible ? "visible" : "hidden"}`}>
      {message}
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Message;
