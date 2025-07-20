import React from "react";
import Workitem from "./Workitem";
import { useTheme } from "../contexts/ThemeContext";
import DevTinder from "../assets/images/DevTinder.png";
import Tic_Tac_Toe from "../assets/images/Tic_Tac_Toe.png";
import Foodapp from "../assets/images/Foodapp.png";

const LatestWorks = () => {
  const { theme } = useTheme();

  const projects = [
    {
      name: "DevTinder",
      description:
        "Devtinder is a developer-focused networking platform inspired by the Tinder interaction model — built to help developers discover, connect, and collaborate based on shared interests and tech stacks.",
      link: "http://57.181.32.171",
      image: DevTinder,
      color: "#1788ae",
      tags: [
        "react.js",
        "express.js",
        "node.js",
        "mongoDB",
        "mongoose",
        "css",
        "tailwind",
        "javascript",
        "redux-toolkit",
        "socket.io",
        "razorpay integration",
      ],
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "A feature-rich, modern take on the classic Tic Tac Toe game, supporting both local and online multiplayer modes. Users can either play on the same device or share a room code to connect remotely.",
      link: "https://tic-tac-toe-web-gilt.vercel.app/",
      image: Tic_Tac_Toe,
      color: "#ffe578",
      tags: [
        "react.js",
        "express.js",
        "node.js",
        "mongoDB",
        "mongoose",
        "css",
        "tailwind",
        "javascript",
        "redux-toolkit",
        "socket.io",
      ],
    },
    {
      name: "FoodApp",
      description:
        "A food delivery web application inspired by Swiggy, built to simulate the real-time experience of ordering food online from nearby restaurants.",
      link: "https://foodapp-9nj.pages.dev/",
      image: Foodapp,
      color: "#fc815c",
      tags: ["react.js", "css", "javascript", "redux-toolkit"],
    },
  ];

  return (
    <section
      className={`max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16 transition-colors duration-300 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
      id="latestWorksId"
    >
      <h2
        className={`text-2xl sm:text-3xl lg:text-[40px] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center rounded-md transition-colors duration-300 ${
          theme === "dark"
            ? "bg-[#111] text-[#1788ae] border-2 border-[#1788ae]"
            : "bg-white text-blue-600 border-2 border-blue-600"
        }`}
      >
        Latest Works
      </h2>
      {projects.map((project, index) => (
        <Workitem key={index} project={project} index={index} />
      ))}
      <div
        className={`w-[2px] hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 transition-colors duration-300 ${
          theme === "dark" ? "bg-[#1788ae]" : "bg-blue-600"
        }`}
      ></div>
    </section>
  );
};

export default LatestWorks;
