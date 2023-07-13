import React from 'react'
import Inputs from './inputs'

function CashOnDelivery() {
  return (
    <>
      <div className="radio_box">
        <Inputs type='radio' label='Pay on delivery' id='cod' name='paymentOption' spanText='available'/>
      </div>
      <div className="divider_my-20"></div>
        <h3 className='text-second'>more details</h3>
        <div className="cod_breif">Ut fermentum fringilla pretium amet arcu etiam habitasse praesent. Auctor at nunc lacinia sit. Posuere aenean donec ac sit in. Elementum ac eu purus elit. At velit, dictum neque purus accumsan, proin ut non. Eu in consequat non dui eget feugiat.</div>
      
    </>
  )
}

export default CashOnDelivery
