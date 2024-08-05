/* eslint-disable react/prop-types */

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Loader from "./components/loader/loading";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/homepage/Hero";
import About from "./components/homepage/About";
import Role from "./components/homepage/Role";
import Skills from "./components/homepage/Skills";
import Preloading from "./components/ui/Preloading";
import SocialLinks from "./components/homepage/SocialLinks";
import Projects from "./components/homepage/Projects";
import Education from "./components/homepage/Education";
import Experience from "./components/homepage/Experience";
import Contact from "./components/homepage/Contact";
import Footer from "./components/ui/Footer";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]); // Creating a sectionRefs array

  // Scrub animation of section headings
  useEffect(() => {
    //TODO Learn useContext and useRef here
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
        ScrollTrigger.refresh();
      });
    });
  }, []);

  const [loading, setLoading] = useState(true);

  return (
    <div className="max-w-screen-full overflow-hidden bg-secondary-100">
      {loading ? (
        <Preloading setLoading={setLoading} />
      ) : (
        <>
          <NavBar sectionRefs={sectionRefs.current} />
          <Hero />
          <main className="px-5 md:px-10 xl:px-20 2xl:px-28s">
            <Role forwardedRef={(el) => (sectionRefs.current[0] = el)} />
            <About />
            <Skills forwardedRef={(el) => (sectionRefs.current[1] = el)} />
            <SocialLinks title={"social-links"} />
            <Projects forwardedRef={(el) => (sectionRefs.current[2] = el)} />
            <Education />
            <Experience forwardedRef={(el) => (sectionRefs.current[3] = el)} />
            <Contact />
          </main>
          {/* <Contact /> */}
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
