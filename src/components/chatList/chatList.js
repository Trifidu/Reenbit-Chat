import React from "react";
import ChatElement from "../chatElement/chatElement";

const ChatList = ({ contacts }) => {
  const elements = contacts.map((user, id) => {
    return <ChatElement key={id} user={user} />;
  });

  return <>{elements}</>;
};

export default ChatList;
