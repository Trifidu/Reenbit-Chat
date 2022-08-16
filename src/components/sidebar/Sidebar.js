import React from "react";

import UserAvatar from "../userAvatar/UserAvatar";
import SearchPanel from "../searchPanel/SearchPanel";
import ChatElement from "../chatElement/chatElement";

import mainUserAvatar from "../../resources/img/usersAvatars/mainUserAvatar.jpg";
import userAvatar1 from "../../resources/img/usersAvatars/userAvatar_1.jpg";
import userAvatar2 from "../../resources/img/usersAvatars/userAvatar_2.jpg";
import userAvatar3 from "../../resources/img/usersAvatars/userAvatar_3.jpg";
import userAvatar4 from "../../resources/img/usersAvatars/userAvatar_4.jpg";

import "./sidebar.scss";

const Sidebar = () => {
  function randomDate(start, end, startHour, endHour) {
    let date = new Date(+start + Math.random() * (end - start));
    let hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    date.setHours(hour);
    return date;
  }

  const contacts = [
    {
      name: "Alice Freeman",
      image: userAvatar1,
      read: true,
      lastMessage: "You are the worst!",
      lastMessageTime: randomDate(Date.now() - 19999999999, Date.now(), 0, 23),
    },
    // new Date(2021, 10, 11, 5, 6, 0),
    {
      name: "Josefina",
      image: userAvatar2,
      read: true,
      lastMessage: "We are losing money! Quick!",
      lastMessageTime: randomDate(Date.now() - 19999999999, Date.now(), 0, 23),
    },
    {
      name: "Velazquez",
      image: userAvatar3,
      read: false,
      lastMessage:
        "Quickly come to the meeting room 1B, we have a big server issue",
      lastMessageTime: randomDate(Date.now() - 19999999999, Date.now(), 0, 23),
    },
    {
      name: "Barerra",
      image: userAvatar4,
      read: true,
      lastMessage: "Something that wasn't on the test screenshot",
      lastMessageTime: randomDate(Date.now() - 19999999999, Date.now(), 0, 23),
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar_header">
        <UserAvatar url={mainUserAvatar} read="true" />
        <SearchPanel />
      </div>
      <div className="sidebar_chats">
        <h1 className="sidebar_chats-title">Chats</h1>
        {contacts.map((user, id) => (
          <ChatElement key={id} user={user} />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
