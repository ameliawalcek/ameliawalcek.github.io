import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={{reverse: true, reset: false}} className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("left", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className='sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider'>Introduction</p>
      <h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Overview.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      As a highly driven Full Stack Developer, I am deeply committed to building
      end-to-end applications and solving complex problems. My experience using
      React/React Native Node.js, MySQL, and MongoDB enables me to create highly
      scalable and efficient web and mobile applications.
      <br />
      <br />I am seeking a full-time remote position where I can leverage my
      skills. I am committed to staying up-to-date with the latest industry
      trends and best practices, and I thrive in fast-paced, collaborative work
      environments.
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10 justify-center">
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  </>
);

export default SectionWrapper(About, "about");
