import React from "react";
import Button from "./button";
import Inputs from "./inputs";
function AddUpiNetBanking({ formHeading, label }) {
  return (
    <>
    
      <div className="add_card_form">
        <h3 className="delivery_form_heading">{formHeading}</h3>
        <form action="">
          <Inputs  label={label} />

          <div className="divider_my-20"></div>
          <span className="card_btns flex">
          <Button type="transparent_cta" label={label} />
            <Button type="w_brdr_cta" label="cANCEL" />
          </span>
        </form>
      </div>
    </>
  );
}

export default AddUpiNetBanking;
