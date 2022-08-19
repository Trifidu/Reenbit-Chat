import React from "react";
import UserAvatar from "../userAvatar/UserAvatar";

import "./message.scss";

const Message = ({ message, contactAvatar, online }) => {
  const timeOptions = {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const time = new Date(message.time).toLocaleString("en-US", timeOptions);

  return (
    <div
      className={
        !message.fromContact ? "message message_send" : "message message_get"
      }
    >
      <div className="message_wrapper">
        {!message.fromContact || (
          <UserAvatar url={contactAvatar} online={online} />
        )}
        <div className="message_content">
          <div className="message_text">{message.text}</div>
          <div className="message_time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
