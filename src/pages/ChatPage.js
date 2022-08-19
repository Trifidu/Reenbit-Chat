import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ContactsContext } from "../context/contactsContext";

import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chatBody/ChatBody";
import BottomBar from "../components/bottomBar/BottomBar";
import getData from "../services/ChatService";

const ChatPage = () => {
  const [contacts, setContacts] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getData(`/contacts.json`, setContacts);
    getData(`/messages.json`, setMessages);
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
