import { motion } from "framer-motion";

export default function DelayChildren() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.5 } },
  };

  return (
    <motion.ul
      className="w-64 h-64 rounded-xl bg-purple-500 grid grid-cols-2 items-center justify-items-center"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.li
        variants={item}
        className="w-24 h-24 rounded-full bg-purple-200"
      ></motion.li>
      <motion.li
        variants={item}
        className="w-24 h-24 rounded-full bg-purple-200"
      ></motion.li>
      <motion.li
        variants={item}
        className="w-24 h-24 rounded-full bg-purple-200"
      ></motion.li>
      <motion.li
        variants={item}
        className="w-24 h-24 rounded-full bg-purple-200"
      ></motion.li>
    </motion.ul>
  );
}
