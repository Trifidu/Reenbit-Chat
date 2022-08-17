import React from "react";
import axios from "axios";

import UserAvatar from "../userAvatar/UserAvatar";
import SearchPanel from "../searchPanel/SearchPanel";
import ChatList from "../chatList/chatList";

import mainUserAvatar from "../../resources/img/usersAvatars/mainUserAvatar.jpg";

import "./sidebar.scss";

class Sidebar extends React.Component {
  state = {
    contacts: [],
    term: "",
  };

  componentDidMount() {
    axios.get(`data.json`).then((res) => {
      const contacts = res.data;
      this.setState({ contacts });
    });
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  render() {
    const { contacts, term } = this.state;
    const visibleContacts = this.searchEmp(contacts, term);
    return (
      <aside className="sidebar">
        <div className="sidebar_header">
          <UserAvatar url={mainUserAvatar} online="true" />
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
        </div>
        <div className="sidebar_chats">
          <h1 className="sidebar_chats-title">Chats</h1>
          <ChatList contacts={visibleContacts} />
        </div>
      </aside>
    );
  }
}

export default Sidebar;
