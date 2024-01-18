
const languages = [
  "HTML, ", "CSS, ", "JavaScript, ", "React Library, ", "Ruby, ", "Ruby on Rails, ", "Tailwind CSS"
];

const languageClassMap = {
  "HTML, ": "text-orange-500",
  "CSS, ": "text-blue-600",
  "JavaScript, ": "text-yellow-400",
  "React Library, ": "text-blue-400",
  "Ruby, ": "text-red-600",
  "Ruby on Rails, ": "text-red-500",
};

const Home = () => {
  const pStyle = 'text-2xl font-bold text-gray-400 p-5';

  return (
    <div id='home' className="p-3" style={{backgroundImage: 'url(/Trigram.png)',backgroundSize: 'contain'}}>
      <header className="m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-500">
          As a <span className="text-cornflowerblue">Software Developer</span> who enjoys working on new and innovative technology, I am always learning. 
        </h1>
        <p className="text-cornflowerblue m-10 font-bold text-2xl">Flatiron School Alumni</p>
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
        <p className={pStyle}>
          I&apos;m a passionate developer, who loves turning ideas into reality through coding.
        </p>
        <p className={pStyle}>
          Skills include: {languages.map((lang, index) => (
            <span key={index} className={languageClassMap[lang] || 'text-blue-300'}>{lang}</span>
          ))}
        </p>
        <p className={pStyle}>
          Explore my projects to get a glimpse of my skills and personality with the <span className='text-purple'>GitHub</span> link below.
        </p>
        <a href="https://github.com/Succorro" rel="noreferrer" target="_blank">
          <img className='w-10' src="/github.png" alt="Github" />
        </a>
      </section>
    </div>
  );
};

export default Home;
