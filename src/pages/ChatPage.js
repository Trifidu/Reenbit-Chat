import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ContactsContext } from "../context/contactsContext";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chatBody/ChatBody";
import BottomBar from "../components/bottomBar/BottomBar";
import getData from "../services/ChatService";

const ChatPage = () => {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

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

    axios
      .post(`/messages.json`, {
        id: message.id,
        contactID: message.contactID,
        text: message.text,
        time: message.time,
        fromContact: message.fromContact,
      })
      .then(function (response) {
        setMessages((messages) => [...messages, message]);
      })
      .catch(function (error) {
        console.log(error);
      });

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

  return (
    <ContactsContext.Provider value={{ contacts, messages, addMessage }}>
      <Sidebar />
      <Routes>
        <Route path=":id" element={<ChatBody />} />
      </Routes>
      <BottomBar />
    </ContactsContext.Provider>
  );
};

export default ChatPage;
