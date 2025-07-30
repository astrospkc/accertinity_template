import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";

const Board = () => {
  return (
    <>
      <div className=" relative my-[10%]w-full">
        <div className="p-4 bg-gray-50 rounded-3xl border-2 border-gray-200/50">
          {/* <div class="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white "></div> */}
          <div className="bg-white border-2 border-gray-200/50 p-4 rounded-3xl ">
            <div className="flex h-full bg-gray-50 rounded-t-3xl ">
              <Sidebar />
              <div className="flex-1 py-4 ">
                <Dashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
