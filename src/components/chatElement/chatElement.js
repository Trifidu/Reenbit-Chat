import React, { useEffect, useState, useContext } from "react";
import UserAvatar from "../userAvatar/UserAvatar";
import { NavLink } from "react-router-dom";
import { ContactsContext } from "../../context/contactsContext";

import "./chatElement.scss";

const ChatElement = ({ contact, contactMessages }) => {
  const timeOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const [lastMessage, setLastMessage] = useState("");
  const [lastMessageTime, setLastMessageTime] = useState("");
  const [unreadMessage, setUnreadMessage] = useState("");

  const { checkChat, checkUnreadMessage } = useContext(ContactsContext);

  useEffect(() => {
    const sortMessages = [...contactMessages];
    sortMessages.sort((a, b) => new Date(b.time) - new Date(a.time));
    if (sortMessages.length) {
      setLastMessage(sortMessages[0].text);
      const date = new Date(sortMessages[0].time);
      setLastMessageTime(date.toLocaleString("en-US", timeOptions));
    }
    // eslint-disable-next-line
  }, [contactMessages]);

  useEffect(() => {
    checkChat(contact, contactMessages, setUnreadMessage);
    checkUnreadMessage(contactMessages, setUnreadMessage);
    // eslint-disable-next-line
  }, [contactMessages]);

  return (
    <NavLink
      to={`/chat/${contact.id}`}
      className={({ isActive }) =>
        isActive ? "contact_link-active" : "contact_link"
      }
    >
      <div className="chatElement">
        <div className="chatElement_info">
          <UserAvatar url={contact.avatar} online={contact.online} />
          <div className="chatElement_details">
            <div className="chatElement_details-name">{contact.name}</div>
            <div className="chatElement_details-text">
              {lastMessage.length > 60
                ? `${lastMessage.slice(0, 60)} ...`
                : lastMessage}
            </div>
          </div>
          <div>
            <div className="chatElement_details-time">{lastMessageTime}</div>
            <div
              className={
                unreadMessage > 0 ? "chatElement_details-newmsg" : null
              }
            >
              {unreadMessage > 0 ? unreadMessage : null}
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ChatElement;
