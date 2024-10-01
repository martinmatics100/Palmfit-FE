import React from "react";
import MealDiaryComponent from "../../../components/MealDiaryComponent/MealDiaryComponent";
import { Route, Routes } from "react-router-dom";
import DetailsPagePerMealDiary from "../../../components/MealDiaryComponent/DetailsPagePerMealDiary";
import "../../../components/SearchBar/SearchBar.scss";

const Mealdiary = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MealDiaryComponent />} />
        <Route path="meal/:id" element={<DetailsPagePerMealDiary />} />
      </Routes>
    </div>
  );
};

export default Mealdiary;
