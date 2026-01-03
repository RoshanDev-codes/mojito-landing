import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants/index.js";
import { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(null);

  const handleActiveLink = (link) => {
    setIsActive(link.id);
  };

  const handleResetLink = () => {
    setIsActive(null);
  };

  return (
    <nav className="w-full top-4 z-50">
      <div className="flex flex-col md:flex-row md:justify-between container mx-auto px-5 items-center gap-5 py-5">
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
                    isActive === link.id
                      ? "border-b-2 border-white/80 pb-2"
                      : ""
                  } hover:text-yellow transition-all duration-100 ease-out`}
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
