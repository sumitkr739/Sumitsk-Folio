/* eslint-disable react/prop-types */
import HeadingCircle from "./HeadingCircle";

export default function Heading({ title }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%]">
          <HeadingCircle />
          <h2 className="w-fit text-5xl sm:text-heading-2 underline font-medium text-secondary-600 pb-3">
            {title}
          </h2>
          <HeadingCircle />
        </div>
      </div>
    </>
  );
}
