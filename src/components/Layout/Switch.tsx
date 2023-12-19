import { motion } from "framer-motion";
import { useState } from "react";

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default function Switch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div
      className={
        `flex w-64 bg-purple-300 p-3 rounded-[70px] ` +
        `${isOn ? "justify-end" : "justify-start"}`
      }
      onClick={() => setIsOn((prev) => !prev)}
    >
      <motion.div
        className={`flex w-32 h-32 bg-white rounded-full `}
        layout
        transition={spring}
      ></motion.div>
    </div>
  );
}
