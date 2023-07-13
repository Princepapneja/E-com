import React from "react";

function DeliverySlider() {
  //   let signin = true;
  return (
    <>
      <div className="checkout_menu_box">
        <div className="flex checkout_menu">
        <h5 className="checkout_menu_heading">Sign-in</h5>
        <h5 className="checkout_menu_heading">Sign-in</h5>
        <h5 className="checkout_menu_heading">Sign-in</h5>
        <h5 className="checkout_menu_heading">Sign-in</h5>
    
        </div>
      <div className="d_slider_box">
        <div className="Checkout-line flex">
          <div className="d_slider_circle">
            <img src={require(`../../assets/icons/centerCircle.svg`).default} alt="" /> 
          </div>
          <div className="d_slider_circle">
        <div className="d_slider_circle_inner"></div>
            {/* <img src={require(`../../assets/icons/centerCircle.svg`).default} alt="" />  */}
          </div>
          <div className="d_slider_circle">
            <img src={require(`../../assets/icons/centerCircle.svg`).default} alt="" /> 
          </div>
          <div className="d_slider_circle">
            <img src={require(`../../assets/icons/centerCircle.svg`).default} alt="" /> 
          </div>
          
          
          
        </div>
      </div>
      </div>

    </>
  );
}

export default DeliverySlider;
