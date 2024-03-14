import CardItem from "./CardItem";

 function SkillsDisplay() {
    const cardData = [
        {
          title: "React", 
          icon: '/react.svg', 
          description: 'A powerful JavaScript library for building user interfaces, allowing the creation of interactive and dynamic web applications with ease. Its component-based architecture promotes code reusability and makes managing complex UIs simpler.'
        },
        {
          title: "JavaScript",
          icon: '/javascript.svg',
          description: 'JavaScript is the language of the web, adding interactivity and functionality to websites. Its versatility and ubiquity make it an essential tool for modern web development, powering everything from simple animations to complex web applications.'
        },
        {
          title: "Ruby",
          icon: '/ruby.svg',
          description: 'Ruby is a dynamic, object-oriented programming language designed for simplicity and productivity. It emphasizes programmer happiness and follows the principle of least astonishment, making it an ideal choice for building elegant and maintainable applications.'
        },
        {
          title: "Ruby on Rails",
          icon: '/rails.svg',
          description: 'Ruby on Rails, often referred to as Rails, is a popular web application framework built on top of Ruby. It follows the convention over configuration paradigm, provides a set of best practices and conventions to streamline the development process. With its focus on developer productivity and elegant code, Rails powers robust web applications quickly.'
        },
        {
          title: "Tailwind CSS",
          icon: '/tailwind.svg',
          description: 'Tailwind CSS is a utility-first CSS framework that enables rapid builds and custom user interfaces. By providing a set of utility classes, Tailwind CSS allows for rapid prototyping and easy customization, without the need for writing custom CSS. Its approach to styling encourages consistency and makes it easy to maintain a scalable codebase.'
        },
        {
          title: "Redux",
          icon: '/redux.svg',
          description: 'Redux is a predictable state container for JavaScript applications, commonly used with React. It helps manage application state in a predictable and centralized manner, making it easier to debug and maintain complex applications. Write clean, testable code and ensuring a consistent user experience across applications.'
        }
      ];
      
    return ( 
        
        <section className="flex justify-center items-center"> 
            <div className="flex flex-col mt-3 w-full min-w-[400px] max-md:max-w-[90vw]"> 
                <h2 className="self-center text-5xl font-bold tracking-tight text-center leading-[52.08px] max-md:max-w-full"> 
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