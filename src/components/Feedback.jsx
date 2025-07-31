import React from "react";

const Feedback = () => {
  return (
    <div className=" w-full flex flex-col gap-4 justify-center items-center mt-[10%]">
      <div className="flex flex-col gap-4 justify-center items-center mb-[15%]">
        <h1 className="text-5xl font-bold text-black ">
          Loved by people all over the universe
        </h1>
        <p className="text-gray-500 w-[53%] it">
          Every AI is used by millions of people around the globe.Our APIs have
          fan bases and people fight for us over twitter.
        </p>
      </div>
      <div className="relative w-full">
        <div className="absolute pt-20 inset-x-0 top-0 h-40 w-full bg-gradient-to-t from-transparent via-white to-white"></div>
        <div className="absolute pt-20 inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white"></div>

        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

function Card() {
  return (
    <>
      <div className=" flex flex-col gap-5 p-4 rounded-3xl shadow-md shadow-gray-300">
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
      </div>
    </>
  );
}
export default Feedback;
