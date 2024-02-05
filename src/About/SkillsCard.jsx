/* eslint-disable react/prop-types */

function AboutCard({skills}) {
    const { image} = skills
  return (
        <li className="flex flex-col items-center rounded-xl  bg-white text-gray-800 shadow-xl sm:p-5 p-2 m-2 ">
            <picture className="justify-center">
                <img src={image} style={{width: "60px"}} alt="furniture" />
            </picture>
        </li>
  )
}

export default AboutCard