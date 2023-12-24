import { motion } from "framer-motion";

export default function InertiaSquare() {
  return (
    <motion.div
      className="w-48 h-48 rounded-xl bg-pink-600"
      animate={{
        rotate: 180,
        transition: { delay: 1, type: "inertia", velocity: 100 },
      }}
    />
  );
}
