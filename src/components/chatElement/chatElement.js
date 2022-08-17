import React from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import { Link } from "react-router-dom";

import "./chatElement.scss";

const ChatElement = ({ user }) => {
  const timeOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  return (
    <div className="chatElement">
      <div className="chatElement_info">
        <UserAvatar url={user.avatar} online={user.online} />
        <div className="chatElement_details">
          <div className="chatElement_details-name">{user.name}</div>
          <div className="chatElement_details-text">{user.lastMessage}</div>
        </div>
        <div className="chatElement_details-time">
          {new Date(user.lastMessageTime).toLocaleString("en-US", timeOptions)}
        </div>
      </div>
    </div>
  );
};

export default ChatElement;
