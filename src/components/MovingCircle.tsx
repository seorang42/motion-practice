import { motion } from "framer-motion";

export default function MovingCircle() {
  return (
    <motion.div
      className="w-48 h-48 bg-purple-500"
      animate={{
        scale: [0.5, 1, 1, 0.5, 0.5],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
}
