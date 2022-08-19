import React from "react";

import "./searchPanel.scss";

const SearchPanel = ({ value, setValue }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className="sidebar_search"
        placeholder="Search or start new chat"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default SearchPanel;
