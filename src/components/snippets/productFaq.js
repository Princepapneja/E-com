import React, { useEffect, useState, useRef } from "react";
import AboutProductHeader from "./aboutProductHeader";
import FaqAccordion from "./faqAccordion";

function ProductFaq({ heading, panelHideshow, index }) {
  const [rotate, setRotate] = useState(false);
  return (
    <>
      <div
        onClick={() => {
          panelHideshow(index);
        }}
      >
        <AboutProductHeader
          heading={heading}
          rotate={rotate}
          setRotate={setRotate}
          // index={index}
        />
      </div>
      <div className="product_trans_box">
        <div className="product_info_box">
          <FaqAccordion
            panelHideshow={panelHideshow}
            index={3}
            childIndex={4}
          />
          <div className="divider_my-20"></div>
          <FaqAccordion
            panelHideshow={panelHideshow}
            index={3}
            childIndex={5}
          />
          <div className="divider_my-20"></div>
          <FaqAccordion
            panelHideshow={panelHideshow}
            index={3}
            childIndex={6}
          />
          <div className="divider_my-20"></div>
          <FaqAccordion
            panelHideshow={panelHideshow}
            index={3}
            childIndex={7}
          />
          <div className="divider_my-20"></div>
          <FaqAccordion
            panelHideshow={panelHideshow}
            index={3}
            childIndex={8}
          />
          <div className="divider_my-20"></div>
          <FaqAccordion
            panelHideshow={panelHideshow}
            index={3}
            childIndex={9}
          />
        </div>
      </div>
    </>
  );
}

export default ProductFaq;
