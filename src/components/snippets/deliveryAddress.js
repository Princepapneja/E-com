import React from "react";
import Button from "./button";
import Inputs from "./inputs";

function DeliveryAddress() {
  return (
    <>
     <div className="delivery_address_form">

        <h3 className="delivery_form_heading">Delivery Address</h3>
        <div>

        <form action="">
          <div className="flex input_fields">
            <Inputs label="First Name" name="name" />
            <Inputs label="Mobile number" name="name" />
          </div>
          <div className="flex input_fields">
            <Inputs label="Email address" name="name" type="email" />
            <Inputs label="PIN code" name="name" />
          </div>
          <div className="flex input_fields">
            <Inputs label="Email address" name="name" type="email" />
            <Inputs label="PIN code" name="name" />
          </div>
          <Inputs label="Address 1" />
          <Inputs label="Address 2" />
          <Inputs
            type="checkbox"
            name="business_address"
            label="Business address"
          />
          <div className="addres_form_line"></div>
          <Button type="transparent_cta" label="Save Address" to='../'/>
        </form>
        </div>
        </div>
      
    </>
  );
}

export default DeliveryAddress;
