import React from "react";
import Button from "../snippets/button";

function SpecialCard() {
  return (
    <>
      <ul className="special_card flex f-column">
        <li className="">
          <h4 className="special_card_heading">Product for you</h4>
          <p className="specical_card_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu nulla
            nunc aenean ac donec lectus in vel.
          </p>
        </li>
        <li>
          <Button type="link" className="special_card_cta" label="view all" />
        </li>
      </ul>
    </>
  );
}

export default SpecialCard;
