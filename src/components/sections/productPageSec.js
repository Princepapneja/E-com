import React from "react";
import Products from "../snippets/products";
import SecHeader from "../snippets/secHeader";
import product from "../../assets/json/products.json";
import ProductFilter from "../snippets/productFilter";
const ProductPageSec = ({panelHideshow}) => {
  return (
    <>
      <section className="section_padding wishlist_section">
        <div className="container">
          <SecHeader breadcrumb={["Products"]} heading="Products" line={true} />
          <div className="filter_and_products flex">
            <ProductFilter panelHideshow={panelHideshow}/>
            <Products
              items={"Showing 1–9 of 200 results"}
              type={"full_img"}
              data={product}
              hover_cta={true}
              in_stock={true}
              product_line={true}
              wishlist_heart={true}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPageSec;
