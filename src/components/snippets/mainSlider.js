// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper";

export default function MainSlider({ card, sectionName, left_pad }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        
          slidesOffsetBefore= {left_pad}
        
        breakpoints={
          {
                0: {
                  spaceBetween: 10,
                },
                768: {
                  spaceBetween: 24,
                },
              }
        }
        navigation={{
          prevEl: `.${sectionName} .sec_arrow_left`,
          nextEl: `.${sectionName} .sec_arrow_right`,
        }}
        freeMode={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
      >
        {card?.map((elem, index) => {
          return <SwiperSlide key={index}>
              {elem}
            </SwiperSlide>;
        })}
      </Swiper>
    </>
  );
}
