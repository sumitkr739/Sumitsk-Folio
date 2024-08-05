/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MenuSlider from "../MenuBar/Header/MenuSlider";

import "../helper/Navsm.module.scss";

const Navbar = ({ sectionRefs }) => {
  const [isActive, setIsActive] = useState(false);
  const navBar = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(navBar.current, {
      y: 0,
      duration: 3,
      delay: 0.5,
      ease: "power4.inOut",
    });
  }, []);

  useEffect(() => {
    sectionRefs.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 375px",
        end: "bottom 300px", 
        animation: gsap
          .timeline()
          .to(navBar.current, { color: "" })
          .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0),
        toggleActions: "restart reverse restart reverse",
      });
    });
  }, [sectionRefs]);

  return (
    <header
      ref={navBar}
      className="max-w-screen-full mx-auto header fixed top-0 z-50 w-full flex items-center justify-center bg-[#0E0E0C] px-5 py-2 select-none"
    >
      <nav className="flex items-center justify-between w-full p-1 border-b-[1px] border-[#0DA34E]">
        <div className="Nav-Logo text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#0DA34E] z-50 flex items-center font-[IrishGrover] font-bold">
          <a href="/" className="group Nav-Logo relative block md:inline-block">
            Sumit Kumar Sinha
          </a>
        </div>

        <div
          className={`Nav-Links text-white flex-col md:flex md:flex-row md:items-center justify-between lg:gap-7 gap-5 text-[1rem] text-opacity-60 hidden`}
        >
          <a href="#home" className="group relative block md:inline-block">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#about" className="group relative block md:inline-block">
            <span>About</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#skills" className="group relative block md:inline-block">
            <span>Skills</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a href="#projects" className="group relative block md:inline-block">
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
          <a
            href="#experience"
            className="group relative block md:inline-block"
          >
            <span>Experience</span>
            <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-[#0DA34E] duration-300 ease-in-out group-hover:w-full"></span>
          </a>
        </div>
        <div>
          <a
            className="group relative hover:bg-transparent  md:inline-block hidden"
            href="#contact"
          >
            <span className="relative w-fit">
              <span className="absolute bottom-2 h-[0.15em] w-0 bg-white opacity-90 duration-300 ease-out group-hover:w-full"></span>
              <button className="bg-[#0DA34E] capitalize text-[1rem] px-2 py-[5px] rounded-full font-bold text-white">
                LET&apos;s TALK.
              </button>
            </span>
          </a>
        </div>
        <div className="menuSlider group p-5 2xl:hidden xl:hidden lg:hidden sm:hidden">
          <MenuSlider isActive={isActive} setIsActive={setIsActive} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
