import React from "react";

import UserAvatar from "../userAvatar/UserAvatar";
import SearchPanel from "../searchPanel/SearchPanel";

import "./sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar_header">
        <UserAvatar url="https://placeimg.com/64/64/any" />
        <SearchPanel />
      </div>
    </aside>
  );
};

export default Sidebar;
