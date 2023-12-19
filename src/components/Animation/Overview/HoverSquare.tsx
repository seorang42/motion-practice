import { motion } from "framer-motion";

export default function HoverSquare() {
  return (
    <motion.div
      className="w-48 h-48 bg-pink-500"
      initial={{ opacity: 0.6 }}
      whileHover={{ scale: [null, 1.5, 1.4] }}
      whileTap={{ scale: 1.3 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
}
