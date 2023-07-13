import React from 'react'
import OrderHeader from '../snippets/orderHeader'
import PlacedOrderDetails from '../snippets/placedOrderDetails'
import SecHeader from '../snippets/secHeader'

const OrderItemDetails = () => {
  return (
    <>
     <section className='section_padding order_item_details'>
        <div className="container">
            <SecHeader/>
            <OrderHeader/>
            <PlacedOrderDetails/>
        </div>
        </section> 
    </>
  )
}

export default OrderItemDetails
