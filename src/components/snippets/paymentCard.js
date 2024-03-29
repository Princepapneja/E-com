import React from "react";
import Inputs from "./inputs";

function PaymentCard({ index, bankName, radioInput,deleteCta }) {
  const deleteMe= (()=>{
    let c= document.querySelector('.payment_card')
    console.log(c.outerHTML)
     c.outerHTML=''
  })
  return (
    <div
      className="payment_card"
      style={
        index % 2 === 0
          ? { background: `linear-gradient(#4226590a  102px, #67517a 66px)` }
          : {
              background: `linear-gradient(rgba(31, 41, 45, 0.04) 102px, #495F6A 66px)`,
            }
      }
    >
      <div className="payment_card_item flex">
        {bankName && (
          <>
            <div className="payment_card_delete_name flex">
               {deleteCta &&
 
                <button className="trash_icon" onClick={(()=>{
                  deleteMe()
                })}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 12 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.833333 13.3333C0.833333 14.25 1.58333 15 2.5 15H9.16667C10.0833 15 10.8333 14.25 10.8333 13.3333V3.33333H0.833333V13.3333ZM3.475 7.99167C3.15 7.66667 3.15 7.14167 3.475 6.81667C3.8 6.49167 4.325 6.49167 4.65 6.81667L5.83333 7.99167L7.00833 6.81667C7.33333 6.49167 7.85833 6.49167 8.18333 6.81667C8.50833 7.14167 8.50833 7.66667 8.18333 7.99167L7.00833 9.16667L8.18333 10.3417C8.50833 10.6667 8.50833 11.1917 8.18333 11.5167C7.85833 11.8417 7.33333 11.8417 7.00833 11.5167L5.83333 10.3417L4.65833 11.5167C4.33333 11.8417 3.80833 11.8417 3.48333 11.5167C3.15833 11.1917 3.15833 10.6667 3.48333 10.3417L4.65833 9.16667L3.475 7.99167ZM10.8333 0.833333H8.75L8.15833 0.241667C8.00833 0.0916666 7.79167 0 7.575 0H4.09167C3.875 0 3.65833 0.0916666 3.50833 0.241667L2.91667 0.833333H0.833333C0.375 0.833333 0 1.20833 0 1.66667C0 2.125 0.375 2.5 0.833333 2.5H10.8333C11.2917 2.5 11.6667 2.125 11.6667 1.66667C11.6667 1.20833 11.2917 0.833333 10.8333 0.833333Z"
                    fill="#495f6a"
                  />
                </svg>
              </button>
                  }
              <img
                className="bank_logo"
                src={require(`../../assets/images/hdfcBank.png`)}
                alt=""
              />
              <span className="bank_name">{bankName}</span>
              {/* </div> */}
            </div>
            <img
              src={require(`../../assets/icons/visaLogo.svg`).default}
              alt=""
            />
          </>
        )}
        {radioInput && (
          <>
            <Inputs
              type="radio"
              label="Shopping Card"
              name="card"
              id={index}
              img_url="visaLogo.svg"
              altText="visa"
            />
          </>
        )}
      </div>
      <div className="payment_card_item flex">
        <div className="text-first">2036</div>
        <div className="text-first">2036</div>
        <div className="text-first">2036</div>
        <div className="text-first">2036</div>
      </div>
      <div className="payment_card_item flex">
        <div>
          <div className="pay_card_head">Card Holder</div>
          <div className="pay_card_details">Ahmad Dorwart</div>
        </div>
        <span className="pay_card_expire">
          <span className="pay_card_head">Exp &nbsp;</span>
          <span className="pay_card_details">09/25</span>
        </span>
      </div>
    </div>
  );
}

export default PaymentCard;
