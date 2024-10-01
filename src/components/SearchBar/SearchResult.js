import React from "react";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ result }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/meal-diary/meal/${result.id}`);
  };

  return (
    <div
      className="search-result"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {result.name}
    </div>
  );
};

export default SearchResult;
