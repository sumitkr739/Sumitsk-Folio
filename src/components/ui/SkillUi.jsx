// src/components/ui/SkillUi.jsx
/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const SkillUi = ({ title, description, items }) => {
  const skillUiRef = useRef(null);
  const headingRef = useRef(null);
  const bodyRef = useRef(null);
  const lineRef = useRef(null);
  const servicesRef = useRef(null);

  // Framer Motion Scroll Animations
  const { scrollYProgress } = useScroll({
    target: skillUiRef,
    offset: ["0 1", "1 1"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  // GSAP and ScrollTrigger animations
  useEffect(() => {
    ScrollTrigger.create({
      trigger: skillUiRef.current,
      start: "150px bottom",
      animation: gsap
        .timeline()
        .to(
          headingRef.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          bodyRef.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        )
        .to(
          lineRef.current,
          { width: "100%", ease: "power4.inOut", duration: 1.5 },
          0.2
        )
        .to(
          servicesRef.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.5
        ),
      toggleActions: "play none none none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={skillUiRef}
      style={{ scale, opacity }}
      className="cardContainer sticky top-0 mt-10 flex justify-between items-center flex-col gap-40 md:flex-rows-3 md:gap-24 2xl:gap-36 xl:gap-32 select-none"
    >
      <div className="Card relative rounded-lg border bg-gradient-to-r from-[#D1D2C4] to-[#D1D2C4] p-[2rem]  w-[23rem] sm:w-[35rem] md:w-[40rem] lg:w-[60rem] xl:w-[70rem] 2xl:w-[78rem]">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-8">
          <div className="space-y-6 md:flex-1">
            <div className="space-y-3 2xl:space-y-10">
              <h3
                ref={headingRef}
                className="text-heading-3 sm:text-4xl 2xl:text-7xl font-semibold leading-tight translate-y-10 opacity-0 "
              >
                {title}
              </h3>
              <p
                ref={bodyRef}
                className="max-w-md xl:max-w-2xl text-body-1 2xl:text-3xl translate-y-10 opacity-0"
              >
                {description}
              </p>
            </div>
            <div
              ref={lineRef}
              className="h-1 w-0 bg-[#1E1E1E] opacity-50 md:hidden"
            ></div>
          </div>

          <div
            ref={servicesRef}
            className="mt-6 md:mt-0 select-none leading-[2.3rem] text-[#404551] md:leading-[2.5rem] lg:leading-[3.4rem] md:flex-1 md:translate-y-10 md:opacity-0"
          >
            {items.map((item, index) => (
              <p
                key={index}
                className="font-general text-special 2xl:text-7xl font-extrabold"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillUi;
