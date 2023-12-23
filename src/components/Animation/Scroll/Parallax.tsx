import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function ImageBox({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  // 시차는 작동하나 scroll-snap-align 작동 안 함
  return (
    <section
      className="h-screen flex justify-center items-center snap-center relative bg-red-700"
      style={{ perspective: "500px" }}
    >
      <div
        className="w-[300px] h-[400px] relative max-h-[90vh] margin-[20px] bg-white overflow-hidden"
        ref={ref}
      >
        <img
          className="absolute top-0 bottom-0 right-0 left-0 w-full h-full"
          src={`https://picsum.photos/id/${id}/300/300`}
        />
      </div>
      <motion.h2
        className="text-4xl text-white"
        style={{ y, margin: "50px 0 10px" }}
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {[1, 2, 3, 4, 5].map((image) => (
        <ImageBox id={image} />
      ))}
      <div className="w-screen h-4 fixed bottom-10 flex justify-center">
        <motion.div
          className="w-4/5 h-full absolute bg-white"
          style={{ scaleX }}
        />
      </div>
    </>
  );
}
