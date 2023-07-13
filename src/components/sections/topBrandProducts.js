import SecHeader from "../snippets/secHeader";
import ProductSectionCard from "../snippets/productSectionCard";
import MainSlider from "../snippets/mainSlider";
export default function TopBrandProducts() {
  let cardData = [
    {
      type: "third",
      img_url: "bluetooth.png",
      hover_cta: "true",
      product_title: "I Phone Apple",
      product_rating: "4",
      product_price: "$ 300.00",
      new_old_text: "New",
    },
    {
      type: "third",
      img_url: "iphone.png",
      hover_cta: "true",
      product_title: "I Phone Apple1",
      product_rating: "2.3",
      product_price: "$ 300.00",
      new_old_text: "New",
    },
    {
      type: "third",
      img_url: "bluetooth.png",
      hover_cta: "true",
      product_title: "I Phone Apple",
      product_rating: "3.7",
      product_price: "$ 300.00",
      new_old_text: "New",
    },
    {
      type: "third",
      img_url: "iphone.png",
      hover_cta: "true",
      product_title: "I Phone Apple1",
      product_rating: "5",
      product_price: "$ 300.00",
      new_old_text: "New",
    },
    {
      type: "third",
      img_url: "bluetooth.png",
      hover_cta: "true",
      product_title: "I Phone Apple",
      product_rating: "4.8",
      product_price: "$ 300.00",
      new_old_text: "New",
    },
    {
      type: "third",
      img_url: "iphone.png",
      hover_cta: "true",
      product_title: "I Phone Apple1",
      product_rating: "1.8",
      product_price: "$ 300.00",
      new_old_text: "New",
    },
  ];
  return (
    <>
      <section className="section_padding top_brand m_swiper">
        <div className="container">
          <SecHeader
            heading="Top products for top brands"
            info="Top brands up to 30% off"
            arrows={true}
          />

          <div className="product_snippet">
            <MainSlider
              card={cardData.map((elem, index) => {
                return (
                  <ProductSectionCard
                    key={index}
                    type={elem.type}
                    img_url={elem.img_url}
                    hover_cta={elem.hover_cta}
                    product_title={elem.product_title}
                    product_rating={elem.product_rating}
                    product_price={elem.product_price}
                    new_old_text={elem.new_old_text}
                  />
                );
              })}
              sectionName="top_brand"
            />
          </div>
        </div>
      </section>
    </>
  );
}
