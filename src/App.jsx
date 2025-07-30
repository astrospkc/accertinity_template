import "./App.css";
import Board from "./components/Board";

import GettingStarted from "./components/GettingStarted";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full h-screen">
        <div className="flex flex-col items-center justify-center w-full h-full mt-[20%]">
          {/* <FundingBanner /> */}
          <GettingStarted />
        </div>

        <Board />
      </div>
    </>
  );
}

export default App;
