import React, { useState } from "react";

import AddNewCard from "../snippets/addNewCard";

import PaymentCard from "../snippets/paymentCard";
function SavedCardSec() {
  let arr = [1, 5, 1, 2, 3];
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <h3 className="product_title">Save Cards</h3>
      {/* <div className="save_payment_card grid"> */}
      <div className="grid save_payment_card">
        {arr.map((elem, index) => {
          return <PaymentCard key={index} index={index} deleteCta={true} bankName={elem} />;
        })}
        <div>
          <button className="add_card_cta" onClick={handleClick}>
            + Add Card
          </button>
        </div>
      </div>

      {/* </div> */}
      {open && (
        <div className="">
          <AddNewCard />
        </div>
      )}
    </>
  );
}

export default SavedCardSec;
