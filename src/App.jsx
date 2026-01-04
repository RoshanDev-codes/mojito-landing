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
    <main className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <Cocks />
      <About />
      <Art />
      <Menu />
      <Cta />
      <div className="min-h-dvh"></div>
    </main>
  );
};

export default App;
