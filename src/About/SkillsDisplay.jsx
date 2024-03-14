import CardItem from "./CardItem";

 function SkillsDisplay() { 
    const cardData = [ 
        { icon: "", title: "", description: "", }, 
        { icon: "", title: "", description: "", }, 
        { icon: "", title: "", description: "", }, 
        { icon: "", title: "", description: "", }, 
        { icon: "", title: "", description: "", }, 
        { icon: "", title: "", description: "", }, ];
    return ( 
        
        <section className="flex justify-center items-center"> 
            <div className="flex flex-col mt-3 w-full min-w-[400px] max-w-[1170px] max-md:max-w-full"> 
                <h2 className="self-center text-5xl font-bold tracking-tight text-center text-white leading-[52.08px] max-md:max-w-full"> 
                Skills
                </h2> 
                <div className="mt-10 max-md:mt-5 max-md:max-w-full"> 
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0"> 
                        {cardData.slice(0, 3).map((card, index) => ( <CardItem key={index} {...card} /> ))} 
                    </div> 
                </div> 
                <div className="mt-5 max-md:max-w-full"> 
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0"> 
                        {cardData.slice(3).map((card, index) => ( <CardItem key={index} {...card} /> ))} 
                    </div> 
                </div> 
            </div> 
        </section> ); } 

export default SkillsDisplay;