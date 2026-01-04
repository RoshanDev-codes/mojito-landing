import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const About = () => {
  useGSAP(() => {
    const pSplit = SplitText.create("#about p", {
      type: "words",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 40%",
      },
    });

    tl.from(
      "#element",
      {
        opacity: 0,
        yPercent: 70,
        duration: 1,
        ease: "expo.out",
      },
      0
    )
      .from(
        pSplit.words,
        {
          yPercent: 100,
          opacity: 0,
          ease: "expo.out",
          duration: 1,
          stagger: 0.02,
        },
        0
      )
      .from(
        "#top-grid div, #bottom-grid div",
        {
          opacity: 0,
          ease: "expo.out",
          duration: 1,
          stagger: 0.04,
        },
        "-=0.8"
      );
  }, []);

  return (
    <section id="about" className="min-h-dvh">
      <div id="will" className="container mx-auto md:py-40 py-28 px-8">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-8 space-y-10 mb-10 md:mb-0">
            <p
              id="element"
              className="bg-white text-black px-4 py-2 rounded-full inline-block text-lg font-semibold"
            >
              Best Cocktails
            </p>

            <p className="text-5xl md:text-6xl font-modern-negra max-w-lg">
              Where every detail matters -from muddle to garnish
            </p>
          </div>

          <div className="col-span-4 space-y-10">
            <p className="max-w-md text-lg">
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>

            <div className="flex flex-col gap-2">
              <p className="md:text-3xl text-xl">
                <span className="text-3xl font-bold md:text-6xl text-yellow">
                  4.5
                </span>
                /5
              </p>

              <p>More than +12000 customers</p>
            </div>
          </div>
        </div>

        <div
          id="top-grid"
          className="grid mt-12 grid-cols-1 md:grid-cols-12 md:gap-5 gap-10"
        >
          <div className="md:col-span-3 md:w-fit w-full">
            <div className="rounded-3xl relative h-72 overflow-hidden size-full">
              <img
                src="images/abt1.png"
                alt="grid-image-1"
                className="object-cover size-full"
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="rounded-3xl relative h-72 overflow-hidden size-full">
              <img
                src="images/abt2.png"
                alt="grid-image-2"
                className="object-cover size-full"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-3xl relative h-72 overflow-hidden size-full">
              <img
                src="images/abt3.png"
                alt="grid-image-3"
                className="object-cover size-full"
              />
            </div>
          </div>
        </div>

        <div
          id="bottom-grid"
          className="grid grid-cols-1 mt-10 md:grid-cols-12 md:gap-5 gap-10"
        >
          <div className="md:col-span-8">
            <div className="relative rounded-3xl h-72 size-full overflow-hidden">
              <img
                src="images/abt4.png"
                alt="grid-image-4"
                className="object-cover size-full"
              />
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="relative rounded-3xl h-72 size-full overflow-hidden">
              <img
                src="images/abt5.png"
                alt="grid-image-5"
                className="object-cover size-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
