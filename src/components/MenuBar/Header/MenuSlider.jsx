"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuButton from "./BarButton/MenuButton";
import styles from "./MenuSliders.module.scss";
import Nav from "./Nav";

const menu = {
  open: {
    width: "50vw", // Adjusted to be responsive
    height: "80vh", // Adjusted to be responsive
    top: "-7px", // Adjusted for vertical centering on smaller screens
    right: "-8px", // Adjusted for horizontal centering on smaller screens
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function MenuSlider() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <MenuButton
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
