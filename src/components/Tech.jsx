import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <div className="w-full flex justify-center pb-10">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-s-3xl leading-[30px]"
          initial="initial"
          animate="animate"
        >
          <p className="justify-center sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Click, drag, and interact...
          </p>
        </motion.p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
