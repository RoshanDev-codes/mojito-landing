"use client";

import { allCocktails } from "../../constants";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const [isActive, setIsActive] = useState(null);

  const goToSlide = (cocktail) => {
    setIsActive(cocktail.id);
  };

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="relative w-full md:mt-40 mt-0 2xl:px-0 px-5 py-40 radial-gradient"
    >
      {/* <h2>Cocktail Menu</h2> */}

      <nav className="md:max-w-6xl md:mx-auto grid md:grid-cols-4 grid-cols-2 md:gap-20 gap-10 sm:mb-20 mb-20 relative">
        {allCocktails.map((cocktail) => (
          <button
            onClick={() => goToSlide(cocktail)}
            className={` ${
              isActive === cocktail.id
                ? "border-white text-white"
                : "text-white/50 border-white/50"
            } md:text-3xl text-xl cursor-pointer hover:text-yellow hover:border-yellow border-b-1 pb-2 transition-colors font-modern-negra`}
            key={cocktail.id}
          >
            {cocktail.name}
          </button>
        ))}
      </nav>

      <div className="border container mx-auto">
        <div className="flex items-center justify-between w-full">
          <button className="text-white hover:text-yellow cursor-pointer transition-colors border max-w-36 text-left">
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              Classic Mojito
            </span>
            <img
              src="images/right-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>

          <button className="text-white hover:text-yellow cursor-pointer transition-colors border max-w-36 text-left">
            <span className="text-3xl font-modern-negra leading-none hidden md:block">
              Classic Mojito
            </span>
            <img
              src="images/left-arrow.png"
              alt="right-arrow"
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="mt-6 flex-center">
          <img
            src="images/drink1.png"
            alt="img-1"
            className="object-contain h-[60vh]"
          />
        </div>

        <div className="flex border max-md:flex-col gap-10 md:items-center justify-between w-full -translate-y-52">
          <div className="space-y-4">
            <p>Recipe for:</p>
            <p
              id="title"
              className="font-modern-negra md:text-6xl text-3xl text-yellow max-w-44"
            >
              Classic Mojito
            </p>
          </div>

          <div className="space-y-5 md:max-w-md text-left">
            <h2 className="md:text-5xl text-3xl font-serif">
              Simple Ingredients, Bold Flavor
            </h2>
            <p className="md:text-lg pe-5">
              Made with tequila, lime juice, and orange liqueur, the Margarita
              is easy to make and full of character. Add a salted rim for the
              perfect drink on summer nights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
