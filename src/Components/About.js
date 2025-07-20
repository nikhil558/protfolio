import { useDispatch } from "react-redux";
import { updateAboutState } from "../Redux/aboutSlice";
import { PanelLeftClose } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const About = () => {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  return (
    <div
      className={`inset-4 absolute z-10 sm:ml-[7%] sm:mt-[7%] sm:w-[80%] sm:h-[80%] max-w-4xl mx-auto border rounded-lg overflow-y-auto shadow-2xl transition-all duration-300 about-card ${
        theme === "dark"
          ? "border-gray-700 bg-[#111] text-white"
          : "border-gray-300 bg-white text-gray-900"
      }`}
    >
      {/* Close Icon */}
      <div className="flex justify-end p-4">
        <PanelLeftClose
          className={`w-5 h-5 cursor-pointer hover:scale-110 transition-transform ${
            theme === "dark"
              ? "text-white hover:text-gray-300"
              : "text-gray-700 hover:text-gray-900"
          }`}
          onClick={() => dispatch(updateAboutState())}
        />
      </div>

      {/* About Content */}
      <div className="px-4 sm:px-8 pb-10">
        <h2
          className={`text-2xl sm:text-3xl font-bold mb-4 border-b pb-2 w-max transition-colors duration-300 ${
            theme === "dark" ? "border-gray-600" : "border-gray-300"
          }`}
        >
          About Me
        </h2>

        <p
          className={`leading-relaxed mb-6 text-sm sm:text-base transition-colors duration-300 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I'm a passionate full-stack developer with a strong foundation in
          building responsive and interactive web applications. I enjoy solving
          complex problems, collaborating with teams, and constantly learning
          new technologies.
        </p>

        <h3
          className={`text-xl sm:text-2xl font-semibold mb-2 transition-colors duration-300 ${
            theme === "dark" ? "text-[#459bd5]" : "text-blue-600"
          }`}
        >
          Skills
        </h3>
        <ul
          className={`list-disc list-inside mb-6 text-sm sm:text-base transition-colors duration-300 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          <li>Frontend: React, Redux, Tailwind CSS, HTML, CSS, JavaScript</li>
          <li>Backend: Node.js, Express, MongoDB, REST APIs</li>
          <li>Tools: Git, Webpack, Vite, Postman, VS Code</li>
        </ul>

        <h3
          className={`text-xl sm:text-2xl font-semibold mb-2 transition-colors duration-300 ${
            theme === "dark" ? "text-[#459bd5]" : "text-blue-600"
          }`}
        >
          Interests
        </h3>
        <p
          className={`text-sm sm:text-base transition-colors duration-300 ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Outside of coding, I love exploring UI design trends, reading about
          tech innovations, and contributing to open-source projects.
        </p>
      </div>
    </div>
  );
};

export default About;
