/** @format */

import { useEffect, useState } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

const Cursor = () => {
  const [largeCircle, setLargeCircle] = useState({ x: 0, y: 0 });
  const [mediumCircle, setMediumCircle] = useState({ x: 0, y: 0 });
  const [smallCircle, setSmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setLargeCircle({ x: e.clientX, y: e.clientY });
      setMediumCircle({ x: e.clientX, y: e.clientY });
      setSmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div>
      <motion.div
        animate={{
          x: largeCircle.x - 32,
          y: largeCircle.y - 32,
          transition: { type: "spring", mass: 3 },
        }}
        className="large_circle"
      ></motion.div>
      <motion.div
        animate={{
          x: mediumCircle.x - 16,
          y: mediumCircle.y - 16,
          transition: { type: "spring", mass: 2 },
        }}
        className="medium_circle"
      ></motion.div>
      <motion.div
        animate={{
          x: smallCircle.x - 8,
          y: smallCircle.y - 8,
          transition: { type: "spring", mass: 1 },
        }}
        className="small_circle"
      ></motion.div>
    </div>
  );
};

export default Cursor;
