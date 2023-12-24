import BasicCircle from "@/components/Animation/Transition/BasicCircle";
import DelayChildren from "@/components/Animation/Transition/DelayChildren";
import FollowPointer from "@/components/Animation/Transition/FollowPointer";
import FromTimes from "@/components/Animation/Transition/FromTimes";
import InertiaSquare from "@/components/Animation/Transition/InertiaSquare";
import SpringCircle from "@/components/Animation/Transition/SpringCircle";
import TransitionEnd from "@/components/Animation/Transition/TransitionEnd";
import WhenRepeat from "@/components/Animation/Transition/WhenRepeat";

export default function App() {
  return (
    <>
      <FollowPointer />
      <div className="flex flex-col justify-center items-center p-12 gap-10">
        <BasicCircle />
        <DelayChildren />
        <WhenRepeat />
        <FromTimes />
        <SpringCircle />
        <InertiaSquare />
        <TransitionEnd />
      </div>
    </>
  );
}
