import { motion } from "framer-motion";

export default function WhileInView() {
  return (
    <motion.div
      className="w-48 h-48 bg-purple-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => console.log("Viewport Entered")}
      onViewportLeave={() => console.log("Viewport Leaved")} // viewport { once : true } 일 때는 작동하지 않음
    ></motion.div>
  );
}
