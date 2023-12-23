import { motion } from "framer-motion";
import { useState } from "react";

export default function ExpandingBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={`bg-pink-600 flex justify-center items-center ${
        isOpen ? "w-[400px] h-[200px]" : "w-[100px] h-[100px]"
      }`}
      initial={{ borderRadius: 50 }}
      onClick={() => setIsOpen((prev) => !prev)}
      transition={{ layout: { duration: 0.3 } }}
    >
      <motion.div
        layout
        className="w-12 h-12 rounded-full bg-white"
        transition={{ layout: { duration: 0.3 } }}
      ></motion.div>
    </motion.div>
  );
}
