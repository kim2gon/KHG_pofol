import './App.css';
import './styles/style.css'
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import Character from './components/character';
import ScrollSections from './sections/scrollsections';


function App() {
  return (
    <>
      <div className='fixed inset-0'></div>
      <div className='flex flex-col h-full w-[1300px] my-0 mx-auto'>
        <div className="w-dvw flex justify-between max-w-[1300px] mx-auto xl-px-[5%] fixed overflow-hidden z-10">
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
          <div className="w-[1px] h-screen bg-[#eee]"></div>
        </div>
        <div className='w-[1300px] h-full fixed z-20'>
          <Character />
        </div>
        <div className='z-30'>
          <Header />
          <Navbar />
          <ScrollSections />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;