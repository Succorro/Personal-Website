/* eslint-disable react/prop-types */

function AboutCard({skills}) {
    const {skill, image, text} = skills
  return (
        <li className="flex flex-col items-center rounded-xl  bg-white text-gray-800 shadow-xl sm:p-5 p-2 m-2 ">
            <picture className="justify-center">
                <img src={image} style={{width: "60px"}} alt="furniture" />
            </picture>
            <div>
                <h3 className="font-bold text-xl">{skill}</h3>
                <p className='font-semibold'>{text}</p>
            </div>
        </li>
  )
}

export default AboutCard