import { useDispatch } from "react-redux";
import { updateAboutState } from "../Redux/aboutSlice";
import { PanelLeftClose } from "lucide-react";

const About = () => {
  const dispatch = useDispatch();

  return (
    <div className="absolute z-10 ml-[7%] mt-[7%] w-[80%] h-[80%] border border-gray-700 bg-[#111] rounded-lg text-white overflow-y-auto shadow-2xl">
      {/* Close Icon */}
      <div className="flex justify-end p-4">
        <PanelLeftClose
          className="w-5 h-5 cursor-pointer hover:scale-110 transition"
          onClick={() => dispatch(updateAboutState())}
        />
      </div>

      {/* About Content */}
      <div className="px-8 pb-10">
        <h2 className="text-3xl font-bold mb-4 border-b border-gray-600 pb-2 w-max">
          About Me
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          I'm a passionate full-stack developer with a strong foundation in
          building responsive and interactive web applications. I enjoy solving
          complex problems, collaborating with teams, and constantly learning
          new technologies.
        </p>

        <h3 className="text-2xl font-semibold mb-2 text-[#459bd5]">Skills</h3>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Frontend: React, Redux, Tailwind CSS, HTML, CSS, JavaScript</li>
          <li>Backend: Node.js, Express, MongoDB, REST APIs</li>
          <li>Tools: Git, Webpack, Vite, Postman, VS Code</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2 text-[#459bd5]">
          Interests
        </h3>
        <p className="text-gray-300">
          Outside of coding, I love exploring UI design trends, reading about
          tech innovations, and contributing to open-source projects. I'm also
          an avid gamer and enjoy occasional photography.
        </p>
      </div>
    </div>
  );
};

export default About;
