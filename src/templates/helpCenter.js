import React, { useEffect, useState } from "react";
import HelpCenterSec from '../components/sections/helpCenterSec'
import Layout from "../layout";

const HelpCenter = () => {
    let Height; 
  const panelHideshow = (index) => {
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
      <HelpCenterSec panelHideshow={panelHideshow}/>
    </>
  )
}

export default  Layout(HelpCenter)
