import React from "react";
import Button from "../snippets/button";
import ChatWithAgent from "../snippets/chatWithAgent";

const CustomerCare = () => {
  return (
    <>
      <section className=" section_padding  ">
        {/* <div className="container"> */}
          <div className=" flex customer_care_chat_prdct">
            <div className="look_chat_cta">
              <Button
                type="link3"
                to={'/chat-with-agent'}
                img_url={"companyLogo.svg"}
                label="Customer Service"
              />
            </div>
            <div className="chat_product_details_box">
              <ul className="placed_order_detail_list">
                <li className="placed_order_detail_item">
                  <h3 className="product_title mb-10  ">Apple watch SE </h3>
                  <p className="product_desc">
                    Silver Aluminium Case with Abyss Blue Sport Band - Regular
                  </p>
                </li>
                <li className="placed_order_detail_item clr-none">
                  <span className="placed_order_color_details">color</span>{" "}
                  <span className="text-fifth">Black</span>
                </li>
                <li className="placed_order_detail_item grid r_color_price">
                  <span className="section_heading">$320.00</span>
                  <div className="r_color_details">
                    <span className="placed_order_color_details">color</span>{" "}
                    <span className="text-fifth">Black</span>
                  </div>
                </li>
              </ul>
              <div className="chat_product_img grid">
                <img
                  src={require(`../../assets/images/mainProduct.png`)}
                  alt=""
                />
              </div>
            </div>
            <div className="chat_with_agent">
              <ChatWithAgent />
            </div>
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default CustomerCare;
