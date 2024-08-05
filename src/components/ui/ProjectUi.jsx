/* eslint-disable react/prop-types */

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../../index.css";

const Project = ({
  id,
  title,
  description,
  image,
  color,
  year,
  tools,
  link,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 flex flex-col lg:flex-row w-full gap-16"
    >
      {/* Title and Description */}
      <div className="text-white font-bold lg:w-1/2 p-3 lg:p-6">
        <h3 className="inline-block text-[2rem]">
          <span className="text-[4rem] text-[#0DA34E]">{id} </span>
          {title}
        </h3>
        <p className="text-secondary-600 ">{description}</p>
      </div>

      {/* Card and Tools/Year Section */}
      <div className="flex flex-col lg:w-1/2">
        {/* Card Section */}
        <section
          className="bg-gray-100 flex-grow flex flex-col border border-black/5 rounded-lg overflow-hidden relative sm:h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 cursor-hover-target"
          style={{ backgroundColor: color }}
        >
          <a target="_blank" rel="noreferrer" href={link}>
            <img
              className="img w-full h-full object-cover duration-700 ease-in-out group-hover:scale-105"
              src={image}
              alt="ProjectImages"
              width="800"
              height="600"
            />
          </a>
        </section>

        {/* Tools and Year */}
        <div className="flex justify-center lg:justify-start mt-4">
          <div className="flex space-x-2">
            <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4">
              {year}
            </p>
            <p className="rounded-full bg-transparent border border-secondary-600 flex justify-center items-center px-4 py-1 text-secondary-600 text-body-4">
              {tools}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
