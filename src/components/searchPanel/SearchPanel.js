import React, { useState } from "react";

import "./searchPanel.scss";

const SearchPanel = () => {
  //   const [search, setSearch] = useState("");

  //   const handleChange = (event) => {
  //     setSearch(event.target.value);
  //   };

  return (
    <div>
      <input
        type="text"
        placeholder="Search or start new chat"
        className="sidebar_search"
        // value={search}
        // onChange={handleChange}
      />
    </div>
  );
};

export default SearchPanel;
