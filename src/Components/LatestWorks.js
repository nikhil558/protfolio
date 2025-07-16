import React from "react";
import Workitem from "./Workitem";
import DevTinder from "../assets/images/DevTinder.png";
import Tic_Tac_Toe from "../assets/images/Tic_Tac_Toe.png";

const LatestWorks = () => {
  const projects = [
    {
      name: "DevTinder",
      description:
        "Deeply understand advanced concepts, practice with real-world exercises, build expertise with hands-on projects to boost your career.",
      link: "http://57.181.32.171",
      image: DevTinder,
      color: "#1788ae",
      tags: [
        "react.js",
        "express.js",
        "node.js",
        "swiper.js",
        "mongoDB",
        "mongoose",
        "css",
        "javascript",
        "figma",
      ],
    },
    {
      name: "Tic-Tac-Toe",
      description:
        "Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and UX designer.",
      link: "#",
      image: Tic_Tac_Toe,
      color: "#ffe578",
      tags: [
        "react.js",
        "express.js",
        "node.js",
        "swiper.js",
        "mongoDB",
        "mongoose",
        "css",
        "javascript",
        "figma",
      ],
    },
    {
      name: "Harigurus",
      description:
        "HariGurus is a one-stop-shop for all Hindu religious, customs and traditional requirements. Built the complete site from scratch.",
      link: "#",
      image: "../assets/images/harigurus.webp",
      color: "#fc815c",
      tags: [
        "react.js",
        "express.js",
        "node.js",
        "swiper.js",
        "mongoDB",
        "mongoose",
        "css",
        "javascript",
        "figma",
      ],
    },
  ];

  return (
    <section
      className="max-w-screen-xl mx-auto px-4 relative pb-8 sm:pb-16"
      id="latestWorksId"
    >
      <h2 className="text-3xl sm:text-[40px] bg-[#111] relative z-10 font-bold px-4 py-2 w-max mx-auto text-center text-[#1788ae] sm:border-b-2 border-[#1788ae]">
        Latest Works
      </h2>
      {projects.map((project, index) => (
        <Workitem project={project} index={index} />
      ))}
      <div className="w-[2px] hidden sm:block bg-[#1788ae] absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
    </section>
  );
};

export default LatestWorks;
