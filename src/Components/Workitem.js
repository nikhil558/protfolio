import ProjectLive from "./ProjectLive";
import ProjectOverview from "./ProjectOverview";

const Workitem = ({ project, index }) => {
  return (
    <div
      key={index}
      className="flex flex-col sm:flex-row gap-4 mt-8 sm:gap-[80px] items-center sm:mt-20 relative"
    >
      {index % 2 === 0 && (
        <>
          <div className="h-[1px] left-1/4 right-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div
            className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
            style={{ borderColor: project.color }}
          ></div>
          <ProjectLive project={project} index={index} />
        </>
      )}
      <ProjectOverview project={project} />
      {index % 2 !== 0 && (
        <>
          <div className="h-[1px] right-1/4 left-1/2 bg-[#1788ae] absolute top-1/2 hidden sm:block"></div>
          <div
            className="w-4 h-4 rounded-full border-[3px] border-[#459bd5] absolute left-1/2 -translate-x-1/2 bg-[#111] z-10 hover:scale-110 ease-in-out duration-100 hidden sm:block"
            style={{ borderColor: project.color }}
          ></div>
          <ProjectLive project={project} index={index} />
        </>
      )}
    </div>
  );
};

export default Workitem;
