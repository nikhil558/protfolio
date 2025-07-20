import React from "react";
import ProjectLive from "./ProjectLive";
import ProjectOverview from "./ProjectOverview";
import { useTheme } from "../contexts/ThemeContext";

const Workitem = ({ project, index }) => {
  const { theme } = useTheme();
  const isEven = index % 2 === 0;

  return (
    <div
      className={`flex flex-col sm:flex-row ${
        !isEven ? "sm:flex-row-reverse" : ""
      } gap-4 sm:gap-[80px] items-center mt-8 sm:mt-20 relative`}
    >
      {/* Connecting line */}
      <div
        className={`h-[1px] absolute top-1/2 hidden sm:block transition-colors duration-300 ${
          isEven ? "left-1/4 right-1/2" : "left-1/2 right-1/4"
        } ${theme === "dark" ? "bg-[#1788ae]" : "bg-blue-600"}`}
      ></div>

      {/* Center Dot */}
      <div
        className={`w-4 h-4 rounded-full border-[3px] absolute left-1/2 -translate-x-1/2 z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block transition-colors duration-300 ${
          theme === "dark"
            ? "bg-[#111] border-[#459bd5]"
            : "bg-white border-blue-500"
        }`}
        style={{ borderColor: project.color }}
      ></div>

      <ProjectLive project={project} index={index} />
      <ProjectOverview project={project} />
    </div>
  );
};

export default Workitem;
