import React from "react";
import "./SearchBar.scss";
import SearchResult from "./SearchResult";

const SearchResultList = ({ results }) => {
  return (
    <div className="result-list">
      {results.map((result, id) => {
        // return <div key={id}>{result.name}</div>;
        return <SearchResult result={result} key={id} />;
      })}
    </div>
  );
};

export default SearchResultList;
