import React, { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import { useLocation, useParams } from "react-router-dom";
import DailyMealPlanDetails from "./PlanDetailsPerMealPlan/DailyMealPlanDetails";
import WeeklyMealPlanDetails from "./PlanDetailsPerMealPlan/WeeklyMealPlanDetails";

const DetailsPerMealPlan = () => {
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(null);
  const { state } = useLocation();
  const { mealPlan } = state || {};
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
  };

  const dailyMeals = [
    {
      name: "Breakfast",
      totalCalories: 400,
      foods: [
        { name: "Oatmeal", measurement: "2.5 cups", calories: 150 },
        { name: "Banana", measurement: "2.5 cups", calories: 90 },
        { name: "Scrambled Eggs", measurement: "2.5 cups", calories: 160 },
      ],
    },
    {
      name: "Lunch",
      totalCalories: 600,
      foods: [
        { name: "Grilled Chicken", measurement: "2.5 cups", calories: 300 },
        { name: "Salad", measurement: "2.5 cups", calories: 150 },
        { name: "Rice", measurement: "2.5 cups", calories: 150 },
      ],
    },
    {
      name: "Dinner",
      totalCalories: 500,
      foods: [
        { name: "Salmon", measurement: "2.5 cups", calories: 300 },
        { name: "Quinoa", measurement: "2.5 cups", calories: 200 },
      ],
    },
  ];

  const weeklyMeals = [
    {
      day: "Monday",
      meals: [
        {
          name: "Breakfast",
          totalCalories: 350,
          foods: [
            { name: "Oatmeal", measurement: "2.5 cups", calories: 150 },
            { name: "Banana", measurement: "2.5 cups", calories: 100 },
            { name: "Egg", measurement: "2.5 cups", calories: 100 },
          ],
        },
        {
          name: "Lunch",
          totalCalories: 600,
          foods: [
            { name: "Chicken Salad", measurement: "2.5 cups", calories: 300 },
            { name: "Brown Rice", measurement: "2.5 cups", calories: 200 },
            { name: "Fruit Juice", measurement: "2.5 cups", calories: 100 },
          ],
        },
        {
          name: "Dinner",
          totalCalories: 500,
          foods: [
            { name: "Grilled Fish", measurement: "2.5 cups", calories: 250 },
            {
              name: "Steamed Vegetables",
              measurement: "2.5 cups",
              calories: 150,
            },
            { name: "Mashed Potatoes", measurement: "2.5 cups", calories: 100 },
          ],
        },
      ],
    },
    {
      day: "Tuesday",
      meals: [
        {
          name: "Breakfast",
          totalCalories: 400,
          foods: [
            { name: "Pancakes", measurement: "2.5 cups", calories: 250 },
            { name: "Syrup", measurement: "2.5 cups", calories: 100 },
            { name: "Orange Juice", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Lunch",
          totalCalories: 700,
          foods: [
            { name: "Beef Burger", measurement: "2.5 cups", calories: 400 },
            { name: "Fries", measurement: "2.5 cups", calories: 250 },
            { name: "Soda", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Dinner",
          totalCalories: 550,
          foods: [
            { name: "Spaghetti", measurement: "2.5 cups", calories: 350 },
            { name: "Meatballs", measurement: "2.5 cups", calories: 150 },
            { name: "Garlic Bread", measurement: "2.5 cups", calories: 50 },
          ],
        },
      ],
    },
    {
      day: "Wednesday",
      meals: [
        {
          name: "Breakfast",
          totalCalories: 400,
          foods: [
            { name: "Pancakes", measurement: "2.5 cups", calories: 250 },
            { name: "Syrup", measurement: "2.5 cups", calories: 100 },
            { name: "Orange Juice", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Lunch",
          totalCalories: 700,
          foods: [
            { name: "Beef Burger", measurement: "2.5 cups", calories: 400 },
            { name: "Fries", measurement: "2.5 cups", calories: 250 },
            { name: "Soda", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Dinner",
          totalCalories: 550,
          foods: [
            { name: "Spaghetti", measurement: "2.5 cups", calories: 350 },
            { name: "Meatballs", measurement: "2.5 cups", calories: 150 },
            { name: "Garlic Bread", measurement: "2.5 cups", calories: 50 },
          ],
        },
      ],
    },
    {
      day: "Thursday",
      meals: [
        {
          name: "Breakfast",
          totalCalories: 400,
          foods: [
            { name: "Pancakes", measurement: "2.5 cups", calories: 250 },
            { name: "Syrup", measurement: "2.5 cups", calories: 100 },
            { name: "Orange Juice", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Lunch",
          totalCalories: 700,
          foods: [
            { name: "Beef Burger", measurement: "2.5 cups", calories: 400 },
            { name: "Fries", measurement: "2.5 cups", calories: 250 },
            { name: "Soda", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Dinner",
          totalCalories: 550,
          foods: [
            { name: "Spaghetti", measurement: "2.5 cups", calories: 350 },
            { name: "Meatballs", measurement: "2.5 cups", calories: 150 },
            { name: "Garlic Bread", measurement: "2.5 cups", calories: 50 },
          ],
        },
      ],
    },
    {
      day: "Friday",
      meals: [
        {
          name: "Breakfast",
          totalCalories: 400,
          foods: [
            { name: "Pancakes", measurement: "2.5 cups", calories: 250 },
            { name: "Syrup", measurement: "2.5 cups", calories: 100 },
            { name: "Orange Juice", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Lunch",
          totalCalories: 700,
          foods: [
            { name: "Beef Burger", measurement: "2.5 cups", calories: 400 },
            { name: "Fries", measurement: "2.5 cups", calories: 250 },
            { name: "Soda", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Dinner",
          totalCalories: 550,
          foods: [
            { name: "Spaghetti", measurement: "2.5 cups", calories: 350 },
            { name: "Meatballs", measurement: "2.5 cups", calories: 150 },
            { name: "Garlic Bread", measurement: "2.5 cups", calories: 50 },
          ],
        },
      ],
    },
    {
      day: "Saturday",
      meals: [
        {
          name: "Breakfast",
          totalCalories: 400,
          foods: [
            { name: "Pancakes", measurement: "2.5 cups", calories: 250 },
            { name: "Syrup", measurement: "2.5 cups", calories: 100 },
            { name: "Orange Juice", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Lunch",
          totalCalories: 700,
          foods: [
            { name: "Beef Burger", measurement: "2.5 cups", calories: 400 },
            { name: "Fries", measurement: "2.5 cups", calories: 250 },
            { name: "Soda", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Dinner",
          totalCalories: 550,
          foods: [
            { name: "Spaghetti", measurement: "2.5 cups", calories: 350 },
            { name: "Meatballs", measurement: "2.5 cups", calories: 150 },
            { name: "Garlic Bread", measurement: "2.5 cups", calories: 50 },
          ],
        },
      ],
    },
    {
      day: "Sunday",
      meals: [
        {
          name: "Breakfast",
          totalCalories: 400,
          foods: [
            { name: "Pancakes", measurement: "2.5 cups", calories: 250 },
            { name: "Syrup", measurement: "2.5 cups", calories: 100 },
            { name: "Orange Juice", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Lunch",
          totalCalories: 700,
          foods: [
            { name: "Beef Burger", measurement: "2.5 cups", calories: 400 },
            { name: "Fries", measurement: "2.5 cups", calories: 250 },
            { name: "Soda", measurement: "2.5 cups", calories: 50 },
          ],
        },
        {
          name: "Dinner",
          totalCalories: 550,
          foods: [
            { name: "Spaghetti", measurement: "2.5 cups", calories: 350 },
            { name: "Meatballs", measurement: "2.5 cups", calories: 150 },
            { name: "Garlic Bread", measurement: "2.5 cups", calories: 50 },
          ],
        },
      ],
    },

    // Repeat similar structure for other days...
  ];

  return (
    <div className="mealPlan-details-page">
      {loading ? (
        <LoadingPage loading={loading} />
      ) : (
        <>
          <div className="row mt-1">
            <h5>You're a</h5>
            <div className="col-12 col-sm-6 mb-3 gender">
              <button
                type="button"
                className={`gender-btn ${
                  gender === "male" ? "selected" : ""
                } male`}
                onClick={() => handleGenderSelect("male")}
              >
                Male
              </button>
              <button
                type="button"
                className={`gender-btn ${
                  gender === "female" ? "selected" : ""
                } female`}
                onClick={() => handleGenderSelect("female")}
              >
                Female
              </button>
            </div>
          </div>
          <div className="plan-details mt-4">
            <div className="plan-info">
              <h6 className="plan-name">
                {mealPlan.name} ({mealPlan.duration})
              </h6>
              <p className="calories">1800 calories</p>
            </div>
            <button className="get-plan-btn">Get Plan</button>
          </div>
          <div>
            {/* Render Daily or Weekly Plan Details */}
            {mealPlan.duration === "Daily" ? (
              <DailyMealPlanDetails meals={dailyMeals} />
            ) : (
              <WeeklyMealPlanDetails meals={weeklyMeals} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsPerMealPlan;
