import React from "react";
import ChatElement from "../chatElement/chatElement";

const ChatList = ({ contacts, messages }) => {
  const sortedContacts = [...contacts]
    .map((contact, id) => {
      const userMessages = messages
        .filter((message) => message.contactID === contact.id)
        .sort((a, b) => new Date(a.time) - new Date(b.time));
      return (
        <ChatElement
          key={id}
          contact={contact}
          contactMessages={userMessages}
        />
      );
    })
    .sort((a, b) =>
      Date.parse(
        a.props.contactMessages[a.props.contactMessages.length - 1].time
      ) <
      Date.parse(
        b.props.contactMessages[b.props.contactMessages.length - 1].time
      )
        ? 1
        : -1
    );

  return <>{sortedContacts}</>;
};

export default ChatList;
