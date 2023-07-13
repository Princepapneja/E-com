import React from "react";
import Button from "./button";
function OrderSumary({
  label,
  item_quantity,
  shipping_cost,
  total_amount,
  product_price,
  cta_label,
}) {
  return (
    <>
      <ul className="order_details_list">
        <li className="order_details_item">
          <h3 className="order_details_heading">{label}</h3>
        </li>
        <li className="order_details_item">
          <div className="j-between mb-10 flex">
            {" "}
            <span className="text-second">Subtotal</span>
            <span className="text-second">$ {product_price}</span>
          </div>
          <div className="flex j-between mb-10">
            {" "}
            <span className="text-second">Item</span>
            <span className="text-second">{item_quantity}</span>
          </div>
          <div className="j-between flex">
            {" "}
            <span className="text-second">Shipping</span>
            <span className="text-second">{shipping_cost}</span>
          </div>
        </li>
        <li className="line order_details_item"></li>
        <li className="j-between flex order_details_item">
          <span className="text-second">Total Amount</span>
          <span className="product_price">$ {total_amount}</span>
        </li>

        <li className="order_summary_cta t-center ">
          <Button type="link" label={cta_label} className="d-block" />
        </li>
      </ul>
    </>
  );
}

export default OrderSumary;
