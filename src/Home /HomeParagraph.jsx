
function HomeParagraph() {
    return (
      <div className='text-white text-2xl font-bold flex flex-col text-start'>
        <p className="text-3xl">Skills include:
          <span className='text-2xl orange'> HTML, </span>
          <span className='text-2xl blue'>CSS, </span>
          <span className='text-2xl yellow'>JavaScript, </span>
          <span className='text-2xl lightBlue'>React, </span>
          <span className='text-2xl red'>Ruby, </span>
          <span className='text-2xl lightRed'>Ruby on Rails, </span>
          <span className='text-2xl lighterBlue'>Tailwind CSS</span>
        </p>
        <br/>
        <p>Explore my projects to get a glimpse of my skills and personality with the
          <span className='purple'>GitHub</span>
          link below.
        </p>
        <br/>
        <a className='flex items-center' href='https://github.com/Succorro' rel='noreferrer' target='_blank'>
          <img className='w-10 ml-auto mr-auto' src='/github.svg' alt='Github' />
        </a> 
      </div>
      );
}

export default HomeParagraph