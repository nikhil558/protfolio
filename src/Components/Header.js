import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import nlogo from "../assets/nlogo.svg";
import { ReactSVG } from "react-svg";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="z-10 absolute pointer-events-auto flex items-center justify-between pl-4 lg:pl-[10%] w-full px-4 py-4 mt-4 max-w-screen-xl mx-auto">
      <div className="w-12 md:w-15">
        <ReactSVG
          src={nlogo}
          className={`cursor-pointer ${
            theme === "dark"
              ? "fill-gray-400 hover:fill-white"
              : "fill-gray-600 hover:fill-gray-900"
          }`}
          beforeInjection={(svg) => {
            svg.setAttribute("class", "w-full h-full"); // Tailwind classes for full width and height
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>
        <a
          href="tel:+917337479789"
          target="_blank"
          className=""
          rel="noopener noreferrer"
        >
          <div
            className={`w-12 h-12 p-2 cursor-pointer hover:scale-110 transition-transform ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>
        </a>
        <a
          href="https://wa.me/7337479789?text=Hi, "
          target="_blank"
          className="hidden sm:block"
          rel="noopener noreferrer"
        >
          <div
            className={`w-12 h-12 p-2 cursor-pointer hover:scale-110 transition-transform ${
              theme === "dark" ? "text-white" : "text-green-500"
            }`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Header;
