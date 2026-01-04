import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

const Loader = () => (
  <div className="min-h-dvh inset-0 bg-black flex items-center justify-center">
    <div className="w-44 h-44 md:w-52 md:h-52 border-4 border-white/20 rounded-full border-t-white animate-spin [animation-duration:3s]">
      <div className="size-full">Hello</div>
    </div>
  </div>
);

export default Loader;
