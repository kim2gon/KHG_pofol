import { useRef, useState } from "react";
import "./App.css";
import "./styles/style.css";
import Navbar from "./components/navbar";
import Character from "./components/character";
import ScrollSections from "./sections/scrollsections";

function App() {
  const scrollRef = useRef(null);
  const [modelColor, setModelColor] = useState("#fbc02b");
  const [modelAnimation, setModelAnimation] = useState(null);

  return (
    <div className="w-100vw h-100vh">
      <Navbar />
      <div className="flex flex-col w-full h-full my-0 mx-auto bg-white ">
        <div className="flex justify-center">
          <div className="w-[1300px] h-full fixed pointer-events-none z-30">
            <Character scrollTarget={scrollRef} modelColor={modelColor} animation={modelAnimation} />
          </div>
          <div className="w-[1300px] h-full" ref={scrollRef}>
            <ScrollSections scrollRootRef={scrollRef} setModelColor={setModelColor} setModelAnimation={setModelAnimation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;