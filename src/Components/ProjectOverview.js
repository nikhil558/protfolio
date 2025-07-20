import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ProjectOverview = ({ project }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full">
      <h3
        className="font-bold text-2xl md:text-4xl"
        style={{ color: project.color }}
      >
        {project.name}
      </h3>
      <p
        className={`text-justify text-sm md:text-base mt-2 transition-colors duration-300 ${
          theme === "dark" ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag, i) => (
          <li
            key={i}
            className={`border rounded-[50px] px-[10px] py-[5px] text-sm md:text-base transition-colors duration-300 ${
              theme === "dark"
                ? "border-gray-600 text-gray-300"
                : "border-gray-400 text-gray-700"
            }`}
          >
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectOverview;
