import React from "react";
import Button from "../snippets/button";
import CheckoutPaymentOption from "../snippets/checkoutPaymentOption";
import DeliveryAddress from "../snippets/deliveryAddress";
import ImportantNote from "../snippets/importantNote";
import OrderSumary from "../snippets/orderSummary";
import SavedDeliveryAdd from "../snippets/savedDeliveryAdd";
import SecHeader from "../snippets/secHeader";
import { useState } from "react";
import CardPay from "../snippets/cardPay";
import UpiNetBanking from "../snippets/upiAndNetBanking";
import CashOnDelivery from "../snippets/cashOnDelivery";
import EmiOption from "../snippets/emiOption";

function CheckoutSec() {
  let signin = true;
  let cta_data = [
    {
      label: "Register",
      img_url: "checkoutRegister",
      to: "login",
    },
    {
      label: "Log In",
      img_url: "checkoutLogin",
      to: "login",
    },
    {
      label: "Google",
      img_url: "checkoutGoogle",
      to: "deliveryAddress",
    },
    {
      label: "Facebook",
      img_url: "checkoutFacebook",
      to: "login",
    },
  ];

  const [mode, setMode] = useState(0);
  const handelCheckout = () => {
    console.log('hi')
    return (
      <>
        <DeliveryAddress />
      </>
    );
  };
  function handeClick() {
    if (mode === 0) {
      return <CardPay radioInput={true} />;
    } else if (mode === 1) {
      return <UpiNetBanking mode={mode} />;
    } else if (mode === 2) {
      return <UpiNetBanking mode={mode} />;
    } else if (mode === 3) {
      return <EmiOption />;
    } else if (mode === 4) {
      return <CashOnDelivery />;
    }
  }

  return (
    <>
      <section className="section_padding checkout_section">
        <div className="container">
          <SecHeader
            heading={"Checkout"}
            breadcrumb={["Checkout"]}
            line={true}
          />
          <CheckoutPaymentOption setMode={setMode} />
          <div className="cta_summary_box flex ">
            <div className="checkout_sign_cta">
              {/* for Login page */}

              {/* {cta_data.map((e, index) => {
                return (
                  <div className="sign_ctas " key={index}>

                  <Button
                    type={"link3"}
                    img_url={e.img_url}
                    
                    label={e.label}
                    to={e.to}
                    />
                    </div>
                );
              })} */}

              {/* New Delivery Address  */}
              {/*  */}

              {/* saved add part */}

              {/* <SavedDeliveryAdd/>
              <SavedDeliveryAdd/>
              <div className="address_form_line"></div>
              <Button type='transparent_cta' label='Add new address'/> */}

              {/* for card Payment */}
              {/* {handelCheckout()} */}
              {handeClick()}
            </div>

            <div>
              <OrderSumary
                label={"Summary"}
                cta_label={"Add delivery address"}
              />
            </div>
          </div>
          <ImportantNote />
        </div>
      </section>
    </>
  );
}

export default CheckoutSec;
