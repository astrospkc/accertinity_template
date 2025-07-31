import { ChevronRight } from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const GettingStarted = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="flex flex-col gap-4 justify-center items-center"
    >
      <button className="flex items-center gap-2 bg-gray-100 px-6 py-2 rounded-full shadow-sm shadow-gray-400 hover:bg-gray-200 transition">
        <span className="font-bold text-gray-800 text-xs">
          We&apos;ve raised $69M seed funding
        </span>
        <ChevronRight className="w-4 h-4 text-gray-600 font-bold" />
      </button>
      <div className="text-2xl md:text-8xl font-bold w-5/6 ">
        Generate Images, Text and Videos with AI
      </div>
      <p className="text-sm md:text-xl w-[85%] md:w-[53%] text-wrap text-gray-600">
        Everything AI seamlessly integrated all the modern AI generation tools
        into one platform so that you can generate content with a single click
      </p>
      <div className="flex flex-row gap-4 mt-4">
        <button className="bg-black p-2 cursor-pointer text-white rounded-4xl px-4 font-semibold">
          Get started
        </button>
        <button className="cursor-pointer  flex flex-row items-center gap-2 p-2 rounded-4xl hover:bg-slate-400/10 font-semibold">
          Contact us{" "}
          <span>
            <ArrowRight className="w-4 h-4 text-gray-600 transition-colors duration-1000 ease-in" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default GettingStarted;
