import React, { useEffect, useState } from "react";
import LoadingPage from "../../../components/LoadingPage/LoadingPage";
import MealPlanGrid from "../../../components/MealPlanComponent/MealPlanGrid";
import image from "../../../Assets/mealplans/DashDietImage.jpg";

const MealPlan = () => {
  const [loading, setLoading] = useState(false);
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching data from a backend
    setTimeout(() => {
      // Sample meal plan data
      const fetchedMealPlans = [
        {
          id: 1,
          name: "Diamond Plan",
          duration: "Weekly",
          image: image, // Replace with actual image paths
        },
        {
          id: 2,
          name: "Gold Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 3,
          name: "Silver Plan",
          duration: "Monthly",
          image: image,
        },
        {
          id: 3,
          name: "Silver Plan",
          duration: "Monthly",
          image: image,
        },
        {
          id: 3,
          name: "Silver Plan",
          duration: "Monthly",
          image: image,
        },
        {
          id: 3,
          name: "Silver Plan",
          duration: "Monthly",
          image: image,
        },
        {
          id: 3,
          name: "Silver Plan",
          duration: "Monthly",
          image: image,
        },
        {
          id: 3,
          name: "Silver Plan",
          duration: "Monthly",
          image: image,
        },
        {
          id: 3,
          name: "Silver Plan",
          duration: "Monthly",
          image: image,
        },
        // Add more meal plans as needed
      ];
      setMealPlans(fetchedMealPlans);
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  return (
    <div className="loader-container">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <div>
          <h4 style={{ marginTop: "10px" }}>Meal plans</h4>
          <MealPlanGrid mealPlans={mealPlans} />
        </div>
      )}
    </div>
  );
};

export default MealPlan;
