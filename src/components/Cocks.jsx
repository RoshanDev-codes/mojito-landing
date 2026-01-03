import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { cocktailLists, mockTailLists } from "../../constants/index.js";

const Cocks = () => {
  return (
    <section className="relative py-28 min-h-dvh bg-[url('images/noise.png')]">
      <div className="container mx-auto flex md:flex-row flex-col justify-between gap-14">
        <div className="md:w-fit px-5 md:px-0 w-full space-y-10">
          <h2 className="text-2xl font-semibold">Most Popular Cocktails:</h2>

          <ul className="space-y-16">
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li
                key={name}
                className="flex items-start justify-between gap-32"
              >
                <div>
                  <h2 className="text-xl md:text-4xl text-yellow font-modern-negra">
                    {name}
                  </h2>
                  <p className="text-lg font-medium">
                    {country} | {detail}
                  </p>
                </div>

                <span className="text-xl font-semibold">- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-fit w-full md:px-0 px-5 space-y-10">
          <h2 className="text-2xl font-semibold">Most Loved Cocktails:</h2>

          <ul className="space-y-16">
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li
                key={name}
                className="flex items-start justify-between gap-32"
              >
                <div>
                  <h2 className="text-xl md:text-4xl text-yellow font-modern-negra">
                    {name}
                  </h2>
                  <p className="text-lg font-medium">
                    {country} | {detail}
                  </p>
                </div>

                <span className="text-xl font-semibold">- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocks;
