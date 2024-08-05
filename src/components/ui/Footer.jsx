export default function Footer() {
  function toTop() {
    window.scrollTo(0, 0);
  }

  return (
    <footer className="mt-14 flex flex-col md:flex-row items-center justify-between px-5 py-4 text-body-4 md:text-body-3">
      <div className="flex flex-col md:flex-row items-center justify-between w-full space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex space-x-1">
          <span>&copy;</span>
          <span>2024</span>
          <span className="font-extrabold uppercase 2xl:text-body-1 Nav-Logo">
            Sumit Kumar Sinha
          </span>
        </div>
        <div className="flex-grow text-center">
          <span className="text-body-4 2xl:text-body-1 p-3">
            Site designed and developed by{" "}
            <a
              href="https://linkedin.com/in/sumit-kumar-sinha-4b4a921b1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold Nav-Logo"
            >
              Sumit Kumar Sinha
            </a>{" "}
            and coded with 💖
          </span>
        </div>
      </div>
      <button
        onClick={toTop}
        className="flex items-center justify-center space-x-2 w-fit group 2xl:text-body-1 mt-4 md:mt-0"
      >
        <span className="font-extrabold uppercase hover:font-black duration-200">
          BACK TO TOP
        </span>
        <span className="group-hover:-translate-y-3 duration-300 ease-in-out">
          <svg
            className="rounded-full w-16 h-16 group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="50" cy="50" r="45" className="fill-black" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dy=".3em"
              className="fill-white underline font-bold text-[10px] sm:text-[12px] lg:text-[14px]"
            >
              Tap Here
            </text>
          </svg>
        </span>
      </button>
    </footer>
  );
}
