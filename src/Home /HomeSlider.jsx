
function HomeSlider() {
  return (
        <swiper-container slides-per-view="4" speed="2000" loop="true" autoplay='true' autoplay-delay="2000" autoplay-disable-on-interaction="false" space-between='30' centered-slides='true'>
            <swiper-slide>
               <img className="w-40" src="/github.svg" alt="" /> 
            </swiper-slide>
            <swiper-slide>
               <img className="w-40" src="/github.svg" alt="" /> 
            </swiper-slide>
            <swiper-slide>
               <img className="w-40" src="/gmail.svg" alt="" /> 
            </swiper-slide>
            <swiper-slide>
               <img className="w-40" src="/github.svg" alt="" /> 
            </swiper-slide>
            <swiper-slide>
               <img className="w-40" src="/ruby.svg" alt="" /> 
            </swiper-slide>
            <swiper-slide>
               <img className="w-40" src="/github.svg" alt="" /> 
            </swiper-slide>
        </swiper-container>
    );
}

export default HomeSlider