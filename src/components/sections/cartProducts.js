import React from "react";
import {useState} from 'react';
import { Link } from "react-router-dom";
import CartProductCard from "../snippets/cartProductCard";
import OrderSumary from "../snippets/orderSummary";
import SecHeader from "../snippets/secHeader";

function CartProducts() {
const [isActive, setIsActive] = useState();
  return (
    <>
      <section className=" cart_products">
        <div className="container">
          <SecHeader heading={"Cart Products"} breadcrumb={["cart"]} line={true} />
          <div className="cart_box flex j-between">
          <div className="cart_product_cards">

            <CartProductCard />
            <CartProductCard />
          </div>
          <div className="cart_products_divider"></div>
          <div>
              <OrderSumary />
              <div className="emi_card">
                <h3 className="product_title mb-10">EMI Available</h3>
                <p className="text-second">No Cost EMI offers. Id aliquam felis a egestas mi diam&nbsp;
               <strong>
                <Link to="">Learn more</Link>
                </strong> 
                 </p>
                <div className="line"></div>
                <div className="emi_cta">
                <Link to=''  className={`card_cta ${(isActive === 0) ? ' active' : ''}`} onClick={(e) => setIsActive(0)}>Credit card</Link>
                <Link to='' className={`card_cta ${(isActive === 1) ? ' active' : ''}`} onClick={(e) => setIsActive(1)}>debit card</Link>
                </div>
              </div>
          </div>
          
          </div>
        </div>
      </section>
    </>
  );
}

export default CartProducts;
