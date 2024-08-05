import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const helloRef = useRef(null);
  const javaRef = useRef(null);

  // animations for all Heading components

  useEffect(() => {
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");
      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",
        });
      });
    });
  }, []);

  // animation for both texts

  useEffect(() => {
    const helloElement = helloRef.current;
    const javaElement = javaRef.current;

    ScrollTrigger.create({
      trigger: helloElement,
      start: "top 80%",
      end: "bottom top",
      animation: gsap.to(helloElement, {
        y: 0,
        ease: "power4.out",
        duration: 1,
      }),
      toggleActions: "play none none none",
    });

    ScrollTrigger.create({
      trigger: javaElement,
      start: "top 80%",
      end: "bottom top",
      animation: gsap.to(javaElement, {
        y: 0,
        ease: "power4.out",
        duration: 1,
      }),
      toggleActions: "play none none none",
    });
  }, []);

  return (
    <div
      id="home"
      className="hero max-w-screen-full mx-auto bg-[#0E0E0C] text-white pt-[13rem] pb-[6rem] px-5 py-2 flex items-center justify-center select-none"
    >
      <div className="px-6">
        <div className="welcome w-full h-full">
          <p className="mx-auto text-center flex items-center justify-center flex-wrap md:flex-nowrap">
            <span className="text-[32px] font-extralight text-opacity-30">
              Welcome To My
            </span>
            <span className="portfolio-span md:text-8xl font-[IrishGrover] font-bold flex items-center ml-2">
              P
              <span className="portfolio-span md:text-8xl font-[IrishGrover] font-bold md:hidden xl:hidden 2xl:hidden lg:hidden">
                o
              </span>
              <span className="hidden md:flex">
                <svg
                  className="portfolio-pencil  h-[6vw] w-[6vw] rounded-full bg-[#0BA34E] ml-1 mr-1"
                  fill="none"
                  viewBox="0 0 131 136"
                >
                  <path
                    className="g-path"
                    data-morph="end"
                    fill="#fff"
                    d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
                  ></path>
                  <path
                    className="g-path"
                    data-morph="start"
                    fill="#fff"
                    d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
                    data-original="M65.72 109.14c10.08 0 17.76-3.78 23.04-11.34 5.4-7.68 8.1-17.64 8.1-29.88 0-12.24-2.7-22.2-8.1-29.88-5.28-7.68-12.96-11.52-23.04-11.52-9.96 0-17.7 3.84-23.22 11.52-5.4 7.68-8.1 17.64-8.1 29.88 0 12.12 2.7 22.02 8.1 29.7 5.52 7.68 13.26 11.52 23.22 11.52Zm46.08 7.02c-11.64 12.6-27.06 18.9-46.26 18.9s-34.62-6.3-46.26-18.9C7.76 103.56 2 87.48 2 67.92c0-19.56 5.76-35.64 17.28-48.24C30.92 7.08 46.34.78 65.54.78s34.62 6.3 46.26 18.9c11.64 12.6 17.46 28.68 17.46 48.24 0 19.56-5.82 35.64-17.46 48.24Z"
                  ></path>
                </svg>
              </span>
              <span className="portfolio-span font-[IrishGrover] font-bold md:text-8xl">
                rtFolio
              </span>
            </span>
          </p>
        </div>
        <br />

        <div className="helloGsap text-center mt-8 px-5 py-2 ">
          <p
            ref={helloRef}
            className="line1 text-6xl font-semibold text-secondary-600 overflow-hidden"
            style={{ transform: "translateY(50px)" }}
          >
            Hello👋, I&apos;m Sumit Kumar Sinha,
          </p>
          <p
            ref={javaRef}
            className="line2 text-6xl mt-2 text-[#E3E3DE] overflow-hidden"
            style={{ transform: "translateY(50px)" }}
          >
            Web/Devops Developer
          </p>
        </div>

        <div className="info-description px-5 py-2 text-center mt-6 max-w-screen-md mx-auto text-opacity-30">
          <p className="text-lg font-light opacity-40">
            Passionate Web developer specializing in creating robust and <br />
            efficient backend systems, also working on Devops.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
