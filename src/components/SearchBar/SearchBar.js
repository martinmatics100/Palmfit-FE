import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";
import { json } from "react-router-dom";
import { fetchFilteredUsers } from "../../api/UserServices";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = async (value) => {
    try {
      const results = await fetchFilteredUsers(value); // Call the service function
      console.log(results);
      setResults(results); // Update the results with the filtered users
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <div className="input-Wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Start typing..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
