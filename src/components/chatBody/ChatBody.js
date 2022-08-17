import React from "react";

import UserAvatar from "../userAvatar/UserAvatar";

import "./chatBody.scss";

const ChatBody = () => {
  return (
    <div className="chat">
      <div className="chat_header">
        <UserAvatar url="{user.avatar}" />
        <h1 className="chat_name">user.name</h1>
      </div>
      <div className="chat_messages">messages</div>
      <div className="chat_input">input message</div>
    </div>
  );
};

export default ChatBody;
