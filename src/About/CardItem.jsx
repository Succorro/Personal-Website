
// eslint-disable-next-line react/prop-types
function CardItem({ icon, title, description }) {
    return ( 
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full"> 
            <div className="flex flex-col grow px-10 py-12 text-white rounded-xl border-2 border-white border-solid bg-blend-normal max-md:px-5 max-md:mt-8"> 
                <div className="text-4xl leading-10">
                    {icon}
                </div> 
                <h3 className="mt-8 text-sm font-bold leading-7 uppercase tracking-[2px]"> 
                    {title} 
                </h3> 
                <p className="mt-8 text-base leading-7">
                    {description}
                </p> 
            </div> 
        </div> ); }
export default CardItem;