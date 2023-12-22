import { TapInfo, motion } from "framer-motion";

export default function WhileHoverTap() {
  function onTap(event: MouseEvent, info: TapInfo) {
    console.log(event);
    console.log(info.point.x, info.point.y);
  }
  // onTapStart(event, info), onTapCancel(event, info)
  // onPan(event, info : PanInfo), onPanStart(event, info), onPanEnd(event, info)

  return (
    <motion.div
      className="w-24 h-12 rounded-3xl bg-blue-500"
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onHoverStart={() => console.log("Hover starts")}
      onHoverEnd={() => console.log("Hover ends")}
      whileTap={{ scale: 0.9 }}
      onTap={onTap}
    ></motion.div>
  );
}
