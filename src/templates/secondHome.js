import React, { Fragment } from "react";
import BannerSection from "../components/sections/bannerSection";
import SectionSnippet from "../components/snippets/sectionSnippet";
import Layout from "../layout";
import cardData from "../assets/json/secondHome.json";
import full_img from "../assets/json/full_img.json";
import reverseData from "../assets/json/reverse.json";
import center_img from "../assets/json/center_img.json";
import CategoryCollection from "../components/sections/categoryCollection";
import OurPartners from "../components/sections/ourPartners";
import OurPros from "../components/sections/ourPros";
import SecondBanner from "../components/sections/secondBanner";
import ProductHSection from "../components/sections/productHSection";
import SecondProductHCard from "../components/sections/secondProductHCard";
import CategorySmallCardSec from "../components/sections/categorySmallCardSec";
import ProductHCard from "../components/snippets/productHCard";
import ProductHSingleCardSec from "../components/sections/productHSingleCardSec";
const SecondHome = () => {
  let arr=[1,2,3]
  return (
    <> 
      <BannerSection specialBanner={true} heading={<>Best place to find and <span className="special_text"> buy products </span>for your need</>} special_text={'buy products'}/>
      <CategorySmallCardSec sectionName={'category_small_card_sec'}/>
      <SectionSnippet
        mainSlider={true}
        data={center_img}
        sectionName="top_exclusive"
        sectionHeading={"Top exclusive products"}
        arrows={true}
        type={"center_img"}
        cart_cta={true}
        nrml_cta={true}
        product_line={true}
      />
      <SectionSnippet
        mainSlider={true}
        data={cardData}
        type={"center"}
        sectionName="gaming"
        sectionHeading={"Gaming & toy products"}
        arrows={true}
        info={"Best selling in games & toy up to 30% off"}
        nrml_cta={true}
      />
      <ProductHSingleCardSec/>
      <SectionSnippet
        mainSlider={true}
        data={full_img}
        product_line={true}
        sectionName="related"
        sectionHeading={"Related items for you"}
        arrows={true}
        type={"full_img"}
        hover_cta={true}
        in_stock={true}
      />
      <SectionSnippet
        mainSlider={true}
        data={center_img}
        sectionName="new_arrived"
        sectionHeading={"New arrivals products"}
        arrows={true}
        type={"center_img"}
        cart_cta={true}
        nrml_cta={true}
        product_line={true}
      />
      <SecondProductHCard />
      <CategoryCollection SpecialCategoryCard={true} heading="Top collection" arr={arr} />
      <SectionSnippet
        mainSlider={true}
        data={reverseData}
        sectionName="top_brands_products"
        sectionHeading={"Top brands products"}
        arrows={true}
        type={"reverse"}
        nrml_cta={true}
      />
      <OurPartners />
      <OurPros />
    </>
  );
};

export default Layout(SecondHome);
