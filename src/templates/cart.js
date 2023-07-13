import React from 'react'
import CartProducts from '../components/sections/cartProducts';
import CartRelatedProduct from '../components/sections/cartRelatedProduct';
import Layout from "../layout";
function Cart() {
  return (
    <>
<CartProducts/>
<CartRelatedProduct/>
    </>
  )
}

export default Layout(Cart)
