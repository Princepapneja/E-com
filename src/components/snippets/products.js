import React from "react";
import ProductSectionCard from "./productSectionCard";
import Pagination from "./pagination";

const Products = ({
  items,
  type,
  data,
  wishlist_heart,
  clr_option,
  nrml_cta,
  hover_cta,
  in_stock,product_line,cart_cta
}) => {
  return (
    <div>
      <h3 className="total_product_item">{items}</h3>
      <div className="flex product_cards">
        {data.map((elem, index) => {
          return (
            <ProductSectionCard
              type={type}
              key={index}
              img_url={elem.img_url}
              nrml_cta={nrml_cta}
              desc={elem.desc}
              clr_option={clr_option}
              in_stock={in_stock}
              hover_cta={hover_cta}
              product_price={elem.product_price}
              product_title={elem.product_title}
              product_rating={elem.product_rating}
              product_line={product_line}
              discount_text={elem.discount_text}
              new_old_text={elem.new_old_text}
              wishlist_heart={wishlist_heart}
              cart_cta={cart_cta}
            />
          );
        })}
      </div>
      <Pagination/>

    </div>
  );
};

export default Products;
