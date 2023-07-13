import React from "react";
import MainSlider from "../snippets/mainSlider";
import ProductSectionCard from "../snippets/productSectionCard";
import SecHeader from "../snippets/secHeader";

function CartRelatedProduct() {
  let arr = [1, 4, 5, 5, 4, 1];
  return (
    <>
      <section className="section_padding cart_related_section m_swiper">
        <div className="container">
          <SecHeader heading={"Related item your search"} arrows={true} />
          <MainSlider
            card={arr.map((elem, index) => {
              return (
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
              );
            })}
            sectionName="cart_related_section"
          />
        </div>
      </section>
    </>
  );
}

export default CartRelatedProduct;
