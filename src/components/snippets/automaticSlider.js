// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

import { Autoplay } from "swiper";



function AutomaticSlider({ card }) {
  return (
    <>
      <div className="product_swiper">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={24}
          // centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
        
          modules={[Autoplay]}
          className="mySwiper"
        >
          {card.map((elem,index) => {
           return (
           
            <SwiperSlide key={index} >{elem}
            </SwiperSlide>
           
           )
        })}

        </Swiper>
      </div>
    </>
  );
}

export default AutomaticSlider;
