import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Board = () => {
  return (
    <div className="flex h-full bg-gray-50 my-[10%] rounded-t-3xl ">
      <Sidebar />
      <div className="flex-1 p-6 ">
        <Dashboard />
      </div>
    </div>
  );
};

export default Board;
