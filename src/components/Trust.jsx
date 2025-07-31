import React from "react";

const Trust = () => {
  return (
    <div className="mt-[10%] flex flex-col gap-4 items-center w-full h-full mb-[10%]">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">Trusted by the best companies</h1>
        <h3 className="text-lg text-gray-500">
          {" "}
          Every AI is the choice of all the fortune 500 companies.
        </h3>
      </div>
      <div className="mt-20 flex flex-wrap justify-between gap-4 w-full">
        <img
          src="/images/Netflix-logo.jpg"
          alt="netflix"
          className=" w-15 h-10 md:w-40 animate-float "
        />
        <img
          src="/images/googlelogo2.png"
          alt="google"
          className="mix-blend-multiply  w-15 h-10 hover:scale-110 md:w-30"
        />
        <img
          src="/images/Meta-Logo.png"
          alt="meta"
          className=" w-15 h-10 md:w-40"
        />
        <img
          src="/images/onlyfans2.png"
          alt="onlyfans"
          className=" w-15 h-10 md:w-30"
        />
      </div>
    </div>
  );
};

export default Trust;
undefined;
