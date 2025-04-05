import './App.css';
import './styles/style.css'
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';
import Section4 from './sections/section4';
import Section5 from './sections/section5';
import Section6 from './sections/section6';
import Character from './components/character';
import ScrollSections from './sections/scrollsections';


function App() {
  return (
    <div className='flex flex-col h-full w-[1300px] my-0 mx-auto'>
      <div className="w-dvw flex justify-between max-w-[1300px] mx-auto xl-px-[5%] absolute overflow-hidden z-0">
        <div className=" w-[1px] h-dvh bg-[#eee]"></div>
        <div className=" w-[1px] h-dvh bg-[#eee]"></div>
        <div className=" w-[1px] h-dvh bg-[#eee]"></div>
        <div className=" w-[1px] h-dvh bg-[#eee]"></div>
        <div className=" w-[1px] h-dvh bg-[#eee]"></div>
      </div>
      <div>
        <Character />
      </div>
      <div className='z-10'>
        <Header />
        <Navbar />
        <div>
          <ScrollSections />
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;