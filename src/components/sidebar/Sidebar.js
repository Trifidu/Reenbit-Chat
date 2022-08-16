import React from "react";
import axios from "axios";

import UserAvatar from "../userAvatar/UserAvatar";
import SearchPanel from "../searchPanel/SearchPanel";
import ChatElement from "../chatElement/chatElement";

import mainUserAvatar from "../../resources/img/usersAvatars/mainUserAvatar.jpg";
import userAvatar1 from "../../resources/img/usersAvatars/userAvatar_1.jpg";
import userAvatar2 from "../../resources/img/usersAvatars/userAvatar_2.jpg";
import userAvatar3 from "../../resources/img/usersAvatars/userAvatar_3.jpg";
import userAvatar4 from "../../resources/img/usersAvatars/userAvatar_4.jpg";

import "./sidebar.scss";
import { render } from "@testing-library/react";

class Sidebar extends React.Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    axios.get(`test.json`).then((res) => {
      const contacts = res.data;
      this.setState({ contacts });
    });
  }

  render() {
    return (
      <aside className="sidebar">
        <div className="sidebar_header">
          <UserAvatar url={mainUserAvatar} read="true" />
          <SearchPanel />
        </div>
        <div className="sidebar_chats">
          <h1 className="sidebar_chats-title">Chats</h1>
          {this.state.contacts.map((user, id) => (
            <ChatElement key={id} user={user} />
          ))}
        </div>
      </aside>
    );
  }
}

export default Sidebar;
