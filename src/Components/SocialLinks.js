import { ReactSVG } from "react-svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import email from "../assets/email.svg";
import instagram from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";

const SocialLinks = ({ type }) => {
  return (
    <ul
      className={`flex flex-${
        type !== "footer" ? "col" : "row"
      } justify-between ${
        type !== "footer" ? "h-60" : "w-70"
      } px-10 text-[#b0b2c3]`}
    >
      <li>
        <a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank">
          <ReactSVG src={linkedin} className="w-7 hover:text-white" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank">
          <ReactSVG src={github} className="w-7 hover:text-white" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank">
          <ReactSVG src={email} className="w-7 hover:text-white" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank">
          <ReactSVG src={instagram} className="w-7 hover:text-white" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/anuragsinghbam/" target="_blank">
          <ReactSVG src={whatsapp} className="w-7 hover:text-white" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
