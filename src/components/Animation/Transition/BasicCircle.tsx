import { motion } from "framer-motion";

export default function BasicCircle() {
  return (
    <motion.div
      className="w-48 h-48 rounded-full bg-orange-400"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: "spring",
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
    ></motion.div>
  );
}
