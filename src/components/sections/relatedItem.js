import SecHeader from "../snippets/secHeader";
import ProductSectionCard from "../snippets/productSectionCard";
import MainSlider from "../snippets/mainSlider";
export default function RelatedItem() {
  let cardData= [
    {
      img_url:"bluetooth.png",
      nrml_cta:"Buy",
      desc:"Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      swiper_slider:"true",
      product_price:"$ 400.00",
      discount_text:"10% off",
      wishlist_heart:"false",
    },
    {
      img_url:"bluetooth.png",
      nrml_cta:"Buy",
      desc:"Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      swiper_slider:"true",
      product_price:"$ 400.00",
      discount_text:"10% off",
      wishlist_heart:"false",
    },
    {
      img_url:"bluetooth.png",
      nrml_cta:"Buy",
      desc:"Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      swiper_slider:"true",
      product_price:"$ 400.00",
      discount_text:"10% off",
      wishlist_heart:"false",
    },
    {
      img_url:"bluetooth.png",
      nrml_cta:"Buy",
      desc:"Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      swiper_slider:"true",
      product_price:"$ 400.00",
      discount_text:"10% off",
      wishlist_heart:"false",
    },
    {
      img_url:"bluetooth.png",
      nrml_cta:"Buy",
      desc:"Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      swiper_slider:"true",
      product_price:"$ 400.00",
      discount_text:"10% off",
      wishlist_heart:"false",
    },
    {
      img_url:"bluetooth.png",
      nrml_cta:"Buy",
      desc:"Hp 15S AMD Ryzen 3- 5300U 15.6 Inches ",
      swiper_slider:"true",
      product_price:"$ 400.00",
      discount_text:"10% off",
      wishlist_heart:"false",
    }
  ]
  return (
    <>
      <section className="section_padding related_item m_swiper">
        <div className="container">
          <SecHeader heading="Related items for you Products" arrows={true} />
          <div className="product_snippet">
          <MainSlider
              card={
                  cardData.map((elem,index) => {
                return (
                <ProductSectionCard key={index}
                    img_url={elem.img_url}
                    nrml_cta={elem.nrml_cta}
                    swiper_slider={elem.swiper_slider}
                    desc={elem.desc}
                    product_price={elem.product_price}
                    discount_text={elem.discount_text}
                    wishlist_heart={elem.wishlist_heart}
                    
                    />
                )
              }
              )
              }
              sectionName='related_item'
            />
            
          </div>
          
        </div>
      </section>
    </>
  );
}
