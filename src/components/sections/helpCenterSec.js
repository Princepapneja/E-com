import React, { Fragment } from "react";
import Button from "../snippets/button";
import { useState } from "react";
import SecHeader from "../snippets/secHeader";
import ProductFaq from "../snippets/productFaq";
import FaqAccordion from "../snippets/faqAccordion";
import SwiperCategorySlider from "../snippets/swiperCategorySlider";
import ContactUs from "./contactUs";
const HelpCenterSec = ({ panelHideshow }) => {
  const [isActive, setIsActive] = useState(0);
  let menuItem = ["orders", "billing", "Returns", "Careers", "Others"];
  let faqData=[
    {
      heading: "Sed eu, fames at accumsan vitae in tristique turpis.",
      desc: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
  },
    {
      heading: "Sed eu, fames at accumsan vitae in tristique turpis.",
      desc: "Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt."
  }

]
  return (
    <>
      <section className="section_padding">
        <div className="container">
          <SecHeader
            heading={"Help Center"}
            search_bar={true}
            breadcrumb={"Help Center"}
            to={"help-center"}
            line={true}
          />
          <div className="help_center_slider">
            <SwiperCategorySlider sliderMenu={menuItem}/>
          </div>
          <div className="help_center_img">
            <img src={require(`../../assets/images/help_center.png`)} alt="" />
          </div>
          <div className="product_info_box">
            {
                faqData.map((e,i)=>{
                    return(
                        <Fragment key={i}>

                        <FaqAccordion panelHideshow={panelHideshow} index={i} heading={e.heading} desc={e.desc} />    
                      {(i!==faqData.length-1)&&<div className="divider_my-20"></div>
                }
                       </Fragment>

                    )

                })
            }
          </div>
          {/* just for testing */}
          <ContactUs/>
        </div>
      </section>
    </>
  );
};

export default HelpCenterSec;
