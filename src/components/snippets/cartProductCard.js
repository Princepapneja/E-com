import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
function CartProductCard() {
  let [inputData, setInputData] = useState(1);
  const deleteCartProduct = (e) => {
    console.log("deleted");
  };
  return (
    <>
      <div className="product_cart_item flex">
        <div className="cart_img_box">
          <Link to='' className="cart_product_img">
            <img
              className=""
              src={require("../../assets/images/sample-watch.png")}
              alt=""
            />
          </Link>
          <div className="cart_product_quantity">
            <button className="cart_quantity_cta" onClick={() => {
                (inputData !== 0) && setInputData(--inputData) ;
              }}>
              <img
                src={require(`../../assets/icons/decriment.svg`).default}
                alt=""
              />
            </button>
            <input
              className=""
              type="number"
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />

            <button
              className="cart_quantity_cta"
              onClick={() => {
                setInputData(++inputData);
              }}
            >
              <img
                src={require(`../../assets/icons/incriment.svg`).default}
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="cart_details">
          <div>

          <Link to='' className="product_title mb-10">Apple Watch SE</Link>
          </div>
          <div>

          <Link to='' className="cart_product_desc">
            Silver Aluminium Case with Abyss Blue Sport Band - Regular
          </Link>
          </div>
          <div className="cart_details_box flex">
            <div className="cart_product_details flex">
              <button className="text-second">45mm</button>
              <div className="cart_detail_head">Size</div>
            </div>
            <div className="cart_product_details flex">
              <button className="text-second">Boys</button>
              <div className="cart_detail_head">Department</div>
            </div>
            <div className="cart_product_details flex">
              <button>Color</button>
              <div className="cart_detail_head">Color</div>
            </div>
          </div>
          <div className="flex j-between ">
            <span className="product_price">$320.00</span>
            {/* <button className="remove_cta" onClick={() => deleteCartProduct()}>
              Remove
            </button> */}
            <Button type='w_brdr_cta' label='Remove' functionName={deleteCartProduct}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProductCard;
