import React from "react";

import "./searchPanel.scss";

class SearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value.toLowerCase();
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <>
        <input
          type="text"
          className="sidebar_search"
          placeholder="Search or start new chat"
          value={this.state.term}
          onChange={this.onUpdateSearch}
        />
      </>
    );
  }
}

export default SearchPanel;
