import React from "react";
import axios from "axios";

import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chatBody/ChatBody";
import BottomBar from "../components/bottomBar/BottomBar";

class Chat extends React.Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    axios.get(`data.json`).then((res) => {
      const contacts = res.data;
      this.setState({ contacts });
    });
  }

  render() {
    return (
      <>
        <Sidebar contacts={this.state.contacts} />
        <ChatBody />
        <BottomBar />
      </>
    );
  }
}

export default Chat;
