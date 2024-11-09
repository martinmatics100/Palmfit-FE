import React from "react";
import FoodInfoCenterComponent from "../../../components/MealDiaryComponent/FoodInfoCenterComponent";
import { Route, Routes } from "react-router-dom";
import DetailsPagePerFood from "../../../components/MealDiaryComponent/DetailsPagePerFood";
import "../../../components/SearchBar/SearchBar.scss";

const FoodInfoCenter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<FoodInfoCenterComponent />} />
        <Route path="meal/:id" element={<DetailsPagePerFood />} />
      </Routes>
    </div>
  );
};

export default FoodInfoCenter;
