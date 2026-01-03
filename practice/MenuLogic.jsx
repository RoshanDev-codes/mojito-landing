import React, { useState } from "react";
import { allCocktails } from "../../constants";

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    setCurrentIndex((index + totalCocktails) % totalCocktails);
  };

  const currentCocktail = allCocktails[currentIndex];
  const nextCocktail =
    allCocktails[(currentIndex + 1 + totalCocktails) % totalCocktails];

  const prevCocktail =
    allCocktails[(currentIndex - 1 + totalCocktails) % totalCocktails];

  console.log(currentIndex);

  return (
    <section className="min-h-dvh border">
      <div className="container mx-auto border min-h-dvh py-10">
        <nav className="grid max-w-6xl grid-cols-4 gap-10 mx-auto">
          {allCocktails.map((cocktail, index) => {
            const isActive = index === currentIndex;

            return (
              <button
                key={cocktail.id}
                onClick={() => goToSlide(index)}
                className={` ${
                  isActive ? "text-white border-white border-b-2 pb-2" : ""
                } font-modern-negra text-4xl pb-2 hover:text-yellow cursor-pointer`}
              >
                {cocktail.name}
              </button>
            );
          })}
        </nav>

        <div className="mt-10">
          <p className="text-center text-4xl font-bold">
            Current Index: {currentIndex}
          </p>

          <div className="h-100 border mt-10 overflow-hidden">
            <img
              src={currentCocktail.image}
              alt=""
              className="size-full object-contain"
            />
          </div>

          <div className="flex mt-10 justify-center gap-20 items-center">
            <button
              onClick={() => goToSlide(currentIndex - 1)}
              className="text-4xl bg-white px-4 py-2 rounded-md text-black"
            >
              {prevCocktail.name}
            </button>
            <button
              onClick={() => {
                goToSlide(currentIndex + 1);
              }}
              className="text-4xl bg-white px-4 py-2 rounded-md text-black"
            >
              {nextCocktail.name}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;
