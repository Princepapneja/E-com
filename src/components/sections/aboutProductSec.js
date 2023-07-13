import CustomerReviews from "../snippets/customerReviews";
import ProductDetails from "../snippets/productDetails";
import ProductFaq from "../snippets/productFaq";
import ProductInfo from "../snippets/productInfo";
import React, { useEffect, useState } from "react";

function AboutProductSec() {
  let Height; //,rotate,clrToggle
  const panelHideshow = (index,childIndex) => {
    if(childIndex === undefined){
      if (Height[index].getAttribute("style")) {
        Height[index].removeAttribute("style");
      } else {
        Height[index].setAttribute(
          "style",
          `height: ${Height[index].scrollHeight}px`
        );
      }
    }
    else{
      if (Height[childIndex].getAttribute("style")) {
        Height[childIndex].removeAttribute("style");
      } else {
        Height[childIndex].setAttribute(
          "style",
          `height: ${Height[childIndex].scrollHeight}px`
        );
        let childHeight = Height[childIndex].scrollHeight;
        let parentHeight = Height[index].scrollHeight;
        Height[index].setAttribute("style", `height: ${childHeight+parentHeight+10}px`);
      }
    }
    
  };
  useEffect(() => {
    Height = document.querySelectorAll(".product_trans_box");
    Height[0].setAttribute("style", `height: ${Height[0].scrollHeight}px`);
  });

  

  return (
    <>
      <section className="section_padding about_product">
        <div className="container">
          <ProductInfo
            heading={"Product Information"}
            panelHideshow={panelHideshow}
            index={0}
          />

          <div className="about_divider"></div>
          <ProductDetails
            heading={"Product Details"}
            panelHideshow={panelHideshow}
            index={1}
          />
          <div className="about_divider"></div>
          <CustomerReviews
            heading="Customer reviews"
            panelHideshow={panelHideshow}
            index={2}
          />

          <div className="about_divider"></div>
          <ProductFaq heading="FAQ." panelHideshow={panelHideshow} index={3} />
        </div>
      </section>
    </>
  );
}

export default AboutProductSec;
