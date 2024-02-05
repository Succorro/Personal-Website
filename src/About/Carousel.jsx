import { useState, useRef, useEffect } from 'react';

const data = [
  {
    title: "React", 
    image: '/react.svg', 
    link: 'JavaScript library that allows for an imperative approach to creating dynamic applications.'
},
{title: "JavaScript", image: '/javascript.svg', link: ''},
{title: "Ruby", image: '/ruby.svg', link: ''},
{title: "Ruby on Rails", image: '/rails.svg', link: ''},
{title: "Tailwind CSS", image: '/tailwind.svg', link: ''},
{title: "Redux", image: '/redux.svg', link: ''}
]
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (currentIndex < data.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };


  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }
    if (direction === 'next') {
      return currentIndex >= data.length - 1;
    }
    return false;
  };

 useEffect(() => {
    if (carousel.current) {
      carousel.current.scrollTo({
        left: currentIndex * carousel.current.offsetWidth,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);


  return (
    <div className="my-12 mx-auto  pb-10">
      <div className="relative overflow-hidden w-full">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">&lt;</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-blue-900/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">&gt;</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
          style={{ scrollSnapType: 'x mandatory'}}
        >
          {data.map((resource, index) => {
            const {link, image, title } = resource
            return (
              <div
              key={index}
              className="carousel-item text-center relative w-40 h-40 snap-start"
            >
                <a
                  href={link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${image || ''})` }}
                >
                  <img
                    src={image || ''}
                    alt={title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;