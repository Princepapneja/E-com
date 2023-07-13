import React from 'react'
import { useState } from "react";
import Button from './button';
function CheckoutPaymentOption({setMode}) {
    const [isActive, setIsActive] = useState(0);
  return (
    <>
<div className='flex j-between '>
<div className='payment_active_btns'>

     <Button type='active_cta' index={0} label='Cards(Debit, Credit)' setIsActive={setIsActive} isActive={isActive} setMode={setMode}/>
     <Button type='active_cta' index={1} label='UPI Payment' setIsActive={setIsActive} isActive={isActive} setMode={setMode}/>
     <Button type='active_cta' index={2} label='NEt Banking' setIsActive={setIsActive} isActive={isActive} setMode={setMode}/>
     <Button type='active_cta' index={3} label='EMI' setIsActive={setIsActive} isActive={isActive} setMode={setMode}/>
     <Button type='active_cta' index={4} label='Cash on delivery' setIsActive={setIsActive} isActive={isActive} setMode={setMode}/>
</div>
<div className='card_sample_img'>
<img src={require(`../../assets/icons/cardSample.svg`).default} alt="" />
</div>
</div>
    </>
  )
}

export default CheckoutPaymentOption
