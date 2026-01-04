import gsap from "gsap";

import { ScrollTrigger, SplitText } from "gsap/all";

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Cocks from "./components/Cocks.jsx";
import About from "./components/About.jsx";
import Art from "./components/Art.jsx";
import Menu from "./components/Menu.jsx";
import Cta from "./components/Cta.jsx";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="w-full overflow-visible">
      <Navbar />
      <Hero />
      <Cocks />
      <About />
      <Art />
      <Menu />
      <Cta />
    </main>
  );
};

export default App;
