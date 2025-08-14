import React from "react";
import TopText from "./TopText";
import TopPic from "./TopPic";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import TopSub from "./TopSub";

const TopMain = () => {
  return (
    <div id="top" className="w-full max-w-7xl mx-auto px-6 py-60 mt-[120px]">
      <div className="flex flex-col lg:flex-row items-center justify-between ">
        <motion.div
          className="flex-shrink-0 w-2/5"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <TopPic />
        </motion.div>
        <motion.div
          className="flex-1 w-3/5"
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <TopText />
        </motion.div>
      </div>
    </div>
  );
};

export default TopMain;
