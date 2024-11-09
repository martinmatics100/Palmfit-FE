import React, { useContext, useState, useEffect } from "react";
import { useUser } from "../../Context/UserContext";

const MealLogComponent = () => {
  const { user } = useUser(); // Access user context
  const [progress, setProgress] = useState(80); // Track meal plan progress
  const [loggedMeals, setLoggedMeals] = useState([]); // Store logged meals
  const [mealLog, setMealLog] = useState({
    type: "",
    food: "",
    portion: "",
    calories: "",
    date: new Date().toISOString().substring(0, 10),
  });

  // Check if user has an active meal plan
  const hasActiveMealPlan = true;
  // user.activeMealPlan && user.activeMealPlan.length > 0;

  const activeMealPlan = {
    name: "Sample Meal Plan", // Hardcoded meal plan name
    meals: ["Breakfast", "Lunch", "Dinner"], // Hardcoded meal types
  };

  const mealTypes = activeMealPlan.meals;

  // Get meal types from the user's active meal plan (e.g., Breakfast, Lunch, Dinner)
  //   const mealTypes = hasActiveMealPlan ? user.activeMealPlan.meals : [];

  //   useEffect(() => {
  //     if (loggedMeals.length > 0 && hasActiveMealPlan) {
  //       const totalMeals = mealTypes.length;
  //       const loggedMealCount = loggedMeals.filter(
  //         (meal) => meal.date === mealLog.date
  //       ).length;
  //       const completionRate = Math.round((loggedMealCount / totalMeals) * 100);
  //       setProgress(completionRate);
  //     }
  //   }, [loggedMeals, mealLog.date, hasActiveMealPlan, mealTypes]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setLoggedMeals([...loggedMeals, mealLog]);
  //     setMealLog({
  //       type: "",
  //       food: "",
  //       portion: "",
  //       calories: "",
  //       date: mealLog.date,
  //     });
  //   };

  useEffect(() => {
    if (loggedMeals.length > 0) {
      const totalMeals = mealTypes.length;
      const loggedMealCount = loggedMeals.filter(
        (meal) => meal.date === mealLog.date
      ).length;
      const completionRate = Math.round((loggedMealCount / totalMeals) * 100);
      setProgress(completionRate);
    }
  }, [loggedMeals, mealLog.date, mealTypes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedMeals([...loggedMeals, mealLog]);
    setMealLog({
      type: "",
      food: "",
      portion: "",
      calories: "",
      date: mealLog.date,
    });
  };

  return (
    <div className="meal-log">
      <h2>Meal Log</h2>
      {hasActiveMealPlan ? (
        <>
          {/* <p>Your current meal plan: {user.activeMealPlan.name}</p> */}
          <p>Your current meal plan: {activeMealPlan.name}</p>
          <p>
            Progress for {mealLog.date}: {progress}% completed
          </p>

          <form onSubmit={handleSubmit}>
            <label>Meal Type</label>
            <select
              value={mealLog.type}
              onChange={(e) => setMealLog({ ...mealLog, type: e.target.value })}
              required
            >
              <option value="" disabled>
                Select a meal type
              </option>
              {mealTypes.map((mealType, index) => (
                <option key={index} value={mealType}>
                  {mealType}
                </option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Food"
              value={mealLog.food}
              onChange={(e) => setMealLog({ ...mealLog, food: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Portion"
              value={mealLog.portion}
              onChange={(e) =>
                setMealLog({ ...mealLog, portion: e.target.value })
              }
              required
            />
            <input
              type="number"
              placeholder="Calories"
              value={mealLog.calories}
              onChange={(e) =>
                setMealLog({ ...mealLog, calories: e.target.value })
              }
              required
            />
            <input
              type="date"
              value={mealLog.date}
              onChange={(e) => setMealLog({ ...mealLog, date: e.target.value })}
              required
            />
            <button type="submit">Log Meal</button>
          </form>

          <h3>Logged Meals for {mealLog.date}</h3>
          <progress value={progress} max="100"></progress>
          <ul>
            {loggedMeals
              .filter((m) => m.date === mealLog.date)
              .map((m, index) => (
                <li
                  key={index}
                >{`${m.type}: ${m.food} (${m.portion}) - ${m.calories} calories`}</li>
              ))}
          </ul>
        </>
      ) : (
        <p>
          You're not on any active meal plan. Please join a meal plan to log
          your meals.
        </p>
      )}
    </div>
  );
};

export default MealLogComponent;
