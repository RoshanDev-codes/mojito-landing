import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const Hero = () => {
  const videoRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const totalVideos = 1;

  const [showLoader, setShowLoader] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      const timer = setTimeout(() => {
        gsap.to(".loader", {
          scale: 0.8,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(".loader-container", {
              opacity: 0,
              yPercent: -100,
              scale: 1.2,
              duration: 1.2,
              ease: "power3.inOut",
              onComplete: () => {
                setShowLoader(false);
                // ✅ 1s delay → fade-in content
                setTimeout(() => {
                  setShowContent(true);
                }, 1000);
              },
            });
          },
        });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loadedVideos]);

  useGSAP(() => {
    if (!showContent) return;

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
  }, [showContent, isMobile]);

  useEffect(() => {
    if (loadedVideos === totalVideos) {
      const timer = setTimeout(() => {
        gsap.to(".loader", {
          scale: 0.8,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(".loader-container", {
              opacity: 0,
              yPercent: -100,
              scale: 1.2,
              duration: 1.2,
              ease: "power3.inOut",
              onComplete: () => {
                setShowLoader(false);
                // ✅ 1s delay → fade-in content
                setTimeout(() => {
                  setShowContent(true);
                }, 1000);
              },
            });
          },
        });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loadedVideos]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {showLoader && (
        <div className="fixed loader-container border border-blue-400 inset-0 bg-black z-50 flex-center">
          <span className="loader"></span>
        </div>
      )}

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
          onLoadedData={handleVideoLoad}
        ></video>
      </div>
    </div>
  );
};

export default Hero;
