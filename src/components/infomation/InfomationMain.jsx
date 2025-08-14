import React from "react";
import InfomationText from "./InfomationText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const InfomationMain = () => {
  return (
    <div id="infomation">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        <InfomationText />
      </motion.div>
    </div>
  );
};

export default InfomationMain;
