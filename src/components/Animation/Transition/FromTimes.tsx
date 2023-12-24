import { motion } from "framer-motion";

export default function FromTimes() {
  return (
    <>
      <motion.div
        className="w-48 h-48 rounded-xl bg-pink-400"
        animate={{ rotate: 180 }}
        transition={{ from: 90, duration: 2 }}
      ></motion.div>
      <motion.div
        className="w-48 h-48 rounded-xl bg-green-400"
        animate={{ scale: [0, 1, 0.5, 1] }}
        transition={{ times: [0, 0.1, 0.9, 1], duration: 3 }}
      ></motion.div>
    </>
  );
}
