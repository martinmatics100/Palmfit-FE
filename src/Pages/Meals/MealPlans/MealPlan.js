import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Navbar from "../../../components/DashboardNavbar/Navbar";
import "./MealPlan.scss";
import MealPlanItems from "../../../utils/MealPlanItems/MealPlanItems";
import WeightLossImage from "../../../Assets/mealplans/Weight Loss Meal Plan.jpg";
import MuscleGainImage from "../../../Assets/mealplans/Muscle Gain Meal Plan.jpg";
import KetoImage from "../../../Assets/mealplans/KetoImage.jpg";
import VeganImage from "../../../Assets/mealplans/VeganImage.jpg";
import PaleoImage from "../../../Assets/mealplans/PaleoImage.jpg";
import MediterraneanImage from "../../../Assets/mealplans/MediterraneanImage.jpg";
import LowCarbImage from "../../../Assets/mealplans/LowCarbImage.jpg";
import GlutenFreeImage from "../../../Assets/mealplans/GlutenFreeImage.jpg";
import DashDietImage from "../../../Assets/mealplans/DashDietImage.jpg";
import IntermittentFastingImage from "../../../Assets/mealplans/IntermittentFastingImage.jpg";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";

const MealPlan = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [mealPlans, setMealPlans] = useState([
    {
      id: 1,
      image: WeightLossImage,
      name: "Weight Loss Meal Plan",
      title: "Weekly plan",
    },
    {
      id: 2,
      image: MuscleGainImage,
      name: "Muscle Gain Meal Plan",
      title: "Weekly plan",
    },
    { id: 3, image: KetoImage, name: "Keto Meal Plan", title: "Weekly plan" },
    { id: 4, image: VeganImage, name: "Vegan Meal Plan", title: "Weekly plan" },
    { id: 5, image: PaleoImage, name: "Paleo Meal Plan", title: "Weekly plan" },
    {
      id: 6,
      image: MediterraneanImage,
      name: "Mediterranean Meal Plan",
      title: "Weekly plan",
    },
    {
      id: 7,
      image: LowCarbImage,
      name: "Low-Carb Meal Plan",
      title: "Weekly plan",
    },
    {
      id: 8,
      image: GlutenFreeImage,
      name: "Gluten-Free Meal Plan",
      title: "Weekly plan",
    },
    {
      id: 9,
      image: DashDietImage,
      name: "DASH Diet Meal Plan",
      title: "Weekly plan",
    },
    {
      id: 10,
      image: IntermittentFastingImage,
      name: "Intermittent Fasting Meal Plan",
      title: "Weekly plan",
    },
  ]);

  // Placeholder for future useEffect to fetch meal plans from backend
  // useEffect(() => {
  //   // Fetch meal plans from backend
  //   axios.get("/api/meal-plans")
  //     .then(response => {
  //       setMealPlans(response.data);
  //     })
  //     .catch(error => {
  //       console.error("Error fetching meal plans:", error);
  //     });
  // }, []);
  return (
    <div className="meal">
      <Sidebar />
      <div className="meal-container">
        <Navbar />
        <div className="loader-container">
          {loading ? (
            <LoadingPage loading={loading} />
          ) : (
            <div className="meal-plan-grid">
              {mealPlans.map((plan) => (
                <MealPlanItems
                  key={plan.id}
                  id={plan.id}
                  image={plan.image}
                  name={plan.name}
                  title={plan.title}
                />
              ))}
            </div>
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default MealPlan;
