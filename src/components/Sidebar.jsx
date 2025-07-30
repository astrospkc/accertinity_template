import { House } from "lucide-react";
import { Settings } from "lucide-react";
import { User } from "lucide-react";
import { Mountain } from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <div className="justify-start items-start flex flex-col gap-4 border-r-2 border-slate-200/50 pl-4 pr-8  pt-4">
      <span className=" flex flex-row gap-2 text-md font-bold">
        <Mountain className="w-5 h-5" />
        Acme Dashboard
      </span>
      <ul className="flex flex-col gap-4 justify-start items-start text-xs ">
        <li className="flex flex-row items-center gap-4">
          <House className="w-3 h-3" />
          Dashboard
        </li>
        <li className="flex flex-row items-center gap-4">
          <User className="w-4 h-4" />
          Profile
        </li>
        <li className="flex flex-row items-center gap-4">
          <Settings className="w-4 h-4" />
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
