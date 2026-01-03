"use client";

import { allCocktails } from "../../constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    gsap.fromTo("#titles", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: -30 },
      { xPercent: 0, opacity: 1, duration: 0.7, ease: "power1.inOut" }
    );
    gsap.fromTo(
      "#details p",
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, ease: "power1.inOut" }
    );
  }, [currentIndex]);

  const totalCocktails = allCocktails.length;

  const handleClick = (index) => {
    setCurrentIndex((index + totalCocktails) % totalCocktails);
  };

  const currentCocktail = allCocktails[currentIndex];
  const nextCocktail =
    allCocktails[(currentIndex + 1 + totalCocktails) % totalCocktails];

  const prevCocktail =
    allCocktails[(currentIndex - 1 + totalCocktails) % totalCocktails];

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative h-dvh w-full md:mt- mt-0 2xl:px-0 px-5 md:py-20 py-0 radial-gradient"
    >
      {/* <h2>Cocktail Menu</h2> */}

      <nav className="md:max-w-6xl md:mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-3 sm:mb-20 mb-4 relative">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              onClick={() => handleClick(index)}
              className={`${
                isActive
                  ? "border-white text-white border-b-1"
                  : "text-white/50 border-white/50"
              } md:text-3xl text-2xl cursor-pointer hover:text-yellow hover:border-yellow pb-2 transition-colors font-modern-negra`}
              key={cocktail.id}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="container mx-auto">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={() => handleClick(currentIndex - 1)}
            className="text-white hover:text-yellow cursor-pointer transition-colors max-w-36 text-left"
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {prevCocktail.name}
            </span>
            <img
              src="images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button
            onClick={() => handleClick(currentIndex + 1)}
            className="text-white hover:text-yellow cursor-pointer transition-colors max-w-36 text-left"
          >
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              {nextCocktail.name}
            </span>
            <img
              src="images/left-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="cocktail mt-4 pointer-events-none md:h-[60vh] h-[35vh] relative z-0 overflow-hidden flex-center">
          <img
            src={currentCocktail.image}
            alt="img-1"
            className="object-contain size-full"
          />
        </div>

        <div className="flex max-md:flex-col gap-4 md:items-center justify-between w-full lg:absolute bottom-0 md:-translate-x-30 -translate-x-15 z-10 px-20 pb-20">
          <div ref={contentRef} className="space-y-4">
            <p>Recipe for:</p>
            <p
              id="titles"
              className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-44"
            >
              {currentCocktail.name}
            </p>
          </div>

          <div id="details" className="space-y-5 md:max-w-md text-left">
            <h2 className="md:text-5xl text-3xl font-serif">
              {currentCocktail.title}
            </h2>
            <p className="md:text-lg pe-5">{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
