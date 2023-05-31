import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute
            dark:text-dark dark:bg-light
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
            xs:text-dark xs:dark:text-light xs:font-bold
            "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightLg md:dark:bg-circularDarkLg
    sm:bg-circularLightLg sm:dark:bg-circularDarkLg

    "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
    lg:p-6 md:p-4 xs:text-xs xs:p-2 md:hidden
    "
          whileHover={{ scale: 1.05 }}
        >
          Technologies
        </motion.div>

        <Skill name="HTML" x="-10vw" y="0vw" />
        <Skill name="CSS" x="10vw" y="0vw" />
        <Skill name="JavaScript" x="0vw" y="6vw" />
        <Skill name="React" x="0vw" y="-6vw" />
        <Skill name="Docker" x="-15vw" y="8vw" />
        <Skill name="Kubernetes" x="15vw" y="-8vw" />
        <Skill name="Machine Learning" x="-15vw" y="-8vw" />
        <Skill name="TensorFlow" x="15vw" y="8vw" />
        <Skill name="PyTorch" x="-15vw" y="-8vw" />
        <Skill name="PowerBi" x="0vw" y="-15vw" />
        <Skill name="Tableau" x="0vw" y="15vw" />
        <Skill name="ASP.NET" x="26vw" y="0vw" />
        <Skill name="AWS" x="26vw" y="0vw" />
        <Skill name="Azure" x="-26vw" y="0vw" />
        <Skill name="Transformers" x="5vw" y="11vw" />
        <Skill name="NLP" x="-2vw" y="13vw" />
      </div>
    </>
  );
};

export default Skills;
