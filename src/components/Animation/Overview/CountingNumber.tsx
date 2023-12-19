import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CountingNumber() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, 100, { duration: 10 });
    return controls.stop;
  }, []);

  return <motion.div>{rounded}</motion.div>;
}
