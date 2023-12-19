import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function VariantsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="w-64 flex flex-col gap-2"
      initial={false}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.button
        className="w-full flex justify-between items-center bg-purple-600 text-white p-3 px-4 rounded-lg"
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>Menu</span>
        <motion.span
          variants={{ open: { rotate: 180 }, close: { rotate: 0 } }}
          transition={{ type: "tween" }}
        >
          <svg width="15" height="15" viewBox="0 0 20 20" fill="currentColor">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.span>
      </motion.button>
      <motion.ul
        className="bg-purple-600 text-white rounded-lg"
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <motion.li className="p-3 px-4" variants={itemVariants}>
          Item 1
        </motion.li>
        <motion.li className="p-3 px-4" variants={itemVariants}>
          Item 2
        </motion.li>
        <motion.li className="p-3 px-4" variants={itemVariants}>
          Item 3
        </motion.li>
        <motion.li className="p-3 px-4" variants={itemVariants}>
          Item 4
        </motion.li>
        <motion.li className="p-3 px-4" variants={itemVariants}>
          Item 5
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
