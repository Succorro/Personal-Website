import HomeParagraph from "./HomeParagraph";
import { useState } from "react";
const Home = () => {
    const [isVisible, setIsVisible] = useState({
        paragraph1: false,
        paragraph2: false,
        paragraph3: false,
        link: false,
      });
  return (
    <div id='home' className="p-3 bg-cornflowerblue font-mono ">
      <header className="m-10">
        <p className="text-start ml-10 font-bold text-white mb-5">Hi, I&apos;m <span className="underline decoration-2 decoration-orange/90">Steven Gutierrez</span></p>
        <h1 className="font-bold text-orange text-5xl ">
          Software Developer
        </h1>
        <p className="text-lg mt-10 font-bold text-white">I enjoy working on new and innovative technology, always learning and finding new ways to combine my passion and creativity with my code. </p>
        <div className="flex justify-center">
          <a className="pr-1 m-10" href="https://www.linkedin.com/in/soysteven/" rel="noreferrer" target="_blank">
            <img className="w-10" src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a className="m-10" href="mailto:stevengbmv@gmail.com">
            <img className="w-10" src="/gmail.png" alt="Email" />
          </a>
        </div>
      </header>

      <section className="bg-gray-800 p-10 flex flex-col items-center mb-20 rounded-3xl">
        <HomeParagraph isVisible={isVisible} setIsVisible={setIsVisible}/>
        
      </section>
    </div>
  );
};

export default Home;

