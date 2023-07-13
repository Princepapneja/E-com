import React from "react";
import MainProductCard from "../snippets/mainProductCard";
import ProductDetailsbox from "../snippets/productDetailsbox";
import SecHeader from "../snippets/secHeader";

function PrdctMainDetailsSec() {
  return (
    <>
      <section className="section_padding">
        <div className="container">
          <SecHeader
            heading="Apple watch"
            breadcrumb={["Products", "Products details"]}
            line={true}
          />
          <div >
            <div className="pdct_main_detail_box grid">
              <div>
                <div className="flex j-between">
                  <h3 className="product_title mb-10">Apple watch SE</h3>
                  <img
                    src={require(`../../assets/icons/sharecta.svg`).default}
                    alt=""
                  />
                </div>
                <p className="product_desc">
                  <strong>Price: $600.00</strong>- Silver Aluminium Case with
                  Abyss Blue Sport Band - Regular
                </p>
              </div>
              <MainProductCard />
              <ProductDetailsbox />
              
            </div>
          </div>
         
        </div>
      </section>
    </>
  );
}

export default PrdctMainDetailsSec;
