const ProjectOverview = ({ project }) => {
  return (
    <div className="w-full">
      <h3
        className="font-bold text-2xl md:text-4xl"
        style={{ color: project.color }}
      >
        {project.name}
      </h3>
      <p className="text-justify text-sm md:text-base mt-2">
        {project.description}
      </p>
      <ul className="flex flex-wrap gap-2 mt-2">
        {project.tags.map((tag, i) => (
          <li
            key={i}
            className="border rounded-[50px] border-[#999] px-[10px] py-[5px] text-sm md:text-base"
          >
            #{tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectOverview;
