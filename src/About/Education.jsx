
// eslint-disable-next-line react/prop-types
function Education({style, handleBtn}) {
  return (
    <div className={style}>
        <div id='experience ' className="bg-gray-800 rounded-lg text-start text-lg font-bold px-10 my-10 pb-5">
          <div className="flex justify-between">
              <h1 className="text-gray-300 underline decoration-2 decoration-background py-5">Experience</h1>
              <button onClick={()=> handleBtn()} className="border my-5 px-2 rounded-3xl hover:bg-gray-500">X</button>
          </div>
          <h1>Flatiron School</h1>
          <p className="mb-5 text-gray-300">
          Immersive coding bootcamp that gave me the education to become a lifelong professional Software Engineer. 
          Flatiron’s Software Engineering program teaches programming fundamentals (HTML, CSS, OOP, ORM, RESTful API), web frameworks (Sinatra, Rails), JavaScript, Ruby, SQL and front-end frameworks (React, Redux, JSON). 
          Building professional portfolios demonstrates my technical skills and creativity. 
          In addition I was immersed in the technical community through exposure to blogs, Github and programming forums such as Stack Overflow. 
          </p>
          <h1>Freelance Development</h1>
          <p className="mb-5 text-gray-300">
          Working with businesses to create dynamic, user friendly and robust web applications has allowed me to grow as a developer. 
          With the solo journey that freelance development brings i&apos;ve learned how to apply coding principles and best practices in a professional setting. 
          In addition to the dedication and commitment that it takes in order to bring my clients a finished product. 
          </p>
        </div>
    </div>
  )
}
export default Education