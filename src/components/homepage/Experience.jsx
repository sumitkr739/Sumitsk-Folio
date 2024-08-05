/* eslint-disable react/prop-types */
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

import LIIcon from "../helper/LIIcon"; // Ensure the correct import name
import Heading from "../ui/Heading";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LIIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize text-secondary-600 font-bold text-2xl">
          {position}&nbsp;
          <a className="text-[#D6D47D] capitalize" href={companyLink}>
            @{company}
          </a>
        </h3>
        <span className="capitalize text-[#D1D1C7] font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className=" text-gray-300 font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = ({ forwardedRef }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <section
      ref={forwardedRef}
      id="experience"
      className="select-none  mx-auto max-w-screen-xl"
      aria-label="experience"
    >
      <div className="" aria-label="experience">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          <Heading title="Experience" />
        </h2>

        <div
          ref={ref}
          className="w-[99%] md:w-[75%]  lg:w-[75%]  xl:w-[75%]  2xl:w-[75%] mx-auto relative"
        >
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-9 top-0 w-[4px] h-full bg-[#B6BAAB] origin-top"
          />
          <ul className="w-full flex flex-col items-center justify-between ml-6">
            <Details
              position="Cyber Security Intern"
              company="Edunet Foundation"
              time="10/2023-11/2023"
              address="Remote"
              work="Worked as a Cyber Security Intern at Edunet Foundationt, where I was responsible for developing new features and improving the performance of the company's task based solutions."
            />

            <Details
              position="App Developer"
              company="Bharat Intern"
              time="07/2023-08/2023"
              address="Remote"
              work="Worked as a App Developer at Bharat Intern during a task-based internship, where I was responsible for developing new features and improving the performance of the company's task based solutions."
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
