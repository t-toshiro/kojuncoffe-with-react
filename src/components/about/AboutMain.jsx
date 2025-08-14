import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import AboutText from "./AboutText";

const AboutMain = () => {
  return (
    <div id="about" className="w-full max-w-7xl mx-auto px-6 py-16 mt-[120px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <AboutText />
        </motion.div>
        <div className="flex-shrink-0">
          {/* 画像やその他のコンテンツがある場合はここに */}
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
