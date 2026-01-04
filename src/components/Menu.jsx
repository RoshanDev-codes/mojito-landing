"use client";

import { allCocktails } from "../../constants";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState(0);
  const [touchStartY, setTouchStartY] = useState(0);

  const swipeThreShold = 50;

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    // const currentTouchStart = touchStart;
    const deltaX = touchStartX - touchEndX;
    const deltaY = touchStartY - touchEndY;

    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    if (absDeltaX > swipeThreShold && absDeltaX > absDeltaY) {
      if (deltaX > 0) {
        handleActiveLink(currentIndex + 1); // Horizontal left
      } else {
        handleActiveLink(currentIndex - 1); // Horizontal right
      }
    }
  };

  const totalCocktails = allCocktails.length;

  const handleActiveLink = (index) => {
    setCurrentIndex((index + totalCocktails) % totalCocktails);
  };

  const currentCocktail = allCocktails[currentIndex];
  const prevCocktail =
    allCocktails[(currentIndex - 1 + totalCocktails) % totalCocktails];
  const nextCocktail =
    allCocktails[(currentIndex + 1 + totalCocktails) % totalCocktails];

  useGSAP(() => {
    gsap.fromTo(
      "#cocktails img",
      { opacity: 0, xPercent: -30 },
      { opacity: 1, ease: "power1.inOut", xPercent: 0, duration: 0.7 }
    );

    gsap.fromTo(
      "#titles",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.inOut" }
    );
    gsap.fromTo(
      "#details",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power1.inOut" }
    );
  }, [currentIndex]);
  return (
    <section id="menu" className="relative radial-gradient">
      <div className="md:py-20 container mx-auto p-5 min-h-dvh">
        <nav className="grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-5 max-w-7xl mx-auto">
          {allCocktails.map((cocktails, index) => {
            const isActive = currentIndex === index;

            return (
              <button
                onClick={() => handleActiveLink(index)}
                className={` ${
                  isActive
                    ? "border-b-1 border-white text-white"
                    : "text-white/50"
                } md:text-4xl text-2xl font-modern-negra transition-colors cursor-pointer hover:text-yellow pb-2 ease-out`}
                key={cocktails.id}
              >
                {cocktails.name}
              </button>
            );
          })}
        </nav>

        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          id="wrapper"
          className="md:h-auto min-h-[46vh]"
        >
          <div className="md:px-0 px-2 flex justify-between items-center md:mt-20 mt-10">
            <button
              onClick={() => handleActiveLink(currentIndex - 1)}
              className="max-w-16"
            >
              <span className="md:text-3xl font-modern-negra">
                {prevCocktail.name}
              </span>
              <img
                src="images/right-arrow.png"
                alt="arrow-left"
                className="ml-4"
              />
            </button>

            <button
              onClick={() => handleActiveLink(currentIndex + 1)}
              className="max-w-16"
            >
              <span className="md:text-3xl font-modern-negra">
                {nextCocktail.name}
              </span>
              <img
                src="images/left-arrow.png"
                alt="arrow-left"
                className="ml-4"
              />
            </button>
          </div>

          <div
            id="cocktails"
            className="pt-20 md:bottom-0 bottom-[45%] md:mt-0 mt-14 md:mb-0 mb-20 flex-center md:h-[60vh] h-[60vh] w-full"
          >
            <img
              src={currentCocktail.image}
              alt="cocktail-image"
              className="size-full md:object-contain object-cover"
            />
          </div>
        </div>

        <div
          id="details"
          className="md:absolute flex justify-between gap-20 md:bottom-30 w-10/12"
        >
          <div className="md:space-y-4 space-y-10 max-w-40">
            <p>Recipe for:</p>
            <p
              id="titles"
              className="font-modern-negra text-yellow md:text-6xl text-4xl"
            >
              {currentCocktail.name}
            </p>
          </div>

          <div className="md:space-y-4 space-y-10 max-w-md">
            <p className="font-serif md:text-5xl">{currentCocktail.title}</p>
            <p className="text-lg">{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
