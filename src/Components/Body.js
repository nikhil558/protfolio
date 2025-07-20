import { ReactSVG } from "react-svg";
import MatterDemo from "./MatterDemo";
import SocialLinks from "./SocialLinks";
import Hero from "./Hero";
import About from "./About";
import { useSelector } from "react-redux";
import { useTheme } from "../contexts/ThemeContext";
import { MoveRight } from "lucide-react";

const Body = () => {
  const showAbout = useSelector((store) => store.about.aboutState);
  const { theme } = useTheme();

  const scrollToLatestWorks = () => {
    const element = document.getElementById("latestWorksId");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-center px-4 sm:px-0 ${
        theme !== "dark" && "bg-[#f0f2f5]"
      }`}
    >
      {theme === "dark" ? (
        <MatterDemo />
      ) : (
        <div className="absolute w-screen h-screen hidden lg:block"></div>
      )}
      {showAbout && <About />}
      <div className="flex flex-col items-center justify-center relative lg:flex-row lg:items-start">
        <Hero />
        <div className="mt-8 lg:mt-0 lg:ml-8 hidden lg:block">
          <SocialLinks type="hero" />
        </div>
      </div>
      <div className=" self-center absolute bottom-0 mb-20">
        <div className="after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-gray-600 after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
          <button
            className={`py-3 px-6 rounded-lg font-bold relative hover:scale-105 ease-in-out duration-200 group transition-all ${
              theme === "dark"
                ? "bg-gradient-to-r from-[#1595b6] to-[#1f2667e6] text-white"
                : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
            }`}
            onClick={scrollToLatestWorks}
          >
            Latest Works
            <MoveRight
              className={`absolute rotate-90 left-1/2 -translate-x-1/2 top-10 group-hover:top-13 ease-in-out duration-100 w-11 h-11 ${
                theme !== "dark" && "text-[#1f2667e6]"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Body;
