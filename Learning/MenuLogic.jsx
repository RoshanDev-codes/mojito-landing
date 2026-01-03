"use client";
import { useState } from "react";
import { allCocktails } from "../../constants/index.js";

const MenuLogic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = allCocktails.length;

  console.log("total cocktails: ", totalCocktails);
  console.log("Current Index: ", currentIndex);

  return (
    <div className="min-h-dvh py-40">
      <h1>Step 2: Total Count</h1>
      <p>Current Index: {currentIndex}</p>
      <p>Total Cocktails: {totalCocktails}</p>
    </div>
  );
};

export default MenuLogic;
