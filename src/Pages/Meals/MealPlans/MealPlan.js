import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import MealPlanPage from "../../../components/MealPlanComponent/MealPlanPage";
import DetailsPerMealPlan from "../../../components/MealPlanComponent/DetailsPerMealPlan";

const MealPlan = () => {
  return (
    <div className="loader-container">
      <Routes>
        <Route path="/" element={<MealPlanPage />} />
        <Route path="meal/:id" element={<DetailsPerMealPlan />} />
      </Routes>
    </div>
  );
};

export default MealPlan;
