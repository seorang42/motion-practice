import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ExitingCircle() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        Exiting Circle
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-48 h-48 bg-blue-500 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
