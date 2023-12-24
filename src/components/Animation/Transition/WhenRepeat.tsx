import { motion } from "framer-motion";

export default function WhenRepeat() {
  const list = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        repeat: 1,
        // repeatType: "reverse", 작동은 하지만 오류 생김
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <motion.ul
        className="w-64 h-32 rounded-xl bg-blue-500 flex justify-around items-center"
        variants={list}
        animate="hidden"
      >
        <motion.li
          className="w-24 h-24 rounded-xl bg-blue-200"
          variants={item}
        ></motion.li>
        <motion.li
          className="w-24 h-24 rounded-xl bg-blue-200"
          variants={item}
        ></motion.li>
      </motion.ul>
      <motion.div
        className="w-48 h-48 rounded-full bg-yellow-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      ></motion.div>
    </>
  );
}
