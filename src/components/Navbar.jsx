import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const navContainerRef = useRef(null);
  const [isActive, setIsActive] = useState(null);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { y: currentScroll } = useWindowScroll();

  // ✅ Move scroll logic to useEffect
  useEffect(() => {
    if (currentScroll === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScroll > lastScrollY && currentScroll > 50) {
      navContainerRef.current.classList.add("floating-nav");
      setIsNavVisible(false);
    } else if (currentScroll < lastScrollY) {
      navContainerRef.current.classList.add("floating-nav");
      setIsNavVisible(true);
    }
    setLastScrollY(currentScroll);
  }, [currentScroll, lastScrollY]); // ✅ Dependencies prevent loop

  useGSAP(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  const handleActiveLink = (link) => {
    setIsActive(link.id);
  };

  const handleResetLink = () => {
    setIsActive(null);
  };

  return (
    <nav
      ref={navContainerRef}
      className="fixed w-full transition-all duration-500 ease-out flex md:flex-row flex-col items-center text-white font-medium z-50"
    >
      <div className="flex flex-col md:flex-row md:justify-between container mx-auto px-5 items-center md:gap-5 gap-2 md:py-5 py-2">
        <button onClick={handleResetLink}>
          <a href="#home" className="flex items-center gap-2">
            <img src="images/logo.png" alt="logo" />
            <p className="text-3xl font-modern-negra mt-2.5">Velvet</p>
          </a>
        </button>

        <ul className="flex items-center gap-6 lg:gap-14">
          {navLinks.map((link, index) => (
            <li key={index}>
              <button onClick={() => handleActiveLink(link)}>
                <a
                  href={`#${link.id}`}
                  className={`${
                    isActive === link.id ? "border-b-2 border-black pb-2" : ""
                  } hover:text-yellow uppercase font-mono font-semibold tracking-widest transition-all duration-100 ease-out`}
                >
                  {link.title}
                </a>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
