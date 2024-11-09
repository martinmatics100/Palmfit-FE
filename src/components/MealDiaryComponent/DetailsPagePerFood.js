import React, { useState } from "react";

import "../../components/SearchBar/SearchBar.scss";
import SearchResultList from "../SearchBar/SearchResultList";
import SearchBar from "../SearchBar/SearchBar";

const DetailsPagePerFood = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>Meal Diary Details Page</h1>

      {/* Reuse the SearchBar and SearchResultList components */}
      <div className="search-section">
        <SearchBar setResults={setResults} />
        <SearchResultList results={results} />
      </div>

      {/* Details of the specific meal diary can go here */}
      {/* <div className="meal-details">
        <p>This section can display the details of the selected meal diary.</p>
      </div> */}
    </div>
  );
};

export default DetailsPagePerFood;
