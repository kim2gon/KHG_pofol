import "./App.css";
import "./styles/style.css";
import Navbar from "./components/navbar";
import Character from "./components/character";
import ScrollSections from "./sections/scrollsections";
import Loading from "./components/loading";
import Bganimation from "./cssanimations/bganimation";

function App() {
  return (
    <div className="w-100vw h-100vh">
      {/* <Bganimation/> */}
      <Loading />
      <Navbar />
      <div className="flex flex-col w-full h-full my-0 mx-auto bg-white ">
        <div className="flex justify-center">
          <div className="w-[1300px] h-full fixed pointer-events-none z-30">
            <Character />
          </div>
          <div className="w-[1300px] h-full">
            <ScrollSections />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
