import sun from "../assets/sun.svg";
import phone from "../assets/phone.svg";
import whatsapp from "../assets/whatsapp.svg";
import nlogo from "../assets/nlogo.svg";
import { ReactSVG } from "react-svg";

const Header = () => {
  return (
    <div className="z-10 absolute pointer-events-auto flex items-center justify-between pl-[10%] w-full px-4  py-4 mt-4 max-w-screen-xl mx-auto ">
      <div className="w-15">
        <ReactSVG
          src={nlogo}
          className="fill-white cursor-pointer"
          beforeInjection={(svg) => {
            svg.setAttribute("class", "w-full h-full"); // Tailwind classes for full width and height
          }}
        />
      </div>
      <div className="flex">
        <ReactSVG src={sun} className="fill-white w-15 cursor-pointer" />
        <a href="tel:7447479789" target="_blank">
          <ReactSVG src={phone} className="fill-white w-15 cursor-pointer" />
        </a>
        <a
          href="https://wa.me/7337479789?text=Hi, How are you?"
          target="_blank"
        >
          <ReactSVG src={whatsapp} className="fill-white w-15 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Header;
