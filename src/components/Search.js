import React from "react";

function Search({updateSearchText}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={updateSearchText}
      />
    </div>
  );
}

export default Search;
