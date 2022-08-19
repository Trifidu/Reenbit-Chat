import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { ContactsContext } from "../context/contactsContext";

import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chatBody/ChatBody";
import BottomBar from "../components/bottomBar/BottomBar";

const ChatPage = () => {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //todo: transfer to Services
    axios.get(`contacts.json`).then((res) => {
      const contacts = res.data;
      setContacts(contacts);
    });

    axios.get(`messages.json`).then((res) => {
      const messages = res.data;
      setMessages(messages);
    });
  }, []);

  const addMessage = (message) => {
    setMessages((messages) => [...messages, message]);
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
