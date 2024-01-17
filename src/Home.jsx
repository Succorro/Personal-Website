import { Card, CardHeader, Image } from '@nextui-org/react';

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

const projectData = [
  { title: "Rent A Bin", imageSrc: "/code.png" },
  // Add more projects as needed
];

const Home = () => {
  const pStyle = 'text-2xl font-bold text-gray-400 p-5';

  return (
    <div id='home' className="p-3 bg-background">
      <header className="m-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-500">
          Hello! My name is <span className="text-cornflowerblue">Steven Gutierrez, </span> 
          I am a <span className="text-cornflowerblue">Software Engineer</span> who enjoys working on new and innovative technology. 
          Actively seeking employment.
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

      <section className='not-prose'>
        <h1 className='text-2xl font-bold'>Featured Projects</h1>
        <div className='-mx-3 flex flex-wrap justify-center '>
          {projectData.map((project, index) => (
            <div key={index} className='w-full md:w-1/2 lg:w-1/3'>
              <div className='mb-10 overflow-hidden rounded-xl bg-background dark:bg-dark-2 py-10 px-8  sm:p-12 lg:py-10 lg:px-6 xl:p-14'>
                <Card isPressable className="col-span-12 bg-background sm:col-span-4">
                  <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h4 className="text-cornflowerblue font-bold text-xl">{project.title}</h4>
                  </CardHeader>
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full bg-background"
                    src={project.imageSrc}
                  />
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-800 p-10 flex flex-col items-center mb-20 rounded-3xl">
        <h2 className='text-2xl font-bold text-gray-200 mb-10'>About Me</h2>
        <p className={pStyle}>
          I&apos;m a passionate developer, who loves turning ideas into reality through coding.
        </p>
        <p className={pStyle}>
          Skills include: {languages.map((lang, index) => (
            <span key={index} className={languageClassMap[lang] || 'text-blue-300'}>{lang}</span>
          ))}
        </p>
        <p className={pStyle}>
          Explore my projects to get a glimpse of my skills and personality with the <span className='text-cornflowerblue'>GitHub</span> link below.
        </p>
        <a href="https://github.com/Succorro" rel="noreferrer" target="_blank">
          <img className='w-10' src="/github.png" alt="Github" />
        </a>
      </section>
    </div>
  );
};

export default Home;
