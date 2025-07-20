import React from "react";

const ProjectLive = ({ project, index }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex w-full relative justify-center sm:${
        index % 2 ? "justify-end" : "justify-start"
      }`}
    >
      <div className="flex flex-col items-center relative group sm:hover:scale-105 ease-in-out duration-200">
        <div className="relative mx-auto max-w-[300px]">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-2xl p-6 shadow-2xl">
              <div className="bg-black rounded-lg p-3 shadow-inner">
                <div className="relative w-full aspect-[16/10] bg-gray-900 rounded-md overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute inset-0 shadow-inner pointer-events-none"></div>
                </div>
              </div>
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
        <span
          className="hidden group-hover:inline -top-14 ease-jump duration-200 bg-[#459bd5] sm:absolute left-1/2 sm:-translate-x-1/2 px-2 py-1 text-sm sm:text-base mt-2 rounded w-max items-center gap-1 after:hidden sm:after:block after:w-4 after:h-4 after:bg-inherit after:absolute after:left-1/2 after:-translate-x-1/2 after:rotate-45 after:-bottom-2"
          style={{ backgroundColor: project.color }}
        >
          {project.name}
        </span>
      </div>
    </a>
  );
};

export default ProjectLive;
