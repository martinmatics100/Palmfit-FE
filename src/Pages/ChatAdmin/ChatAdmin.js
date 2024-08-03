// ChatAdmin.js
import React from "react";
import ChatComponent from "../../components/Chat/ChatComponent";
import { ChatProvider } from "../../Context/ChatContext"; // Import the provider

const ChatAdmin = () => {
  return (
    <ChatProvider>
      <ChatComponent senderType="user" /> {/* User sends messages */}
    </ChatProvider>
  );
};

export default ChatAdmin;
