import React, { useState } from "react";
import AddNewCard from "./addNewCard";
import MainSlider from "./mainSlider";
import PaymentCard from "./paymentCard";

function CardPay({radioInput,bankName}) {
  let arr = [1, 5,1,2,3];
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <span className="card_cta_slider flex ">
        <div className="card_pay">
          <MainSlider
            card={arr.map((elem, index) => {
              return <PaymentCard key={index} index={index} bankName={bankName} radioInput={radioInput}/>;
            })}
          />
        </div>

        <button className="add_card_cta" onClick={handleClick}>
          {" "}
          + Add Card
        </button>
      </span>
     
      {open && <div className="">
        <AddNewCard />
      </div>}
    </>
  );
}

export default CardPay;
