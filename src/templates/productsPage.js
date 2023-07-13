import Layout from '../layout'
import MyWishlistSec from '../components/sections/myWishlistSec'
import ProductPageSec from '../components/sections/productPageSec'
import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  let Height; //,rotate,clrToggle
  const panelHideshow = (index,childIndex) => {
      if (Height[index].getAttribute("style")) {
        Height[index].removeAttribute("style");
      } else {
        Height[index].setAttribute(
          "style",
          `height: ${Height[index].scrollHeight}px`
        );
      }
    }
  
  useEffect(() => {
    Height = document.querySelectorAll(".product_trans_box");
    Height[0].setAttribute("style", `height: ${Height[0].scrollHeight}px`);
  });
  return (
    <>
<ProductPageSec
 panelHideshow={panelHideshow}
 />
    </>
  )
}

export default Layout(ProductsPage)
