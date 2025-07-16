import { ReactSVG } from "react-svg";
import MatterDemo from "./MatterDemo";
import SocialLinks from "./SocialLinks";
import Hero from "./Hero";
import About from "./About";
import { useSelector } from "react-redux";

const Body = () => {
  const showAbout = useSelector((store) => store.about.aboutState);

  const scrollToLatestWorks = () => {
    const element = document.getElementById("latestWorksId");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <MatterDemo />
      {showAbout && <About />}
      <div className="flex -mt-[30%] relative">
        <Hero />
        <SocialLinks type="hero" />
      </div>
      <div className="relative self-center after:content-[''] after:absolute after:w-[2px] after:h-5 after:bg-[#444] after:left-1/2 after:-translate-x-1/2 after:top-[100px]">
        <button
          className="bg-[#4595eb] py-2 px-5 rounded font-bold bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group mb-20"
          onClick={scrollToLatestWorks}
        >
          Latest Works
          <ReactSVG
            src="data:image/svg+xml;base64,PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmNjPSJodHRwOi8vd3d3LmNyZWF0aXZlY29tbW9ucy5vcmcvbnMvIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIiB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIgdmVyc2lvbj0iMS4xIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDQiIGhlaWdodD0iNDQiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBjbGFzcz0iYWJzb2x1dGUgdG9wLTEvMiAtdHJhbnNsYXRlLXktMS8yIC1yaWdodC03IGdyb3VwLWhvdmVyOi1yaWdodC04IGVhc2UtaW4tb3V0IGR1cmF0aW9uLTEwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtOTUyLjM2MjE4KSI+PHBhdGggc3R5bGU9InRleHQtaW5kZW50OiAwO3RleHQtdHJhbnNmb3JtOiBub25lO2RpcmVjdGlvbjogbHRyO2Jsb2NrLXByb2dyZXNzaW9uOiB0YjtiYXNlbGluZS1zaGlmdDogYmFzZWxpbmU7Y29sb3I6ICMwMDAwMDA7ZW5hYmxlLWJhY2tncm91bmQ6IGFjY3VtdWxhdGU7IiBkPSJtIDg4Ljk5OTgzNSwxMDAyLjM2MjEgYyAwLC0wLjQ2MjggLTAuMjc5OSwtMS4wNzczIC0wLjU2MzksLTEuMzc1NSBsIC0xNS45OTk3LC0xNy4wMDAyNiBjIC0wLjc0NywtMC43NzIzIC0xLjk1NzIsLTAuODYxOCAtMi44MjgxLC0wLjA3OCAtMC43Nzg2LDAuNzAwNyAtMC43OTgsMi4wNjczIC0wLjA3OCwyLjgyODIgbCAxMi44NDM1LDEzLjYyNTE2IC02OS4zNzM0NywwIGMgLTEuMTA0NiwwIC0yLDAuODk1NCAtMiwyIDAsMS4xMDQ2IDAuODk1NCwyLjAwMDEgMiwyLjAwMDEgbCA2OS4zNzM0NywwIC0xMi44NDM1LDEzLjYyNTIgYyAtMC43MTk5LDAuNzYwOCAtMC42Njg4LDIuMDkzOCAwLjA3OCwyLjgyODEgMC43ODg1LDAuNzc1MiAyLjA5MjUsMC43MDYyIDIuODI4MSwtMC4wNzggbCAxNS45OTk3LC0xNy4wMDAyIGMgMC40NzAxLC0wLjQ2MTEgMC41NTYsLTAuOTA1MiAwLjU2MzksLTEuMzc0OCB6IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgbWFya2VyPSJub25lIiB2aXNpYmlsaXR5PSJ2aXNpYmxlIiBkaXNwbGF5PSJpbmxpbmUiIG92ZXJmbG93PSJ2aXNpYmxlIj48L3BhdGg+PC9nPjwvc3ZnPg=="
            beforeInjection={(svg) => {
              svg.setAttribute(
                "class",
                "absolute rotate-90 left-1/2 -translate-x-1/2 top-11 group-hover:top-12 ease-in-out duration-100"
              );
              svg.setAttribute("width", "44");
              svg.setAttribute("height", "44");
              svg.setAttribute("viewBox", "0 0 100 100");
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Body;
