import React from "react";
import "./SearchBar.scss";

const SearchResult = ({ result }) => {
  return <div className="search-result">{result.name}</div>;
};

export default SearchResult;
