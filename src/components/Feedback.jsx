import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const Feedback = () => {
  return (
    <div className=" w-full flex flex-col gap-4 justify-center items-center mt-[10%]">
      <div className="flex flex-col gap-4 justify-center items-center mb-[15%]">
        <h1 className="text-2xl md:text-5xl font-semibold md:font-bold text-black ">
          Loved by people all over the universe
        </h1>
        <p className="text-gray-500 w-[85%] md:w-[53%] it">
          Every AI is used by millions of people around the globe.Our APIs have
          fan bases and people fight for us over twitter.
        </p>
      </div>
      <div className="relative w-full  h-[400px] overflow-hidden">
        <div className="absolute pt-20 inset-x-0 top-0 h-40 w-full bg-gradient-to-t from-transparent via-white to-white"></div>
        <div className="absolute pt-20 inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white"></div>

        <motion.div
          animate={{ y: ["0%", "-500%"] }}
          transition={{
            repeat: Infinity,
            duration: 9000,
            ease: "linear",
          }}
          className="grid grid-cols-1 md:grid-cols-3  gap-4 md:gap-8 "
        >
          {Array.from({ length: 100 }).map((_, i) => (
            <Card key={i} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

function Card() {
  return (
    <>
      <motion.div className="flex-col gap-5 p-4 rounded-3xl shadow-md shadow-gray-300">
        <div className="flex flex-row gap-4 items-center">
          <div className="w-8 h-8 bg-gray-500 rounded-2xl"></div>
          <div className="flex flex-col justify-start items-start ">
            <h1 className="text-md font-semibold text-black">Kathey</h1>
            <h2 className="text-gray-500">Product Designer</h2>
          </div>
        </div>

        <p className="text-sm text-start">
          I can't image going back to before Every AI.Its consistently exceeds
          our expectations. The support team is also top notch.
        </p>
      </motion.div>
    </>
  );
}
export default Feedback;
