import WhileDrag from "@/components/Animation/Gestures/WhileDrag";
import WhileFocus from "@/components/Animation/Gestures/WhileFocus";
import WhileHoverTap from "@/components/Animation/Gestures/WhileHoverTap";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center p-12 gap-10">
      <WhileHoverTap />
      <WhileFocus />
      <WhileDrag />
    </div>
  );
}
