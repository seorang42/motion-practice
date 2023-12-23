import CardContainer from "@/components/Animation/Scroll/CardContainer";
import CircleProgress from "@/components/Animation/Scroll/CircleProgress";
import Parallax from "@/components/Animation/Scroll/Parallax";
import ProgressBar from "@/components/Animation/Scroll/ProgressBar";
import WhileInView from "@/components/Animation/Scroll/WhileInView";

export default function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-12 gap-10">
        <ProgressBar />
        <div className="w-4 flex flex-col items-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          impedit, inventore in harum explicabo nihil voluptatem eligendi? Unde
          voluptates excepturi perferendis aliquam cum culpa asperiores! Dicta
          amet facere nam tempore. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolorem impedit, inventore in harum explicabo nihil
          voluptatem eligendi? Unde voluptates excepturi perferendis aliquam cum
          culpa asperiores! Dicta amet facere nam tempore. Lorem ipsum dolor,
          sit amet consectetur adipisicing elit. Dolorem impedit, inventore in
          harum explicabo nihil voluptatem eligendi? Unde voluptates excepturi
          perferendis aliquam cum culpa asperiores! Dicta amet facere nam
          tempore.
          <WhileInView />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          impedit, inventore in harum explicabo nihil voluptatem eligendi? Unde
          voluptates excepturi perferendis aliquam cum culpa asperiores! Dicta
          amet facere nam tempore. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Dolorem impedit, inventore in harum explicabo nihil
          voluptatem eligendi? Unde voluptates excepturi perferendis aliquam cum
          culpa asperiores! Dicta amet facere nam tempore.Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Dolorem impedit, inventore in harum
          explicabo nihil voluptatem eligendi? Unde voluptates excepturi
          perferendis aliquam cum culpa asperiores! Dicta amet facere nam
          tempore.
        </div>
        <CircleProgress />
      </div>
    </>
  );
}
