import React from "react";

const SearchPanel = (props) => {
  return <input className={`uk-input search-panel ${props.className}`} placeholder="Type something here"/>;
};

export default SearchPanel;
