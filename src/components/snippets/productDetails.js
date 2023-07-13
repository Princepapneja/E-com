import AboutProductHeader from "./aboutProductHeader";
import React, { useEffect, useState, useRef } from "react";

function ProductDetails({ heading,panelHideshow,index}) {
  const [rotate, setRotate]=useState(false)
  return (

    <>
      <div
        onClick={() => {
 
          panelHideshow(index)
          
        }}
      >
        <AboutProductHeader
          heading={heading}
          // index={index}
          rotate={rotate}
          setRotate={setRotate}
        />
      </div>

      <div className="product_trans_box">
        <div>
          <p className="product_description">
            Take calls and reply to texts. Id aliquam felis a egestas mi diam
            erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed.
            Tempus, lacus, consectetur neque, et. Vitae sapien, suspendisse eget
            maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel.
            Donec non vitae quam est consequat tortor etiam in in.
            {/* new Line */}
            Elementum condimentum dis tortor ipsum duis amet, non. A mauris
            amet, et molestie urna ut. Felis, eros varius molestie amet, quisque
            potenti pharetra aenean. Habitant morbi vehicula cras urna et sit
            hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit
            nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed.
            {/* new Line */}
            Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam
            rutrum cursus nisi felis cursus vestibulum. Sagittis platea
            venenatis at nibh tellus purus urna. Ultricies mauris scelerisque
            dictum diam aliquet urna elementum. Aliquam tortor egestas nisi
            placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum
            vivamus pulvinar consectetur diam libero ornare.
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
