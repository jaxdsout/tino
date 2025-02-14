import About from "./components/About";
import Links from "./components/Links";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Background from "./components/images/background1.JPEG"
import Background2 from "./components/images/background2.JPEG"
import { useState } from "react";


function App() {
  const [pivot, setPivot] = useState(true);
  const [showContent, setShowContent] = useState(false);


  return (
    <div className="flex flex-col items-center h-screen justify-between">
      <div className="relative flex flex-col items-center z-20">
        <Navbar setShowContent={setShowContent} />
      </div>

      <div className="flex flex-col items-center mt-8 z-20">
          <About />
          <Contact showContact={showContent} setShowContact={setShowContent} />
      </div>

      <div className="absolute top-0 left-0 z-10">
        {pivot ? (
          <img src={Background2} alt="background-2" className="h-screen w-screen object-cover opacity-80"/>
        ) : (
          <img src={Background} alt="background" className="h-screen w-screen object-cover opacity-80"/>
        )}
      </div>

      <div className="relative bg-gray-500/30 w-full flex justify-end items-center z-30 p-3">
        <Links />
      </div>

    </div>
  );
}

export default App;
