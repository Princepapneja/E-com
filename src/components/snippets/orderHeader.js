import React from "react";
import Button from "./button";

const OrderHeader = () => {
  return (
    <>
      <div className="order_header flex">
        <div className="flex order_header_left">
          <div>
            <span className="ordr_header_heading">order_id </span>
            <span className="ordr_header_detail">021D0252G56404930</span>
          </div>
          
          <button className="clipboard_icon">
          <img
                src={require(`../../assets/icons/clipBoard.svg`).default}
                alt="Copied to Clipboard"
              />
          </button>
        </div>
        <Button type={"link2"} fillClr='#fff' className="order_header_right_cta" label="View all orders" />
      </div>
    </>
  );
};

export default OrderHeader;
