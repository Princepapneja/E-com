import React from "react";
import Button from "./button";
import Inputs from "./inputs";
function AddNewCard() {
  return (
    <>
      <div className="add_card_form">
        <h3 className="delivery_form_heading">Other Card</h3>
        <form action="">
          <div className="flex input_fields">
            <Inputs label="Card name" name="name" />
            <Inputs label="Card number" name="name" />
          </div>{" "}
          <div className="flex input_fields">
            <Inputs label="CVV" name="name" />
            <Inputs label="Exp Date" name="name" />
          </div>
          <div className="divider_my-20"></div>
          <span className="card_btns flex">
            <Button type="transparent_cta" label="Save card" />
            <Button type="w_brdr_cta" label="cANCEL" />
          </span>
        </form>
      </div>
    </>
  );
}

export default AddNewCard;
