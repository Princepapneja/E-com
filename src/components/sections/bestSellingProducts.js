import React from "react";
import SecHeader from "../snippets/secHeader";
import ProductSectionCard from "../snippets/productSectionCard";
import SpecialCard from "../snippets/specialCard";

function BestSellingProducts() {
  return (
    <>
      <section className="section_padding best_selling">
        <div className="container">
          <SecHeader heading="Best selling products" />
          <div className="product_snippet grid">
            <ProductSectionCard
              type="center"
              img_url="iwatch.png"
              nrml_cta="Buy"
              product_title="I Phone Apple"
              product_rating= "4.5"
              product_price="$ 300.00"
              product_line="false"
              wishlist_heart="false"
            />
            <ProductSectionCard
              type="center"
              img_url="iwatch.png"
              nrml_cta="Buy"
              product_title="I Phone Apple"
              product_rating="3.5"
              product_price="$ 300.00"
              product_line="false"
              wishlist_heart="false"
            />
            <ProductSectionCard
              type="center"
              img_url="iwatch.png"
              nrml_cta="Buy"
              product_title="I Phone Apple"
              product_rating="4.5"
              product_price="$ 300.00"
              product_line="false"
              wishlist_heart="false"
            />
            <SpecialCard/>
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSellingProducts;
