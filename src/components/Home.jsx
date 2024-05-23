import React, { useState, useEffect } from "react";
import data from "../data.jsx";
import Divider from "@mui/material/Divider";
import "../index.css";
import Box from "@mui/material/Box";

export default function AllRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [emotionSort, setEmotionSort] = useState("");
  const [dietSort, setDietSort] = useState("");
  const [mealSort, setMealSort] = useState("");
  const [showRecipes, setShowRecipes] = useState(false);
  const [message, setMessage] = useState("");
  const [noMatches, setNoMatches] = useState(false);

  useEffect(() => {
    setRecipes(data);
  }, []);

  const handleSortEmotion = (type) => {
    setEmotionSort(type.replace("emotion-", ""));
  };

  const handleSortDiet = (type) => {
    setDietSort(type);
  };

  const handleSortMeal = (type) => {
    setMealSort(type);
  };

  const handleClearFilters = () => {
    setEmotionSort("");
    setDietSort("");
    setMealSort("");
    setShowRecipes(false);
    setMessage("");
    setNoMatches(false);
  };

  const handleFindRecipes = () => {
    if (!emotionSort && !dietSort && !mealSort) {
      setMessage("Please make a selection.");
      setNoMatches(false);
    } else {
      setMessage("");
      const filtered = recipes.filter((recipe) => {
        const emotionMatch = emotionSort
          ? recipe.emotions &&
            recipe.emotions.includes(parseInt(emotionSort, 10))
          : true;
        const dietMatch = dietSort
          ? recipe.diet && recipe.diet.includes(parseInt(dietSort, 10))
          : true;
        const mealMatch = mealSort
          ? recipe.meal && recipe.meal.includes(parseInt(mealSort, 10))
          : true;
        return emotionMatch && dietMatch && mealMatch;
      });
      if (filtered.length === 0) {
        setNoMatches(true);
        setShowRecipes(false);
      } else {
        setNoMatches(false);
        setShowRecipes(true);
      }
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    const emotionMatch = emotionSort
      ? recipe.emotions && recipe.emotions.includes(parseInt(emotionSort, 10))
      : true;
    const dietMatch = dietSort
      ? recipe.diet && recipe.diet.includes(parseInt(dietSort, 10))
      : true;
    const mealMatch = mealSort
      ? recipe.meal && recipe.meal.includes(parseInt(mealSort, 10))
      : true;
    return emotionMatch && dietMatch && mealMatch;
  });

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Box>
        <br />

        <div className="filter">
          <div className="intro">
            <p>Welcome to MOODCHEF!</p>
            <p>
              MOODCHEF is an app that allows you to track your mood, select
              dietary restrictions, and choose a meal type. We will then suggest
              a detailed recipe based on your inputs.
            </p>
          </div>

          <br />
          <Divider sx={{ borderColor: "black", borderWidth: "0.9px", my: 2 }} />
          <br />
          <div>
            <label className="filter--label">
              How are you feeling today?{" "}
              <select
                value={emotionSort || ""}
                onChange={(e) => handleSortEmotion(`emotion-${e.target.value}`)}
              >
                <option value="">Select</option>
                <option value="1">Happy</option>
                <option value="2">Sad</option>
                <option value="3">Angry</option>
                <option value="4">Tired</option>
              </select>
            </label>
          </div>
          <br />
          <div>
            <label className="filter--label">
              Do you have any dietary restrictions?{" "}
              <select
                value={dietSort || ""}
                onChange={(e) => handleSortDiet(e.target.value)}
              >
                <option value="">Select</option>
                <option value="1">None</option>
                <option value="2">Vegan</option>
                <option value="3">Vegetarian</option>
              </select>
            </label>
          </div>
          <br />
          <div>
            <label className="filter--label">
              What meal of the day would you like to eat?{" "}
              <select
                value={mealSort || ""}
                onChange={(e) => handleSortMeal(e.target.value)}
              >
                <option value="">Select</option>
                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Snack</option>
                <option value="4">Dinner</option>
              </select>
            </label>
          </div>
          <br />
          <Divider sx={{ borderColor: "black", borderWidth: "0.9px", my: 2 }} />
          <br />
          <div className="button--flex">
            <button className="explore--button" onClick={handleFindRecipes}>
              Find me a recipe!
            </button>
            <button className="explore--button" onClick={handleClearFilters}>
              Clear Filters
            </button>
          </div>

          <br />
          <br />
          {message && <p>{message}</p>}
          {noMatches && (
            <p>
              Sorry, got nothing for you, please try again with a different
              combination.
            </p>
          )}
          {showRecipes && (
            <ul className="no-list-style">
              {filteredRecipes.map((recipe) => (
                <div key={recipe.id}>
                  <Divider
                    sx={{ borderColor: "black", borderWidth: "0.9px", my: 2 }}
                  />
                  <h2 className="card--title">{recipe.title} </h2>
                  <Divider
                    sx={{ borderColor: "black", borderWidth: "0.9px", my: 2 }}
                  />
                  {recipe.image && (
                    <div className="img--container">
                      {" "}
                      <img
                        src={recipe.image}
                        className="card--image"
                        alt={recipe.title}
                      />
                    </div>
                  )}
                  <p className="recipe--description">{recipe.description}</p>
                  <br />
                  <br />
                </div>
              ))}
            </ul>
          )}
        </div>
      </Box>
    </>
  );
}
