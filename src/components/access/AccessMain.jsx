import React from "react";
import AccessText from "./AccessText";
import AccessMap from "./AccessMap";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AccessMain = () => {
  return (
    <div id="access" className="w-full max-w-7xl mx-auto px-6 py-16 mt-[120px]">
      <div className="text-center mb-12">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
        >
          <AccessText />
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Kojun Coffeeへのアクセス情報とお店の詳細
          </p>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        <AccessMap />
      </motion.div>
    </div>
  );
};

export default AccessMain;
