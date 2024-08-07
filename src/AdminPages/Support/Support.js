// Support.js
import React from "react";
import ChatComponent from "../../components/Chat/ChatComponent";
import { ChatProvider } from "../../Context/ChatContext"; // Import the provider

const Support = () => {
  return (
    <ChatProvider>
      <ChatComponent senderType="admin" /> {/* Admin sends messages */}
    </ChatProvider>
  );
};

export default Support;
