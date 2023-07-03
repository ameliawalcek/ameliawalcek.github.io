import { useEffect, useState } from "react";

export const useDeviceDetect = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const mobile =
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        userAgent
      );

    setMobile(mobile);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
};
