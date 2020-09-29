import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Nav.scss";
const Nav = () => {
  const [menuBar, setMenuBar] = useState(false);

  const handleClick = () => {
    setMenuBar(!menuBar);
  };

  return (
    <div>
      <header>
        <h1 className={"brand " + (menuBar ? "open" : "close")}>brand</h1>
        <motion.div
          className={"menu-bar " + (menuBar ? "menu-open" : "menu-close")}
          onClick={handleClick}
          animate={menuBar ? { rotate: -30 } : { rotate: 0 }}
          transition={{
            type: "Tween",
            duration: 0.5
          }}
        ></motion.div>
      </header>
      <motion.section
        className="menu"
        animate={menuBar ? { y: 0 } : { y: -1000 }}
        transition={{ type: "Tween", duration: 1 }}
      >
        <motion.ul
          className={"menu-lists " + (menuBar ? "open" : "close")}
          animate={menuBar ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <li className="menu-items">
            <h2>Projects</h2>
            <p>Look at my Projects</p>
          </li>
          <li className="menu-items">
            <h2>Works</h2>
            <p>Look at my Projects</p>
          </li>
          <li className="menu-items">
            <h2>Contact</h2>
            <p>Look at my Projects</p>
          </li>
        </motion.ul>
      </motion.section>
    </div>
  );
};

export default Nav;
