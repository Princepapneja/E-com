import Button from "../snippets/button";
import MainSlider from "../snippets/mainSlider";
import ProductSectionCard from "../snippets/productSectionCard";
import SecHeader from "../snippets/secHeader";

const FeatureSection = () => {
  let cardData = [
    {
      type: "normal",
      img_url: "feature-1.png",
      hover_cta: "true",
      clr_option: "true",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      product_price: "$ 300.00",
    },
    {
      img_url: "iphone.png",
      hover_cta: "true",
      clr_option: "true",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      product_price: "$ 300.00",
    },
    {
      img_url: "iphone.png",
      hover_cta: "true",
      clr_option: "true",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      product_price: "$ 300.00",
    },
    {
      img_url: "iphone.png",
      hover_cta: "true",
      clr_option: "true",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      product_price: "$ 300.00",
    },
    {
      img_url: "iphone.png",
      hover_cta: "true",
      clr_option: "true",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      product_price: "$ 300.00",
    },
    {
      img_url: "iphone.png",
      hover_cta: "true",
      clr_option: "true",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      product_price: "$ 300.00",
    },
    {
      img_url: "iphone.png",
      hover_cta: "true",
      clr_option: "true",
      desc: "Boult Audio Bass D3 Buds Lightweight Stereo ",
      product_price: "$ 300.00",
    },
  ];
  return (
    <>
      <section className="feature_section section_padding m_swiper">
        <div className="container">
          <SecHeader heading="Featured products for you" arrows="true" />
          {/* <div className=""> */}

          <div className="product_snippet ">
            <MainSlider
              card={cardData.map((elem, index) => {
                return (
                  <ProductSectionCard
                    key={index}
                    type={elem.type}
                    img_url={elem.img_url}
                    hover_cta={elem.hover_cta}
                    desc={elem.desc}
                    clr_option={elem.clr_option}
                    product_price={elem.product_price}
                  />
                );
              })}
              sectionName="feature_section"
            />
          </div>
          <div className="t-center product_all_cta">
            <Button type="link" label="view all products" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSection;
