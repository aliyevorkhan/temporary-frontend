import { useEffect, useState } from "react";

type Device = "lg" | "md" | "sm" | "xl" | "2xl";

const useResponsive = () => {
  const [device, setDevice] = useState<Device>();

  const isMobile = device === "sm";
  const isTablet = device === "md";
  const isDesktop = device === "lg" || device === "xl" || device === "2xl";

  const resizeHandler = () => {
    if (window.innerWidth >= 1536) {
      setDevice("2xl");
    } else if (window.innerWidth >= 1280) {
      setDevice("xl");
    } else if (window.innerWidth >= 1024) {
      setDevice("lg");
    } else if (window.innerWidth >= 768) {
      setDevice("md");
    } else {
      setDevice("sm");
    }
  };

  useEffect(() => {
    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [setDevice]);

  return { device, isDesktop, isMobile, isTablet };
};

export default useResponsive;
