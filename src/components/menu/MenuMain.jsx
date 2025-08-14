import AllMenu from "./AllMenu";
import MenuText from "./MenuText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const MenuMain = () => {
  return (
    <div id="menu" className="w-full max-w-7xl mx-auto px-6 py-16 mt-[120px]">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
      >
        <MenuText />
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AllMenu />
      </motion.div>
    </div>
  );
};

export default MenuMain;
