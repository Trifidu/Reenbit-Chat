import React from "react";
import ChatElement from "../chatElement/chatElement";

const ChatList = ({ contacts, messages }) => {
  const sortedContacts = [...contacts]
    // .sort((a, b) =>
    //   new Date(a.lastMessageTime) < new Date(b.lastMessageTime) ? 1 : -1
    // )
    .map((contact, id) => {
      const userMessages = messages.filter(
        (message) => message.contactID === contact.id
      );
      return <ChatElement key={id} contact={contact} messages={userMessages} />;
    });
  // console.log(elements)
  // .sort((a, b) =>
  //   a.props.messages.map((i) => new Date(i.time)) <
  //   b.props.messages.map((i) => new Date(i.time))
  //     ? 1
  //     : -1
  // );
  console.log(sortedContacts);

  return <>{sortedContacts}</>;
};

export default ChatList;
