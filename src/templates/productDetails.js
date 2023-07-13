import React from "react";
import CartRelatedProduct from "../components/sections/cartRelatedProduct";
import PrdctMainDetailsSec from "../components/sections/prdctMainDetailsSec";
import AboutProductSec from "../components/sections/aboutProductSec";
import Layout from "../layout";

function ProductDetails() {
  return (
    <>
      <PrdctMainDetailsSec />
      <AboutProductSec />
      <CartRelatedProduct />
    </>
  );
}

export default  Layout(ProductDetails);
