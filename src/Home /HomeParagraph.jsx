
function HomeParagraph() {
    return (
      <div className='text-white text-2xl font-bold flex flex-col text-start'>
        <p>
          <span className="text-3xl">Skills include:</span>
          <span className='orange'> HTML, </span>
          <span className='blue'>CSS, </span>
          <span className='yellow'>JavaScript, </span>
          <span className='lightBlue'>React, </span>
          <span className='red'>Ruby, </span>
          <span className='lightRed'>Ruby on Rails, </span>
          <span className='lighterBlue'>Tailwind CSS</span>
        </p>
        <br/>
        <p>Explore my projects to get a glimpse of my skills and personality with the
          <span className='purple'> GitHub </span>
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