import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

function ProductSmallSlider({ setSelectedImg,selectedImg, className, img_url }) {
  return (
    <>
      <Swiper
     
     direction={"vertical"}
      spaceBetween={10}
   
        modules={[Navigation]}
 
        navigation={{
          prevEl: `.up_arrow_click`,
          nextEl: `.down_arrow_click`,
        }}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
          {img_url.map((elem, index) => {
            return (
              <SwiperSlide key={index}>
              <button
                className={`${className} ${(selectedImg === elem)?'selected':""}`}
                onClick={() => setSelectedImg(elem)}
              >
                <img className="slider_img" src={require(`../../assets/images/${elem}.png`)} alt="" />
              </button>
        </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}

export default ProductSmallSlider;
