// ChatComponent.js
import React, { useState } from "react";
import { useChat } from "../../Context/ChatContext"; // Import the context
import "./ChatComponent.scss"; // Ensure you have the styles imported

const ChatComponent = ({ senderType }) => {
  const { messages, sendMessage } = useChat(); // Use the context
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    sendMessage(newMessage, senderType);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>
              <span className="chat-timestamp">
                {new Date(msg.timestamp).toLocaleTimeString()}
              </span>
              <span className="chat-content">{msg.content}</span>
            </div>
          ))
        ) : (
          <div className="text-center">No messages yet.</div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
