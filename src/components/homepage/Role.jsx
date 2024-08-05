/* eslint-disable react/prop-types */

export default function Role({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="role"
      className="select-none flex my-20 md:my-[12%] py-10 px-10 flex-col items-center justify-center overflow-hidden nav-change"
      aria-label=""
    >
      <div className="flex flex-col md:flex-row w-full items-center space-y-10">
        <h1 className="text-heading-1 font-medium text-secondary-400 leading-[1.25em] md:leading-[1.08em] text-xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[6rem] 3xl:text-[9rem] max-w-screen-xl 2xl:max-w-none text-center md:text-left px-4 custom-font-size ">
          I actively create web development and devops projects that inspire & connect
          innovation & Technology.
        </h1>
      </div>
    </section>
  );
}
