import React, { useContext, useEffect, useState } from "react";

import UserAvatar from "../userAvatar/UserAvatar";
import SearchPanel from "../searchPanel/SearchPanel";
import ChatList from "../chatList/chatList";
import { ContactsContext } from "../../context/contactsContext";

import mainUserAvatar from "../../resources/img/usersAvatars/mainUserAvatar.jpg";

import "./sidebar.scss";

const Sidebar = () => {
  const [searchedContacts, setSearchedContacts] = useState([]);
  const [searchedMessages, setSearchedMessages] = useState([]);
  //todo: add search by messages
  const [search, setSearch] = useState("");
  const { contacts, messages } = useContext(ContactsContext);

  useEffect(() => {
    setSearchedContacts(contacts);
  }, []);

  useEffect(() => {
    setSearchedContacts(
      contacts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, contacts]);

  return (
    <aside className="sidebar">
      <div className="sidebar_header">
        <UserAvatar url={mainUserAvatar} online="true" />
        <SearchPanel value={search} setValue={setSearch} />
      </div>
      <div className="sidebar_chats">
        <h1 className="sidebar_chats-title">Chats</h1>
        <ChatList contacts={searchedContacts} messages={messages} />
      </div>
    </aside>
  );
};

export default Sidebar;
