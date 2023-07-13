import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import Button from "./button";
import { useState } from "react";

function SwiperCategorySlider({sliderMenu}) {
  const [isActive, setIsActive] = useState(0);

  return (
    <>
      <div className=" filter_arrow_box">
        <Swiper
          slidesPerView={"auto"}
          
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            0:{
              spaceBetween: 6
            },
            768: {
              spaceBetween: 10,
            },
          }}
        >
          {
            
            sliderMenu.map((elem, index) => {
              return (
              <SwiperSlide key={index}>
               <Button type='active_cta' index={index} label={elem} setIsActive={setIsActive} isActive={isActive}/>
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide>
            <button className= {`category_name ${isActive === 1 ? 'swiper_active' : ''}`} onClick = {() => setIsActive(1)} id="mobile_collection">Mobile</button>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperCategorySlider;
