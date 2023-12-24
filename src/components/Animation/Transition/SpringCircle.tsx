import { motion } from "framer-motion";

export default function SpringCircle() {
  return (
    <motion.div
      className="w-48 h-48 rounded-full bg-cyan-500"
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        delay: 1,
        duration: 1,
        bounce: 0.7,
        damping: 5,
        mass: 0.5,
        stiffness: 700,
        velocity: 2,
        restSpeed: 0.5,
        restDelta: 0.1,
      }}
    ></motion.div>
  );
}
