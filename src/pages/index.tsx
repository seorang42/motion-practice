import ExitingCircle from "@/components/ExitingCircle";
import AppearingCircle from "../components/AppearingCircle";
import MovingCircle from "@/components/MovingCircle";
import HoverSquare from "@/components/HoverSquare";
import VariantsMenu from "@/components/VariantsMenu";
import CountingNumber from "@/components/CountingNumber";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center p-12 gap-10">
      <AppearingCircle />
      <ExitingCircle />
      <MovingCircle />
      <HoverSquare />
      <VariantsMenu />
      <CountingNumber />
    </div>
  );
}
