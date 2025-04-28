import "./App.css";
import "./styles/style.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Character from "./components/character";
import ScrollSections from "./sections/scrollsections";
import Loading from "./components/loading";

function App() {
  return (
    <>
      <Loading />
      <Header />
      <Navbar />
      <div className="flex flex-col h-full w-[1300px] my-0 mx-auto ">
        <div className="w-dvw flex justify-between max-w-[1300px] mx-auto xl-px-[5%] fixed overflow-hidden -z-10">
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
        </div>
        <div className="z-30">
          <div className="w-[1300px] h-full fixed pointer-events-none">
            <Character />
          </div>
          <ScrollSections />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
