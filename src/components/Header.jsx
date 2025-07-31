import { SunMedium } from "lucide-react";
import { SunDim } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="fixed z-20 top-0 w-full p-4 m-4 flex flex-row justify-between items-center text-sm bg-white rounded-3xl  ">
      <div>
        <ul className=" text-black flex flex-row gap-10 font-semibold">
          <li className="flex flex-row gap-2 ">
            <div className="w-8 h-6 bg-black rounded-tl-xl rounded-br-xl"></div>
            <span>Every AI</span>
          </li>
          <li className="text-slate-500">Pricing</li>
          <li className="text-slate-500">Blog</li>
          <li className="text-slate-500">Contact</li>
        </ul>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center pr-10 ">
        <span className="text-sm">
          <SunMedium className="w-4 h-4" />
        </span>
        <button className="p-2 rounded-2xl hover:bg-slate-400/20 font-semibold px-4 cursor-pointer">
          Login
        </button>
        <button className="bg-black p-2 text-white rounded-4xl px-4 font-semibold cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
