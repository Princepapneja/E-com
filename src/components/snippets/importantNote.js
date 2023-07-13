import React from 'react'
import Button from './button'

function ImportantNote() {
  return (
    <>
    <div className='imp_note_container'>

      <h3 className="product_title ">
      Important note
      </h3>
      <p className="product_desc">
      Consectetur adipiscing elit. At praesent volutpat accumsan non adipiscing. Amet, sed in fames nec tincidunt. Neque vel urna facilisis vel nisl non. Lacinia scelerisque in nunc egestas et. Mauris duis sed pharetra, vulputate ut elit blandit donec. Tristique id a integer malesuada imperdiet tincidunt quis cras faucibus. Erat vitae auctor odio interdum magna non.
      </p>
      <div className='t-right'>

      <Button type='w_brdr_cta' label='View Buynow Policy' />
      </div>
    </div>
    </>
  )
}

export default ImportantNote
