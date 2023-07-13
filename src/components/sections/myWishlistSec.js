import React from "react";
import Products from "../snippets/products";
import ProductSectionCard from "../snippets/productSectionCard";
import SecHeader from "../snippets/secHeader";
import wishList from "../../assets/json/wishList.json"
import Pagination from "../snippets/pagination";

function MyWishlistSec() {
  return (
    <>
      <section className="section_padding wishlist_section">
        <div className="container">
          <SecHeader
            breadcrumb={["Wishlist"]}
            heading="My wishlist"
            line={true}
          />
          <Products items={"10 items"} data={wishList} clr_option={true} nrml_cta={true} product_line={true}/>
          <Pagination/>
        </div>
      </section>
    </>
  );
}

export default MyWishlistSec;
