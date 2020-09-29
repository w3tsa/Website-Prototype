import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Main.scss";
import arrowImg from "./assets/down-arrow.png";
const Main = () => {
  AOS.init();
  return (
    <div>
      <main>
        <motion.div
          className="main-text"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "Tween", duration: 1, delay: 1 }}
        >
          It is a long established fact that a reader will be distracted by the
          <br />
          readable content of a page when looking at its layout. The point of
          <br />
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          <br />
          letters, as opposed to using 'Content here, content here', making it
          <br />
          look like readable English.
        </motion.div>
        <motion.div
          className="main-image"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "Tween", duration: 1, delay: 1.5 }}
        >
          <img
            alt="main"
            src="https://images.pexels.com/photos/3952054/pexels-photo-3952054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </motion.div>

        <div className="scroll-div" data-aos="fade-up">
          <p className="scroll-text">Scroll</p>
          <img className="arrow-img" src={arrowImg} alt="arrow" />
        </div>
      </main>
    </div>
  );
};

export default Main;
