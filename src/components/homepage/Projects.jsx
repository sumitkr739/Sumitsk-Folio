/* eslint-disable react/prop-types */

import React from "react";
import Heading from "../ui/Heading";
import ProjectsData from "../ui/ProjectsData";
import ProjectUi from "../ui/ProjectUi";

function Projects({ forwardedRef }) {
  return (
    <section
      id="projects"
      ref={forwardedRef}
      className="my-[10%] mx-auto max-w-screen-xl"
      aria-label="projects"
    >
      <Heading title="projects" />
      <div className="flex justify-between items-center pt-10 ">
        <div className="">
          {ProjectsData.map((project, index) => (
            <React.Fragment key={index}>
              <ProjectUi {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
