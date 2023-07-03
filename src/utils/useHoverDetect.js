import { useEffect, useState } from "react";

export const useHoverDetect = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  return { setHovered };
};
