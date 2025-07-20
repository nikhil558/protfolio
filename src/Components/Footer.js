import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import SocialLinks from "./SocialLinks";
import nlogo from "../assets/nlogo.svg";
import { ReactSVG } from "react-svg";

const Footer = () => {
  const { theme } = useTheme();

  const scrollToHome = () => {
    const element = document.getElementById("homeId");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className={`flex flex-col items-center pb-10 transition-colors duration-300 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <p
        className={`text-xs transition-colors duration-300 ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Nikhil © 2025
      </p>
      <div className="w-12 md:w-15 my-4">
        <ReactSVG
          src={nlogo}
          className={`cursor-pointer ${
            theme === "dark"
              ? "fill-gray-400 hover:fill-white"
              : "fill-gray-600 hover:fill-gray-900"
          }`}
          beforeInjection={(svg) => {
            svg.setAttribute("class", "w-full h-full"); // Tailwind classes for full width and height
          }}
          onClick={scrollToHome}
        />
      </div>
      <SocialLinks type="footer" />
    </div>
  );
};

export default Footer;
