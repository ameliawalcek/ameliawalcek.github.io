import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useDeviceDetect } from "../utils/useDeviceDetect";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  isMobile,
}) => {
  return (
    <motion.div
      className="green-pink-gradient p-[1px] rounded-2xl cursor-pointer shadow-card"
      variants={!isMobile && fadeIn("up", "spring", index * 0.5, 0.75)}
      onClick={() => window.open(source_code_link, "_blank")}
    >
      <Tilt
        options={{ max: 45, scale: 1, speed: 1000 }}
        className="bg-tertiary p-5 rounded-2xl h-[100%] sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-fill rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-14 h-14 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { isMobile } = useDeviceDetect();
  return (
    <>
      <motion.div
      // variants={textVariant()}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          SOME OF MY WORK
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <motion.p
        variants={!isMobile && fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        The following projects showcase my skills and experience. Each project
        is described with links to code repositories with some live demos. It
        reflects my ability to solve complex problems, work wth different
        technologies, and manage projects effectively.
      </motion.p>
      <div className="justify-center sm:mt-20 flex flex-wrap gap-7">
        {projects.map((project, i) => (
          <ProjectCard
            key={`project-${i}`}
            index={i}
            isMobile={isMobile}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
