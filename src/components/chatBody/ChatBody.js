import React, { useContext, useEffect, useState } from "react";
import { ContactsContext } from "../../context/contactsContext";
import { useParams } from "react-router-dom";

import UserAvatar from "../userAvatar/UserAvatar";
import Message from "../message/Message";
import Input from "../input/Input";

import "./chatBody.scss";

const ChatBody = () => {
  const [contact, setContact] = useState({});
  const [currentChatMessages, setCurrentChatMessages] = useState([]);
  const { contacts, messages } = useContext(ContactsContext);
  const { id } = useParams();

  useEffect(() => {
    setContact(contacts.find((contact) => contact.id === +id) || {});
    const curMessages = messages.filter((message) => message.contactID === +id);
    curMessages.sort((a, b) => new Date(a.time) - new Date(b.time));
    setCurrentChatMessages(curMessages);
  }, [id, messages, contacts]);

  return (
    <div className="chat">
      <div className="chat_header">
        <UserAvatar url={contact.avatar} online={contact.online} />
        <h1 className="chat_name">{contact.name}</h1>
      </div>
      <div className="chat_messages">
        {currentChatMessages.map((e, i) => (
          <Message
            message={e}
            contactAvatar={contact.avatar}
            online={null}
            key={i}
          />
        ))}
      </div>
      <div className="chat_input">
        <Input />
      </div>
    </div>
  );
};

export default ChatBody;
