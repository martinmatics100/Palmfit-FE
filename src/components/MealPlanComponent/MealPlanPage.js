import React, { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import MealPlanGrid from "./MealPlanGrid";
import image from "../../Assets/mealPlansImage.png";

const MealPlanPage = () => {
  const [loading, setLoading] = useState(false);
  const [mealPlans, setMealPlans] = useState([]);

  useEffect(() => {
    setLoading(true);
    // Simulate fetching data from a backend
    setTimeout(() => {
      // Sample meal plan data
      const fetchedMealPlans = [
        // Daily Plans
        {
          id: 1,
          name: "Gold Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 2,
          name: "Emerald Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 3,
          name: "Bronze Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 4,
          name: "Crystal Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 5,
          name: "Diamond Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 6,
          name: "Jade Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 7,
          name: "Quartz Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 8,
          name: "Obsidian Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 9,
          name: "Topaz Plan",
          duration: "Daily",
          image: image,
        },
        {
          id: 10,
          name: "Amber Plan",
          duration: "Daily",
          image: image,
        },

        // Weekly Plans
        {
          id: 11,
          name: "Platinum Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 12,
          name: "Silver Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 13,
          name: "Sapphire Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 14,
          name: "Opal Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 15,
          name: "Pearl Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 16,
          name: "Titanium Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 17,
          name: "Ruby Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 18,
          name: "Amethyst Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 19,
          name: "Garnet Plan",
          duration: "Weekly",
          image: image,
        },
        {
          id: 20,
          name: "Aquamarine Plan",
          duration: "Weekly",
          image: image,
        },
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

export default MealPlanPage;
