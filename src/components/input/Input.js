import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ContactsContext } from "../../context/contactsContext";

import send from "../../resources/img/send.svg";
import "./input.scss";

const Input = () => {
  const [value, setValue] = useState("");
  const { addMessage } = useContext(ContactsContext);
  const params = useParams();

  const createMessage = (text, fromContact = false) => {
    return {
      id: new Date(),
      contactID: +params.id,
      text,
      time: new Date(),
      fromContact,
    };
  };

  function handleKeypress(e) {
    if (e.key === "Enter") {
      addMessage(createMessage(value));
      getNewMessage();
      setValue("");
    }
  }

  function handleClick() {
    addMessage(createMessage(value));
    getNewMessage();
    setValue("");
  }

  function getNewMessage() {
    axios
      .get("https://api.chucknorris.io/jokes/random")
      .then((res) => res.data)
      .then((data) => {
        setTimeout(() => {
          addMessage(createMessage(data.value, true));
        }, 10000);
      });
  }

  return (
    <>
      <input
        type="text"
        placeholder="Type your message"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleKeypress}
      />
      <button className="input-btn" onClick={handleClick}>
        <img src={send} alt="send" />
      </button>
    </>
  );
};

export default Input;
