import { motion } from "framer-motion";

export default function WhileFocus() {
  return (
    <div>
      <motion.input
        type="text"
        className="border border-black rounded-lg"
        whileFocus={{ scale: 1.2 }}
      ></motion.input>
    </div>
  );
}
