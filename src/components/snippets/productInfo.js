import AboutProductHeader from "./aboutProductHeader";
import React, { useState } from "react";
function ProductInfo({ heading, panelHideshow, index }) {
  const [rotate, setRotate] = useState(true);
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
        />
      </div>

      <div className="product_trans_box">
        <div className="product_info_box">
          <div className="grid prdct_info_box_item">
            <div className="text-second">Brand</div>
            <div className="product_info_text">Apple</div>
          </div>
          <div className="line prdct_info_box_item"></div>
          <div className="grid prdct_info_box_item">
            <div className="text-second">Special feature</div>
            <div className="product_info_text">Email, GPS, Notifications</div>
          </div>
          <div className="line prdct_info_box_item"></div>
          <div className="grid prdct_info_box_item">
            <div className="text-second">Dimensions</div>
            <div className="product_info_text">
              11.20 x 3.3 x 0.50 cm; 30 Grams
            </div>
          </div>
          <div className="line prdct_info_box_item"></div>
          <div className="grid prdct_info_box_item">
            <div className="text-second">Color</div>
            <div className="product_info_text">Black & lite Green </div>
          </div>
          <div className="line prdct_info_box_item"></div>
          <div className="grid prdct_info_box_item">
            <div className="text-second">Department</div>
            <div className="product_info_text">Boys</div>
          </div>
          <div className="line prdct_info_box_item"></div>
          <div className="grid prdct_info_box_item">
            <div className="text-second">Item weight</div>
            <div className="product_info_text">30 Grams</div>
          </div>
          <div className="line prdct_info_box_item"></div>
          <div className="grid prdct_info_box_item">
            <div className="text-second">Model number</div>
            <div className="product_info_text">DR80-102-OGJH-3</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductInfo;
