import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";

export default function WhileDrag() {
  const constraintRef = useRef(null);
  const dragControls = useDragControls();

  function startDrag(event: PointerEvent) {
    dragControls.start(event, { snapToCursor: true });
  }

  return (
    <div>
      <motion.div
        className="w-48 h-48 rounded-full bg-orange-400"
        drag // drag="x", drag="y"
        whileDrag={{ scale: 1.2 }}
        dragConstraints={{ top: 0, left: -100, right: 100, bottom: 100 }}
      ></motion.div>
      <div
        className="mt-48 w-64 h-64 bg-black flex justify-center items-center"
        ref={constraintRef}
      >
        <motion.div
          className="w-12 h-12 rounded-full bg-white"
          drag
          dragConstraints={constraintRef}
          dragSnapToOrigin
          dragElastic={0}
          dragMomentum={false}
          dragTransition={{
            bounceStiffness: 600,
            bounceDamping: 10,
            // Transition에서 추가
            modifyTarget: (target) => Math.round(target / 50) * 50,
            power: 0.2,
            timeConstant: 200,
            restDelta: 10,
            min: 0,
            max: 100,
          }}
          dragPropagation
          onDrag={(event, info) => console.log(info.point.x, info.point.y)}
          // onDragStart(event, info), onDragEnd(event, info)
        ></motion.div>
      </div>
    </div>
  );
}
