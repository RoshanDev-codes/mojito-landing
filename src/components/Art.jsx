import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "../../constants/index.js";

const Art = () => {
  useGSAP(() => {
    const maskedTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: "top top",
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskedTimeline
      .to(".will-fade", {
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
      })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400",
        ease: "power1.inOut",
        duration: 1,
      })
      .to("#masked-content", {
        opacity: 1,
        ease: "power1.inOut",
        duration: 1,
      });
  }, []);

  return (
    <div id="work" className="min-h-dvh relative radial-gradient">
      <div className="container p-5 mx-auto min-h-dvh">
        <h1 className="will-fade mt-20 leading-none md:text-[20vw] text-8xl font-modern-negra text-center text-[#505050]">
          The Art
        </h1>

        <div className="flex md:flex-row flex-col mt-40 justify-between gap-10">
          <ul className="will-fade space-y-5">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="images/check.png" alt="check" />

                <p>{feature}</p>
              </li>
            ))}
          </ul>

          <div className="overflow-hidden rounded-4xl w-full h-[50vh] md:h-[70vh] md:w-[60vw] absolute top-5 left-1/2 -translate-x-1/2">
            <img
              src="images/under-img.jpg"
              alt="cocktail"
              className="size-full object-contain masked-img"
            />
          </div>

          <ul className="will-fade space-y-5">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <img src="images/check.png" alt="check" />

                <p>{feature}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 md:mt-12">
          <h2 className="will-fade md:text-5xl text-4xl font-modern-negra text-center">
            Sip-Worthy Perfection
          </h2>

          <div
            id="masked-content"
            className="opacity-0 space-y-4 absolute px-10 bottom-48 md:bottom-10 w-full left-1/2 -translate-x-1/2"
          >
            <h3 className="md:text-5xl text-2xl font-serif text-center">
              Made with Craft, Poured with Passion
            </h3>

            <p className="text-lg text-center">
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Art;
