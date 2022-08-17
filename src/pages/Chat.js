import React from "react";

import Sidebar from "../components/sidebar/Sidebar";
import ChatBody from "../components/chatBody/ChatBody";
import BottomBar from "../components/bottomBar/BottomBar";

class Chat extends React.Component {
  render() {
    return (
      <>
        <Sidebar />
        <ChatBody />
        <BottomBar />
      </>
    );
  }
}

export default Chat;
