import React, { useEffect, useState, useRef } from "react";
import AboutProductHeader from "./aboutProductHeader";

function FaqAccordion({ panelHideshow, index, childIndex,heading,desc }) {
  const [rotate, setRotate] = useState(false);
  useEffect(() => {
    if (index === 0) {
      setRotate(true);
    }
    else{
      setRotate(false)
    }
  },[]);

  return (
    <>
      <div
        className="faq_head"
        onClick={() => {
          panelHideshow(index, childIndex);
        }}
      >
        <AboutProductHeader
          heading={heading}
          rotate={rotate}
          setRotate={setRotate}
        />
      </div>
      <div className="product_trans_box">
        <p className="faq_desc">
         {desc}
        </p>
      </div>
    </>
  );
}

export default FaqAccordion;
