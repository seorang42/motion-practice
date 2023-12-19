import ExpandingBox from "@/components/Layout/ExpandingBox";
import LayoutId from "@/components/Layout/LayoutId";
import Switch from "@/components/Layout/Switch";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center p-12 gap-10">
      <Switch />
      <ExpandingBox />
      <LayoutId />
    </div>
  );
}
