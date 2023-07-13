import React from "react";
import ProductHCard from "../snippets/productHCard";
import AutomaticSlider from "../snippets/automaticSlider";
function ProductHSection() {
  let cardData = [
    {
      clr_opt: "true",
      discount: "15% off",
      title: "Apple MacBook Pro",
      price: "500.00",
    },
    {
      clr_opt: "true",
      discount: "15% off",
      title: "Apple MacBook Pro",
      price: "500.00",
    },
    {
      clr_opt: "true",
      discount: "15% off",
      title: "Apple MacBook Pro",
      price: "500.00",
    },
    {
      clr_opt: "true",
      discount: "15% off",
      title: "Apple MacBook Pro",
      price: "500.00",
    },
    {
      clr_opt: "true",
      discount: "15% off",
      title: "Apple MacBook Pro",
      price: "500.00",
    },
  ];

  return (
    <>
      <section className="section_padding h_product">
        <div className="container">
          <div>
            <AutomaticSlider
              card={cardData.map((elem, index) => {
                return (
                  <ProductHCard
                    key={index}
                    clr_opt={elem.clr_opt}
                    discount={elem.discount}
                    title={elem.title}
                    price={elem.price}
                    img_url={"laptop.png"}
          line={true}

                  />
                );
              })}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductHSection;
