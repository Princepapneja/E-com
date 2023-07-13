import React from "react";
import ProductHCard from "../snippets/productHCard";

const ProductHSingleCardSec = () => {
  return (
    <section className="section_padding">
      <div className="container">
        <ProductHCard
        type={'banner_card'}
         
          img_url={"bigLaptop.png"}
          discount={"20% off"}
          title={"Apple MacBook Pro"}
          price={"300.00"}
          clr_opt={true}
        />
      </div>
    </section>
  );
};

export default ProductHSingleCardSec;
