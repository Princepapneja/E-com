import React from "react";
import { Link } from "react-router-dom";
function MyOrders() {
  let arr=[1,1,1,1,1,1,1,1,1,1]
  return (
    <>
      <h3 className="product_title">My Orders</h3>
      <div className="my_order_box grid">
        <div className="flex r_my_order_img_name">
          <img
            src={require(`../../assets/images/profileImg.png`)}
            alt="Profile Image"
          />
          <h4 className="my_order_item_heading">
            Boat Rockerz 425 Bluetooth Wireless
          </h4>
        </div>
        <div className="r_my_order_status">
            <span className="emi_availability">available</span>
          </div>
        <ul className="my_order_head_list grid">
          <li className="my_order_head_item">Order</li>

          <li className="my_order_head_item">
            <span>Order ID</span>
          </li>
          <li className="my_order_head_item">Date</li>
          <li className="my_order_head_item">Total</li>
          <li className="my_order_head_item">Status</li>
        </ul>
{
  arr.map((e,index)=>{
    return(
    <Link key={index} className="grid my_order_details_list">
    <div className="flex my_order_img_name">
      <img
        src={require(`../../assets/images/profileImg.png`)}
        alt="Profile Image"
      />
      <h4 className="my_order_item_heading">
        Boat Rockerz 425 Bluetooth Wireless
      </h4>
    </div>
    <span className="my_order_id text-fifth">12345678901</span>
    <span className="my_order_item_detail text-third ">
      Dec 30, 2019 05:18
    </span>
    <span className="text-third">$450.00</span>
    <div className="my_order_status">
      <span className="emi_availability">available</span>
    </div>
  </Link>
    )
  })
}
       
      </div>
    </>
  );
}

export default MyOrders;
