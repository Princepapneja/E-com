import React, { useEffect, useRef, useState } from "react";
import Button from "./button";
const PlacedOrderDetails = () => {
  let ref = useRef(null);
  const [height, setHeight] = useState(50);
  useEffect(() =>{
    if (height === 100) {
      ref.current.setAttribute("style", "height: 82%");
    }else{
      ref.current.removeAttribute("style");
    }
  },[height]);
  return (
    <>
      <div className="placed_order_tracker_details grid">
        <div className="placed_order_tracker flex">
          <div className="status_bar flex" ref={ref}>
            <div
              className="green_progress_bar"
              style={{ height: `${height}%` }}
            ></div>
            <div
              className="green_progress_bar_circle"
              style={{ top: `${height}%` }}
            >
              <span className="green_progress_bar_inner_circle"></span>
            </div>
            <span className="status_dot"></span>
            <span className="status_dot"></span>
            <span className="status_dot"></span>
            <span className="status_dot"></span>
          </div>

          <ul className="status_details grid">
            <li>
              <div className="flex task_date_status">
                <h5 className="pending_task ">Ordered confirmed</h5>
                <span className="task_date">(12/08/2022)</span>
              </div>
              <div>
                <div className="line"></div>
                <p className="task_description">
                  Lorem ipsum dolor sit amet, consectetr adipiscing elit.
                  Volutpat elementum malesuada vestibulum tristique maecenas.
                </p>
              </div>
            </li>
            <li>
              <div className="flex task_date_status">
                <h5 className="pending_task ">Ordered confirmed</h5>
                <span className="task_date">(12/08/2022)</span>
              </div>
            </li>
            <li>
              <div className="flex task_date_status">
                <h5 className="pending_task ">Ordered confirmed</h5>
                <span className="task_date">(12/08/2022)</span>
              </div>
              <div>{/* //desc and line */}</div>
            </li>
            <li>
              <div className="flex task_date_status">
                <h5 className="pending_task processing_task compeleted_task ">
                  Ordered confirmed
                </h5>
                <span className="task_date">(12/08/2022)</span>
              </div>
              {/* line and desc  */}
              <div>
                <div className="line"></div>
                <p className="task_description">
                  Lorem ipsum dolor sit amet, consectetr adipiscing elit.
                  Volutpat elementum malesuada vestibulum tristique maecenas.
                </p>
              </div>
               
            </li>
          </ul>
        </div>
        <div>
          <div className="placed_order_img_details flex">
            <ul className="placed_order_detail_list">
              <li className="placed_order_detail_item">
                <h3 className="product_title mb-10  ">Apple watch SE </h3>
                <p className="product_desc">
                  Silver Aluminium Case with Abyss Blue Sport Band - Regular
                </p>
              </li>
              <li className="placed_order_detail_item">
                <span className="placed_order_color_details">color</span>{" "}
                <span className="text-fifth">Black</span>
              </li>
              <li className="placed_order_detail_item">
                <span className="section_heading">$320.00</span>
              </li>
            </ul>
            <div className="placed_order_img grid">
              <img
                src={require(`../../assets/images/mainProduct.png`)}
                alt=""
              />
            </div>
          </div>
          {/* Shipping address box */}
          <div className="shipping_details_box flex">
            <div>
              <h3 className="product_title">Shipping Address</h3>
              <p className="delivery_Address">
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
            </div>
            <img
              src={
                require(`../../assets/icons/DeliveryDiningOutlined.svg`).default
              }
              alt=""
            />
          </div>
          <div className="placed_order_cta flex">
          <Button
              type="w_brdr_link"
              label="Return"
              className={height !== 100 && "disabled_w_brdr_link"}
              
            />
            
            <Button
              type="link"
              label="Rate"
              className={height !== 100 && "disabled_link"}
              img_url="whiteStar"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacedOrderDetails;
