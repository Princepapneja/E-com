import React, { useState } from "react";
import AddUpiNetBanking from "./addUpiNetBanking";
import Inputs from "./inputs";

function UpiNetBanking({mode}) {
  let upiOptions = [

      'Phone pay',
      'Google pay','Paytm','Amazon','Freerecharge '
  ]
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="grid upi_options_box">
        {upiOptions.map((e, index) => {
          return (
            <div key={index} className="radio_box">
             <Inputs type='radio' label={e} name='upiOption' id={index} img_url='phonepe.svg' />
              
            </div>
          );
        })}
        <button className="add_card_cta" onClick={handleClick}>+ Add {`${(mode===1)?'upi': 'Bank'}`}</button>
      </div>
        <div className="divider_my-20"></div>
        {open && 
      <AddUpiNetBanking formHeading={(mode===1) ? 'Other Upi': 'other Banks'} label={`Save ${(mode===1)?'upi': 'BAnk'}`}/>
      }
    </>
  );
}

export default UpiNetBanking;
