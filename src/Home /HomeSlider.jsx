import slideData from './slideData'
function HomeSlider() {
    
    const slides = slideData.map((slideInfo, index) => {
        const {source, style, alt, url} = slideInfo
        return (
            <swiper-slide key={index}>
                <a  href={url} rel='noreferrer' target="_blank">
                    <img className={style} src={source} alt={alt} />
                </a>
            </swiper-slide>
        )
    })
  return (
        <swiper-container slides-per-view="5" speed="2000" loop="true" autoplay='true' autoplay-delay="2000" autoplay-disable-on-interaction="false" space-between='0' centered-slides='false'>
            {slides}
        </swiper-container>
    );
}

export default HomeSlider