import React from "react";
import "./SearchBar.scss";

const SearchResult = ({ result, onResultClick }) => {
  return (
    <div className="search-result" onClick={() => onResultClick(result)}>
      {result.name}
    </div>
  );
};

export default SearchResult;
