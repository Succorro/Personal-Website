import Typewriter from 'typewriter-effect'

function HomeParagraph() {

    return (
        <>
          <Typewriter
            onInit={(typewriter) => {
                typewriter.start().typeString("<div><p>I'm full-stack developer, who loves turning ideas into reality through coding.</p> <br/> <p>Skills include: <span class='orange'>HTML,</span> <span class='blue'>CSS,</span> <span class='yellow'>JavaScript,</span> <span class='lightBlue'>React Library,</span> <span class='red'>Ruby,</span> <span class='lightRed'>Ruby on Rails,</span> <span class='lighterBlue'>Tailwind CSS</span></p> <br/> <p>Explore my projects to get a glimpse of my skills and personality with the <span class='purple'>GitHub</span> link below.</p> </br> <a class='flex items-center' href='https://github.com/Succorro' rel='noreferrer' target='_blank'><img class='w-10 ml-auto mr-auto' src='/github.svg' alt='Github' /></a> </div>")
            }}
            options={{
                wrapperClassName: 'text-2xl font-bold text-gray-400 p-5',
                cursorClassName: 'text-cornflowerblue hidden',
                delay: 35
              }}
          />
        </>
      );
}

export default HomeParagraph