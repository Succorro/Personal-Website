import Typewriter from 'typewriter-effect'
const pStyle = 'text-2xl font-bold text-gray-400 p-5';

const languages = [
    "HTML, ", "CSS, ", "JavaScript, ", "React Library, ", "Ruby, ", "Ruby on Rails, ", "Tailwind CSS"
  ];
  
  const languageClassMap = {
    "HTML, ": "text-orange",
    "CSS, ": "text-blue-600",
    "JavaScript, ": "text-yellow-400",
    "React Library, ": "text-blue-400",
    "Ruby, ": "text-red-600",
    "Ruby on Rails, ": "text-red-500",
  };

function HomeParagraph() {

    return (
        <>
          <Typewriter
            
            options={{
                strings: ["I'm a passionate developer, who loves turning ideas into reality through coding."],
                autoStart: true,
                wrapperClassName: 'text-2xl font-bold text-gray-400 p-5'
              }}
          />
          <p
            className={pStyle}
          >
            I&apos;m a passionate developer, who loves turning ideas into reality through coding.
          </p>
          <p
            className={pStyle}
          >
            Skills include: {languages.map((lang, index) => (
              <span key={index} className={languageClassMap[lang] || 'text-blue-300'}>{lang}</span>
            ))}
          </p>
          <p
            className={pStyle}
          >
            Explore my projects to get a glimpse of my skills and personality with the <span className='text-purple'>GitHub</span> link below.
          </p>
        </>
      );
}

export default HomeParagraph