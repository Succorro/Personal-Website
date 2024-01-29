import HomeParagraph from "./HomeParagraph";
const Home = () => {
  return (
    <div id='home' className="p-3 bg-cornflowerblue font-mono min-height-[100rem]">
      <header className="m-10">
        <p className="text-start ml-10 font-bold text-white mb-10">Hi, I&apos;m <span className="underline decoration-2 decoration-background">Steven Gutierrez</span></p>
        <h1 className="font-bold text-background text-5xl">
          Software Developer
        </h1>
        <p className="text-lg mt-10 font-bold text-white">I enjoy working on new and innovative technology, always learning and finding new ways to combine my passion and creativity with my code. </p>
        <h1 className="text-center text-background font-bold text-2xl mt-10">Contact me:</h1>
        <div className="flex justify-center mb-10">
          <a className="pr-1 m-10" href="https://www.linkedin.com/in/soysteven/" rel="noreferrer" target="_blank">
            <img className="w-10" src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a className="m-10" href="mailto:stevengbmv@gmail.com">
            <img className="w-10" src="/gmail.png" alt="Email" />
          </a>
        </div>
      </header>

      <section className="bg-gray-800 p-10 flex flex-col items-center mb-20 rounded-3xl lg:px-10">
        <HomeParagraph />
        
      </section>
    </div>
  );
};

export default Home;

