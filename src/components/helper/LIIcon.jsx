/* eslint-disable react/prop-types */

import { motion, useScroll } from "framer-motion";

function LIIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-white">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-[#0BA34E] stroke-1 fill-none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-[#0BA34E] stroke-[5px] fill-none"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          cx="50"
          cy="50"
          r="10"
          className="animate-pulse stroke-[#0BA34E] stroke-1 fill-none"
        />
      </svg>
    </figure>
  );
}

export default LIIcon;
