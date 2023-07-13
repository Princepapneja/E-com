import SecHeader from "../snippets/secHeader";
import ProductSectionCard from "../snippets/productSectionCard";
import MainSlider from "../snippets/mainSlider";
export default function NewArrivals() {
  let cardData = [
    {
      type: "third",
      img_url: "bluetooth.png",
      hover_cta: "true",
      product_title: "Bluetooth",
      product_rating: "1.8",
      product_price: "$ 300.00",
      new_old_text: "New",
      product_line: "false",
    },
    {
      type: "third",
      img_url: "feature-1.png",
      hover_cta: "true",
      product_title: "Bluetooth",
      product_rating: "3.8",
      product_price: "$ 300.00",
      new_old_text: "New",
      product_line: "false",
    },
    {
      type: "third",
      img_url: "iphone.png",
      hover_cta: "true",
      product_title: "Bluetooth",
      product_rating: "2.8",
      product_price: "$ 300.00",
      new_old_text: "New",
      product_line: "false",
    },
    {
      type: "third",
      img_url: "bluetooth.png",
      hover_cta: "true",
      product_title: "Bluetooth",
      product_rating:"4.8",
      product_price: "$ 300.00",
      new_old_text: "New",
      product_line: "false",
    },
    {
      type: "third",
      img_url: "feature-1.png",
      hover_cta: "true",
      product_title: "Bluetooth",
      product_rating:"1.8",
      product_price: "$ 300.00",
      new_old_text: "New",
      product_line: "false",
    },
    {
      type: "third",
      img_url: "iphone.png",
      hover_cta: "true",
      product_title: "Bluetooth",
      product_rating:"1.8",
      product_price: "$ 300.00",
      new_old_text: "New",
      product_line: "false",
    },
  ];
  return (
    <>
      <section className="section_padding new_arrivals m_swiper">
        <div className="container">
          <SecHeader heading="New Arrivals Products" arrows={true} />
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
                    product_line={elem.product_line}
                  />
                );
              })}
              sectionName="new_arrivals"
            />
          </div>
        </div>
      </section>
    </>
  );
}
