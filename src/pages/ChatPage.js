import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ContactsContext } from "../context/contactsContext";
// import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chatBody/ChatBody";
import BottomBar from "../components/bottomBar/BottomBar";
import getData from "../services/ChatService";

const ChatPage = () => {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const pageId = location.pathname.slice(6);

  useEffect(() => {
    // getData(`/contacts.json`, setContacts);
    // getData(`/messages.json`, setMessages);

    if (!localStorage.localContacts || !localStorage.localMessages.length) {
      getData(`/contacts.json`, setContacts, "lc");
      getData(`/messages.json`, setMessages, "lm");
    } else {
      const localContacts = JSON.parse(localStorage.localContacts);
      const localMessages = JSON.parse(localStorage.localMessages);
      setContacts(localContacts);
      setMessages(localMessages);
    }
  }, []);

  useEffect(() => {
    localStorage.localMessages = JSON.stringify(messages);
  }, [messages]);

  const addMessage = (message) => {
    setMessages((messages) => [...messages, message]);

    // axios
    //   .post(`/messages.json`, {
    //     id: message.id,
    //     contactID: message.contactID,
    //     text: message.text,
    //     time: message.time,
    //     fromContact: message.fromContact,
    //   })
    //   .then(function (response) {
    //     setMessages((messages) => [...messages, message]);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // axios
    //   .put(`/contacts.json`, {
    //     id: message.contactID,
    //     lastMessage: message.text,
    //     lastMessageTime: message.time,
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const checkChat = (contact, contactMessages, setUnreadMessage) => {
    // eslint-disable-next-line
    if (pageId == contact.id) {
      contactMessages.map((message) => (message.read = true));
      const unreadMessages = contactMessages.filter(
        (message) => message.read === false
      );
      setUnreadMessage(unreadMessages.length);
      localStorage.localMessages = JSON.stringify(messages);

      console.log("save local");
    }
  };

  const checkUnreadMessage = (contactMessages, setUnreadMessage) => {
    const unreadMessages = contactMessages.filter(
      (message) => message.read === false
    );
    setUnreadMessage(unreadMessages.length);
    console.log("checkUnreadMessage");
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        messages,
        addMessage,
        checkUnreadMessage,
        checkChat,
      }}
    >
      <Sidebar />
      <Routes>
        <Route path=":id" element={<ChatBody />} />
      </Routes>
      <BottomBar />
    </ContactsContext.Provider>
  );
};

export default ChatPage;
