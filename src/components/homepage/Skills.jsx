/* eslint-disable react/prop-types */

import SkillUi from "../ui/SkillUi";
import Heading from "../ui/Heading";

export default function Skills({ forwardedRef }) {
  const programmingItems = [
    "C language",
    "C++ language",
    "Java Core",
    "Python(familiar)",
    "Html",
    "Css",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "Api-Integration"
  ];

  const devopsTools = [
    "Docker",
    "Jenkins",
    "CI/CD",
    "Shell Scripting",
    "AWS",
    "Docker"
  ];

  const databases = [
    "MongoDb",
    "SQL",
  ];

  const toolItems = [
    "Visual - studio",
    "GitHub",
    "Git",
    "Linux",
  ];

  return (
    <section
      id="skills"
      ref={forwardedRef}
      className="my-[10%] mx-auto max-w-screen-xl"
      aria-label="skills"
    >
      <Heading title="my skills" />
      <div className=" flex justify-center items-center flex-col">
        <SkillUi
          title="My programming languages and Web Technologies"
          description="I focus on all things design and web related. With each of my
          services, my goal is to deliver an impactful and elevating
          digital experience for everyone."
          items={programmingItems}
        />
        <SkillUi
          title="DevOps Tools"
          items={devopsTools}
        />
        <SkillUi
          title="DataBases"
          // description="I focus on databases. With each of my
          // services, my goal is to deliver an impactful and elevating
          // digital experience for everyone."
          items={databases}
        />
        <SkillUi
          title="my development toolboxes."
          items={toolItems}
        />
      </div>
    </section>
  );
}
