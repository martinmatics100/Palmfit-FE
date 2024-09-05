import React, { useState } from "react";
import "./SearchBar.scss";
import SearchResult from "./SearchResult";
import FoodModal from "./FoodModal";

const SearchResultList = ({ results }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  // Handle when a food is clicked
  const handleResultClick = (food) => {
    setSelectedFood(food); // Set the clicked food
    setShowModal(true); // Open the modal
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFood(null); // Clear selected food when closing
  };
  return (
    <div className="result-list">
      {results.map((result, id) => {
        return (
          <SearchResult
            key={id}
            result={result}
            onResultClick={handleResultClick}
          />
        );
      })}

      {/* Render Modal and pass selected food */}
      {selectedFood && (
        <FoodModal
          show={showModal}
          onClose={handleCloseModal}
          selectedFood={selectedFood}
        />
      )}
    </div>
  );
};

export default SearchResultList;
