import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export default function CircleProgress() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="relative w-full flex justify-center">
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="-rotate-90 absolute left-10"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          style={{
            stroke: "black",
            strokeWidth: "15%",
            opacity: "30%",
            fill: "none",
          }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          style={{
            stroke: "blue",
            strokeWidth: "15%",
            fill: "none",
            strokeDashoffset: 0,
            pathLength: scrollXProgress,
          }}
        ></motion.circle>
      </svg>
      <ul
        ref={ref}
        className="p-8 bg-blue-500 flex gap-5 w-3/4 overflow-x-scroll"
      >
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
        <li className="shrink-0 w-48 h-64 bg-white"></li>
      </ul>
    </div>
  );
}
