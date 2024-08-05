/* eslint-disable react/prop-types */
import Heading from "../ui/Heading";
import "../../index.css";
import Cursor from "../ui/Cursor";
// import { Icon } from "@iconify/react";

const SocialLinks = ({ title }) => {
  return (
    <section
      id="social-links"
      className="my-[10%] mx-auto max-w-screen-xl"
      aria-label="social-links"
    >
      <div>
        <Heading title={title} />
      </div>

      <div
        id="cardContainer"
        className="flex justify-center items-center p-5 mx-auto"
      >
        <div
          id="card"
          className="flex flex-col md:flex-row gap-4 w-[100vw] mx-20 px-50 md:px-10 sm:px-10 justify-center items-center"
        >
          {/* Linkedin-linkBox */}
          <div className="github-linkBox bg-[#1e1e1e] rounded-md w-[18rem] h-[12rem] sm:w-[20rem] sm:h-[13rem] md:w-[20rem] md:h-[10rem] xl:w-[20rem] xl:h-[19rem] 2xl:w-[25rem] 2xl:h-[23rem] flex justify-center items-center flex-col gap-4">
            <h1 className="gif-background underline text-white uppercase font-bold text-4xl">
              Linkedin
            </h1>
            <div className="bg-[#D1D2C4] flex justify-center items-center p-1 rounded-md w-[17rem] h-[7rem] sm:w-[19rem] sm:h-[8rem] md:w-[13rem] md:h-[6rem] lg:w-[18rem] lg:h-[8rem] xl:w-[19rem] xl:h-[14rem] 2xl:w-[22rem] 2xl:h-[17rem]">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sumit-kumar-sinha-4b4a921b1"
                className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
              >
                <p className=" flex-col sm:text-xs md:text-sm lg:text-xl 2xl:text-3xl xl:p-5">
                  Connect with me on LinkedIn for professional updates and
                  networking.
                </p>
                {/* <Icon icon="mdi:linkedin" color="#666" /> */}
                <p className="text-[#665C51] font-bold underline xl:p-5">
                  View LinkedIn
                </p>
              </a>
            </div>
          </div>

          {/* Github-linkBox */}
          <div className="linkedin-linkBox bg-[#1e1e1e] rounded-md w-[18rem] h-[12rem] sm:w-[20rem] sm:h-[13rem] md:w-[20rem] md:h-[10rem] xl:w-[20rem] xl:h-[19rem] 2xl:w-[25rem] 2xl:h-[23rem] flex justify-center items-center flex-col gap-4">
            <h1 className="gif-background underline text-white uppercase font-bold text-4xl">
              GitHub
            </h1>
            <div className="bg-[#D1D2C4] rounded-md flex justify-center items-center p-1 w-[17rem] h-[7rem] sm:w-[19rem] sm:h-[8rem] md:w-[13rem] md:h-[6rem] lg:w-[18rem] lg:h-[8rem] xl:w-[19rem] xl:h-[14rem] 2xl:w-[22rem] 2xl:h-[17rem]">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sumitkr739"
                className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
              >
                <p className=" flex-col sm:text-xs md:text-sm lg:text-xl 2xl:text-3xl xl:p-5">
                  Explore my projects and contributions on GitHub.
                </p>
                {/* <Icon icon="mdi:github" color="#666" /> */}
                <p className="text-[#665C51] font-bold underline xl:p-5">
                  View GitHub
                </p>
              </a>
            </div>
          </div>

          {/* leetcode-linkBox */}
          <div className="leetcode-linkBox bg-[#1e1e1e] rounded-md w-[18rem] h-[12rem] sm:w-[20rem] sm:h-[13rem] md:w-[20rem] md:h-[10rem] xl:w-[20rem] xl:h-[19rem] 2xl:w-[25rem] 2xl:h-[23rem] flex justify-center items-center flex-col gap-4">
            <h1 className="gif-background underline text-white uppercase font-bold text-4xl">
              Leetcode
            </h1>
            <div className="bg-[#D1D2C4] rounded-md flex justify-center items-center p-1 flex-col w-[17rem] h-[7rem] sm:w-[19rem] sm:h-[8rem] md:w-[13rem] md:h-[6rem] lg:w-[18rem] lg:h-[8rem] xl:w-[19rem] xl:h-[14rem] 2xl:w-[22rem] 2xl:h-[17rem]">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://leetcode.com/u/"
                className="img group inline-block overflow-hidden duration-200 ease-linear hover:rounded-3xl"
              >
                <p className=" sm:text-xs md:text-sm lg:text-xl 2xl:text-3xl xl:p-5">
                  Explore my coding journey and problem-solving solutions on
                  LeetCode.
                </p>
                {/* <Icon icon="mdi:leetcode" color="#666" /> */}
                <p className="text-[#665C51] font-bold underline xl:p-5">
                  View Leetcode
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Cursor />
    </section>
  );
};

export default SocialLinks;
