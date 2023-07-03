import { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon, services_detail }) => {
  const [cardFlipped, setCardFlipped] = useState(false);

  const flipCard = () => setCardFlipped(!cardFlipped);

  return (
    <Tilt
      options={{ reverse: true, reset: false, scale: 1 }}
      className="xs:w-[250px] w-full "
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <motion.div
          onClick={flipCard}
          style={{
            perspective: "1000px",
            cursor: "pointer",
            transformStyle: "preserve-3d",
            rotateY: cardFlipped ? 180 : 0,
          }}
          animate={{ rotateY: cardFlipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
          initial={{ rotateY: 0 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          {/* Front of the card */}
          <motion.img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain relative"
            style={{
              rotateY: cardFlipped ? "180deg" : "0deg",
              backfaceVisibility: "hidden",
              visibility: cardFlipped ? "hidden" : "visible",
              transform: `rotateY(${cardFlipped ? 0 : 180}deg)`,
            }}
          />
          <motion.h3
            className="text-white text-[20px] font-bold text-center relative"
            style={{
              rotateY: cardFlipped ? "180deg" : "0deg",
              backfaceVisibility: "hidden",
              visibility: cardFlipped ? "hidden" : "visible",
              transform: `rotateY(${cardFlipped ? 0 : 180}deg)`,
            }}
          >
            {title}
          </motion.h3>
          {/* Back of the card */}
          <motion.div
            className="flex p-3 items-center absolute w-[100%] h-[100%] top-0 left-0"
            style={{
              transform: `rotateY(${cardFlipped ? 180 : 0}deg)`,
              backfaceVisibility: "hidden",
            }}
          >
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {services_detail.map((detail, i) => (
                <div key={i} style={{ opacity: cardFlipped ? 1 : 0 }}>
                  <li
                    key={`experience-point-${i}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {detail}
                  </li>
                </div>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
        Introduction
      </p>
      <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Overview.
      </h2>
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
