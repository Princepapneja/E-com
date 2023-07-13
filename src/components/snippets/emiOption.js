import React, { useEffect, useRef, useState } from "react";
import Inputs from "./inputs";

function EmiOption() {
  const [color, setColor] = useState();
  let arr = [1, 2, 1, 1, 1, 1, 1];
  return (
    <>
      <div className="grid upi_options_box">
        <div className="radio_box">
          <Inputs
            type="radio"
            label="Debit Card EMI"
            id="1s"
            img_url="phonepe.svg"
            name="emi_cards"
          />
        </div>
        <div className="radio_box">
          <Inputs
            type="radio"
            label="Credit Card EMI"
            id="2s"
            img_url="phonepe.svg"
            name="emi_cards"
          />
        </div>
      </div>
      <div className="divider_my-20"></div>
      <div className="flex">
        <h3 className="delivery_form_heading">No Cost EMI</h3>
        <span className="switch">switch</span>
      </div>
      <Inputs type="select" label="Emi Card" />
      <div className="emi_plan_box">
        <h3 className="text-fifth">EMI Plan </h3>
        <div className="emi_table">
          <div className="emi_header_row grid">
            <h3 className="emi_column_head">EMI (Month)</h3>
            <h3 className="emi_column_head">Interest (Amount)</h3>
            <h3 className="emi_column_head">Tatal Cost</h3>
            <h3 className="emi_column_head">Status</h3>
          </div>
          {arr.map((elem, i) => {
            return (
              <div
                className={`emi_data_row grid`}
                style={{ background: color === i ?  "#4226590a" : ''} }
                key={i}
                onClick={() => {
                  setColor(i);
                }}
              >
                <Inputs
                  type="radio"
                  label={elem}
                  id={i}
                  name="emis"
                  checked={color === i ? "checked" : ""}
                />
                <span className="text-fifth">14%</span>
                <span className="text-fifth">$540.00</span>
                <div>
                  <span className="tick_img">
                    {!true ? (
                      <img
                        className=""
                        src={
                          require(`../../assets/icons/greenCheck.svg`).default
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        className=""
                        src={
                          require(`../../assets/icons/crossAvail.svg`).default
                        }
                        alt=""
                      />
                    )}
                  </span>
                  <span className="emi_availability">available</span>
                  {/* use this class 'emi_not_avail' for not avail along with avail */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default EmiOption;
