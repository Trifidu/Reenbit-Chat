import React, { useEffect, useState } from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import { Link } from "react-router-dom";

import "./chatElement.scss";

const ChatElement = ({ contact, messages }) => {
  const timeOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const [lastMessage, setLastMessage] = useState("");
  const [lastMessageTime, setLastMessageTime] = useState("");

  useEffect(() => {
    const sortMessages = [...messages];
    sortMessages.sort((a, b) => new Date(b.time) - new Date(a.time));
    if (sortMessages.length) {
      setLastMessage(sortMessages[0].text);
      const date = new Date(sortMessages[0].time);
      setLastMessageTime(date.toLocaleString("en-US", timeOptions));
    }
    // eslint-disable-next-line
  }, [messages]);

  return (
    <Link
      to={`/chat/${contact.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="chatElement">
        <div className="chatElement_info">
          <UserAvatar url={contact.avatar} online={contact.online} />
          <div className="chatElement_details">
            <div className="chatElement_details-name">{contact.name}</div>
            <div className="chatElement_details-text">{lastMessage}</div>
          </div>
          <div className="chatElement_details-time">{lastMessageTime}</div>
        </div>
      </div>
    </Link>
  );
};

export default ChatElement;
