import { motion } from "framer-motion";
import { useState } from "react";

const show = {
  display: "block",
  opacity: 1,
};

const hide = {
  opacity: 0,
  transitionEnd: { display: "none" },
};

export default function TransitionEnd() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="flex flex-col gap-10 items-center">
      <motion.div
        className="bg-purple-600 w-48 h-48 rounded-full"
        animate={isVisible ? show : hide}
      ></motion.div>
      <motion.button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </motion.button>
      {/* 버튼을 빠르게 2번을 누르면 정상적으로 작동하지 않음 */}
    </div>
  );
}
