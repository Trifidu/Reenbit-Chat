import React from "react";
import ChatElement from "../chatElement/chatElement";

const ChatList = ({ contacts, messages }) => {
  const elements = contacts.map((contact, id) => {
    const userMessages = messages.filter(
      (message) => message.contactID === contact.id
    );
    return <ChatElement key={id} contact={contact} messages={userMessages} />;
  });

  return <>{elements}</>;
};

export default ChatList;
