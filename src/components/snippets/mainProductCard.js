
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductSmallSlider from "./productSmallSlider";

function MainProductCard() {
  let arr = [
    "mainProduct",
    "iphone",
    "bluetooth",
    "iphone",
    "smallProductImage",
    "iphone",
  ];
  const [wishList, setWishList] = useState(false);
  const [selectedImg, setSelectedImg] = useState(arr[0]);
  // let location= useLocation()
  return (
    <div className="main_product_card">
      <div className="main_pdct_img_container flex">
        <div className="pdct_img_slider_box">
          <div className="down_arrow_img rotate-180 up_arrow_click">
            <img
              src={require(`../../assets/icons/downwardArrow.svg`).default}
              alt=""
            />
          </div>
          <div className="sm_prdct_slider_box">
            <ProductSmallSlider
              className='prdct_slider_img'
              img_url={arr}
              setSelectedImg={setSelectedImg}
              selectedImg={selectedImg}
            />
          </div>

          <div className="down_arrow_img down_arrow_click">
            <img
              src={require(`../../assets/icons/downwardArrow.svg`).default}
              alt=""
            />
          </div>
        </div>
        <div className="rotated_line"></div>
        <div className="prdct_large_img_box grid">
          <button
            className="wishlist_heart"
            onClick={() => setWishList(!wishList)}
          >
            <svg
              className={`heart ${wishList && "heart_active"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="19"
              viewBox="0 0 22 19"
              fill="none"
            >
              <path
                d="M16.929 1.04888C13.929 0.548933 11.929 4.04881 10.929 4.04881C9.92904 4.0488 8.59575 0.641578 4.92902 1.04885C1.26229 1.45613 -0.0709708 5.20934 1.929 9.20936C3.92898 13.2094 7.92901 17.0489 10.929 17.0489C13.929 17.0489 17.929 13.2094 19.929 9.20936C21.929 5.20934 19.929 1.54883 16.929 1.04888Z"
                stroke="#495F6A"
                strokeWidth="2"
              />
            </svg>
          </button>
       
            <img
              className="main_product_img"
              src={require(`../../assets/images/${selectedImg}.png`)}
              alt=""
            />
            <div className="on_prdct_ship_detail ">
              <img
                src={require(`../../assets/icons/shippingBox.svg`).default}
                alt=""
              />
              <p className="text-six">
                Free delivery by <span className="ship_provider">Buynow </span>
              </p>
            </div>
        
        </div>
      </div>
      <div className=" special_on_prdct_ship_detail ">
        <img
          src={require(`../../assets/icons/shippingBox.svg`).default}
          alt=""
        />
        <p className="product_desc">
          Free delivery by <span className="ship_provider">Buynow </span>
        </p>
      </div>
    </div>
  );
}

export default MainProductCard;
