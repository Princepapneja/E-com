import React from "react";
import ProductHCard from "../snippets/productHCard";
import SwiperCategorySlider from "../snippets/swiperCategorySlider";
import { Link } from "react-router-dom";
import MainSlider from "../snippets/mainSlider";

const SecondProductHCard = () => {
  let arr = [1, 2, 3];
  let sliderMenu = [
    "Watches",
    "Mobiles",
    "Laptops",
    "Tablets",
    "Headphones",
    "Printers",
    "Scanners",
    "Speakers",
    "Computers",
    "Smart tv.",
    "Monitors",
    "Watches",
    "Mobiles",
    "Laptops",
    "Tablets",
    "Headphones",
    "Printers",
    "Scanners",
    "Speakers",
    "Computers",
    "Smart tv.",
    "Monitors",
  ];
  return (
    <>
      <section className="section_padding">
        <div className="container">
          <SwiperCategorySlider sliderMenu={sliderMenu} />
          <div className="flex special_h_card">
            <MainSlider
              card={arr.map((e, index) => {
                return (
                  <ProductHCard
                    key={index}
                    index={index}
                    type={'special_card'}
                    img_url={"mobile.png"}
                    discount={"20% off"}
                    desc={"Samcung Galacy 53 5G"}
                    price={"300.00"}
                  />
                );
              })}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondProductHCard;
