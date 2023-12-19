import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function LayoutId() {
  const tabs = ["tomato", "lettuce", "cheese"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  return (
    <div className="flex flex-col w-[600px] p-1 bg-purple-100 rounded-xl">
      <div className="flex justify-between">
        {tabs.map((tab, index) => (
          <div className="w-full">
            <div
              key={index}
              className={`p-3 grow cursor-pointer ${
                selectedTab === tab ? "bg-purple-200 rounded-t-xl" : ""
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </div>
            {selectedTab === tab && (
              <motion.div
                layoutId="underline"
                className="h-[1px] bg-purple-700"
              ></motion.div>
            )}
          </div>
        ))}
      </div>
      <div className="h-64 flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
          >
            {selectedTab}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
