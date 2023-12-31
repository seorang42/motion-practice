import { motion } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return point;
}

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="w-12 h-12 rounded-full bg-red-700 opacity-50"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 3,
        stiffness: 50,
        restDelta: 0.001,
      }}
    />
  );
}
