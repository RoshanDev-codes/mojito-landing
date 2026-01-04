import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const titleSplit = new SplitText("#title", {
      type: "chars, words",
    });

    const paraSplit = new SplitText("#subtitle", {
      type: "words",
    });

    titleSplit.chars.map((char) => char.classList.add("text-gradient"));

    gsap.from(titleSplit.chars, {
      yPercent: 40,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.12,
    });

    gsap.from(paraSplit.words, {
      yPercent: 50,
      opacity: 0,
      duration: 1.4,
      ease: "expo.out",
      delay: 1,
    });

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section className="min-h-dvh border border-transparent relative z-10 bg-[url('/images/noise.png')] ">
        <h1
          id="title"
          className="text-8xl md:text-[15vw] font-modern-negra text-center mt-48 md:mt-32 tracking-wide"
        >
          MOJITO
        </h1>

        <img
          src="images/hero-left-leaf.png"
          alt="hero-left-leaf"
          id="hero-left-leaf"
          className="w-1/3 md:w-fit absolute left-0 -bottom-20 md:bottom-20"
        />

        <img
          src="images/hero-right-leaf.png"
          alt="hero-right-leaf"
          id="hero-right-leaf"
          className="w-28 md:w-fit absolute right-0 bottom-40 md:top-10"
        />

        <div className="px-10 absolute md:top-[25vh] md:bottom-20 top-auto container max-md:mx-auto left-1/2 -translate-x-1/2 flex justify-between items-end">
          <div className="space-y-5 hidden md:block">
            <p
              id="subtitle"
              className="text-xl md:text-6xl font-modern-negra text-yellow"
            >
              Cool Crisp Classic
            </p>

            <p id="subtitle" className="font-semibold md:text-lg">
              Sip the Spirit of Summer
            </p>
          </div>

          <div className="max-w-xs space-y-5">
            <p id="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>

            <a
              id="subtitle"
              href="#cocktails"
              className="font-semibold hover:text-white transition-all duration-100 ease-out md:text-lg text-yellow"
            >
              View cocktails
            </a>
          </div>
        </div>
      </section>

      <div className="absolute inset-0 flex justify-center items-end">
        <video
          ref={videoRef}
          playsInline
          muted
          preload="auto"
          src="videos/output.mp4"
          className="md:h-[80vh] h-1/2 md:object-contain object-cover"
        ></video>
      </div>
    </>
  );
};

export default Hero;
