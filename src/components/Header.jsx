import { SunMedium, X } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";
import { BsJustify } from "react-icons/bs";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }} // Start above and hidden
      animate={{ y: 0, opacity: 1 }} // Slide down and fade in
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      className="fixed z-20 top-0 w-[80%] bg-gray-50  px-4 py-2 m-4 flex flex-row justify-between items-center text-sm  rounded-3xl  "
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-2 justify-center items-center md:w-[15%]">
          <div className="w-8 h-6 bg-black rounded-tl-xl rounded-br-xl"></div>
          <span className="font-bold">Every AI</span>
        </div>

        <nav className="hidden md:flex flex-row  justify-between items-center w-full">
          <div className=" text-black flex flex-row gap-10 font-semibold">
            <span className="text-slate-500">Pricing</span>
            <span className="text-slate-500">Blog</span>
            <span className="text-slate-500">Contact</span>
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
        </nav>

        <button
          className="block md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? (
            <>
              <div className="flex flex-row gap-2">
                <SunMedium className="w-5 h-5 text-slate-500 cursor-pointer" />
                <X className="w-6 h-6 " />
              </div>
            </>
          ) : (
            <BsJustify className="w-6 h-6" />
          )}
        </button>
        {toggleMenu && (
          <div className="absolute top-16 right-4  justify-start items-start w-full bg-white rounded-2xl shadow-lg p-4 flex flex-col gap-4 md:hidden ">
            <ul className="flex flex-col gap-4 font-semibold text-black p-2 items-start">
              <li className="text-slate-500 hover:text-black cursor-pointer">
                Pricing
              </li>
              <li className="text-slate-500 hover:text-black cursor-pointer">
                Blog
              </li>
              <li className="text-slate-500 hover:text-black cursor-pointer">
                Contact
              </li>
            </ul>
            <div className="flex flex-col  gap-4 ">
              <button className="p-2 rounded-2xl hover:bg-slate-400/20 font-semibold px-4 cursor-pointer">
                Login
              </button>
              <button className="bg-black p-2 text-white rounded-4xl px-4 font-semibold cursor-pointer">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;
