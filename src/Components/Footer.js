import React from "react";
import nlogo from "../assets/nlogo.svg";
import { ReactSVG } from "react-svg";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <div className="flex flex-col items-center pb-10">
      <p className="text-xs text-gray-300">Nikhil © 2025</p>
      <div className="w-15 my-4">
        <ReactSVG
          src={nlogo}
          className="fill-white cursor-pointer"
          beforeInjection={(svg) => {
            svg.setAttribute("class", "w-full h-full"); // Tailwind classes for full width and height
          }}
        />
      </div>
      <SocialLinks type="footer" />
    </div>
  );
};

export default Footer;
