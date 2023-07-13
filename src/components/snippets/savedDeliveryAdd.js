import React from "react";
import Button from "./button";

function SavedDeliveryAdd() {
  return (
    <>
      <div className="saved_address_card ">
        <div>
          <span>
            <h3 className="product_title">Ahmad Dorwart</h3>
          </span>
          <span className="address_tag">Home</span>
        </div>
        <div className="flex saved_add_desc_cta">
          <p className="product_desc">
            3891 Ranchview Dr. Richardson, California 62639
          </p>
        
          <Button type='w_brdr_cta' label='Select address'/>
        </div>
      </div>
    </>
  );
}

export default SavedDeliveryAdd;
