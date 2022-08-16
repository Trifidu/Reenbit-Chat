import React from "react";

import "./searchPanel.scss";

const SearchPanel = ({ value, setValue }) => {
  // const onChangeValue = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <>
      <input
        type="text"
        placeholder="Search or start new chat"
        className="sidebar_search"
        // value={value}
        // onChange={onChangeValue}
      />
    </>
  );
};

export default SearchPanel;
