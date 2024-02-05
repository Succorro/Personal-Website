// eslint-disable-next-line react/prop-types
function AboutBio({style, handleBtn}) {
  return (
    <div className={style}>
        <div id='bio' className="bg-gray-800 rounded-lg text-start text-lg font-bold px-10 my-10 pb-5">
            <div className="flex justify-between">
                <h1 className="text-gray-300 underline decoration-2 decoration-background py-5">About me</h1>
                <button onClick={()=> handleBtn()} className="border my-5 px-2 rounded-3xl hover:bg-gray-500">X</button>
            </div>
            <p className="mb-5 text-gray-300"> 
                Hi, I&apos;m Steven, a full stack web developer with a passion for creating clean, functional, and user-friendly web applications. 
                I am always looking for innovative ways to bring my clients vision to life, while adhering to best practices.
            </p>
            <p className="mb-5 text-gray-300">
                As the son of two immigrant parents I understand the value of hard work and dedication to one&apos;s craft. 
                I have a passion for learning about new technologies and applying my skills to my code. 
                My love for gaming and sports has taught me the value of teamwork, strategic thinking, and problem-solving. 
                My background in retail has taught me how to communicate effectively, adapt to new environments, and how to manage my time under tight deadlines. 
                These are skills that can tranfer to any work environment.
                With a strong foundation in technology and a genuine love for learning, I am committed to making a meaningful contribution to any organization that values innovation and continuous growth.
            </p>
        </div>
    </div>
  )
}

export default AboutBio