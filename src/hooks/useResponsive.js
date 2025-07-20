import { useState, useEffect } from "react";

const useResponsive = () => {
  const [screenSizes, setScreenSizes] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLarge: false,
  });

  useEffect(() => {
    const updateScreenSizes = () => {
      const width = window.innerWidth;
      setScreenSizes({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024 && width < 1280,
        isLarge: width >= 1280,
      });
    };

    updateScreenSizes();
    window.addEventListener("resize", updateScreenSizes);
    return () => window.removeEventListener("resize", updateScreenSizes);
  }, []);

  return screenSizes;
};

export default useResponsive;
