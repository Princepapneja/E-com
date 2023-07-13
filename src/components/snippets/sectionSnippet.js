import React from "react";
import SecHeader from "../snippets/secHeader";
import ProductSectionCard from "../snippets/productSectionCard";
import MainSlider from "../snippets/mainSlider";
const SectionSnippet = ({
  mainSlider,
  data,
  sectionHeading,
  arrows,
  info,
  sectionName,
  type,
  product_line,
  hover_cta,
  in_stock,
  nrml_cta,
  cart_cta
}) => {
  return (
    <>
      <section
        className={`section_padding ${
          sectionName && sectionName + " m_swiper"
        } `}
      >
        <div className="container">
          <SecHeader heading={sectionHeading} arrows={arrows} info={info} />
          <div className="product_snippet">
            {mainSlider && (
              <MainSlider
                card={data.map((elem, index) => {
                  console.log(elem.nrml_cta);
                  return (
                    <ProductSectionCard
                      key={index}
                      type={type}
                      discount_text={
                        elem.discount_text ? elem.discount_text : false
                      }
                      wishlist_heart={
                        !elem.wishlist_heart ? elem.wishlist_heart : false
                      }
                      clr_option={elem.clr_option ? elem.clr_option : false}
                      desc={elem.desc ? elem.desc : false}
                      hover_cta={hover_cta}
                      img_url={elem.img_url ? elem.img_url : false}
                      product_title={
                        elem.product_title ? elem.product_title : false
                      }
                      product_rating={
                        elem.product_rating ? elem.product_rating : false
                      }
                      product_price={
                        elem.product_price ? elem.product_price : false
                      }
                      new_old_text={
                        elem.new_old_text ? elem.new_old_text : false
                      }
                      product_line={product_line}
                      in_stock={in_stock}
                      nrml_cta={nrml_cta}
                      cart_cta={cart_cta}
                    />
                  );
                })}
                sectionName={sectionName}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSnippet;
