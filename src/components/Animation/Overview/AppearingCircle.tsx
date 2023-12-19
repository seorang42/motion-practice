import { motion } from "framer-motion";

export default function AppearingCircle() {
  return (
    <motion.div
      className="w-48 h-48 bg-orange-500 rounded-full"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    />
  );
}
