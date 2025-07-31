import "./App.css";
import Board from "./components/Board";
import FeatureGrid from "./components/FeatureGrid";
import Features from "./components/Features";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

import GettingStarted from "./components/GettingStarted";
import Header from "./components/Header";
import Trust from "./components/Trust";

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
        <Trust />
        <Features />
        <FeatureGrid />
        <Feedback />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
