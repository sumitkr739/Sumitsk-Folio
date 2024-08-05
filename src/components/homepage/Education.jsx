// @flow strict

import EducationData from "../ui/EducationData";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../helper/AnimationLottie";
import GlowCard from "../helper/GlowCard";
import lottieFile from "../../assets/lottie/study.json";
import Heading from "../ui/Heading";

function Education() {
  return (
    <section
      id="education"
      className="my-[10%] mx-auto max-w-screen-xl"
      aria-label="education"
    >
      <Heading title="education" />

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {EducationData.map((education) => (
                <GlowCard
                  key={education.id}
                  identifier={`education-${education.id}`}
                >
                  <div className="p-3 relative text-white">
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#D1D2C4] font-[IrishGrover]">
                        {education.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-secondary-600 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base text-[#0DA34E] Nav-Logo font-[IrishGrover] sm:text-xl mb-2 font-medium uppercase">
                          {education.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {education.institution}
                        </p>
                        <p className="text-sm sm:text-base">
                          <span className="text-secondary-600 fold-bold Nav-Logo">
                            GRADE
                          </span>{" "}
                          : {education.grade}
                        </p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
