import React from "react";
import { useDispatch } from "react-redux";
import { updateAboutState } from "../Redux/aboutSlice";
import { useTheme } from "../contexts/ThemeContext";
import { MoveRight } from "lucide-react";

const Hero = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  return (
    <div className="w-full px-4 max-w-screen-xl mx-auto">
      <div className="relative ml-0 sm:ml-4 md:ml-12 text-center lg:text-left">
        <h1
          className={`pointer-events-none text-2xl sm:text-4xl lg:text-[64px] font-bold transition-colors duration-300 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          G V S Bhaskar Nikhil
        </h1>
        <p
          className={`pointer-events-none font-['Merriweather'] italic my-4 md:my-8 text-sm sm:text-base transition-colors duration-300 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Senior Engineer, Tataelxsi
        </p>
        <button
          className={`py-2 px-5 rounded font-bold relative hover:scale-105 ease-in-out duration-200 group transition-all ${
            theme === "dark"
              ? "bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] text-white"
              : "bg-gradient-to-l from-blue-500 to-blue-700 text-white"
          }`}
          onClick={() => dispatch(updateAboutState())}
        >
          About Me
          <MoveRight
            className={`absolute hidden lg:block w-10 h-10 top-1/2 -translate-y-1/2 -right-7 group-hover:-right-10 transition-all duration-100 ${
              theme !== "dark" && "text-[#1f2667e6]"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;
