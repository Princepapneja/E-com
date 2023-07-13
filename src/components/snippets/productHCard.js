import React, { useRef } from "react";
import { Link } from "react-router-dom";
function ProductHCard({
  discount,
  title,
  price,
  clr_opt,
  desc,
  line,
  img_url,
  type,
  index,
}) {
  // const ref= useRef(null)
  // if(type !== "special_card"){
  //   ref.current.removeAttribute('style')
  // }
  return (
    <>
      {/* li
          {...((type === "center" || type === "reverse") && {
            className: "t-center",
          })}
        ></li>< */}
      <div 
        className={`flex ${
          (type === "special_card" )? "special_product-h_card" : (type === "banner_card" )? "banner_product-h_card":"product-h_card"
        }`} 
        {...(type === "special_card" && {style:
          {
            background: `${
              (index === 0)
                ? "rgba(237, 95, 96, 0.04)"
                : (index === 1)
                ? "rgba(66, 38, 89, 0.04)"
                : "rgba(73, 95, 106, 0.04)"
            } url(${require("../../assets/images/Card.svg").default}) `,
          }
        })}
        
      
        >
        <div className="h_card_left">
          <Link to="">
            <ul className="h_detail_box">
              {discount && <li className="h_discount" >{discount}</li>}
              {title && <li className="h_product_title"> {title} </li>}
              {price && <li className="h_product_price">$ {price}</li>}
              {desc && <li className="text-third">{desc}</li>}
            </ul>
          </Link>
          {line && <div className="h_product_line"></div>}
          {clr_opt && (
            <div className="h_clr_box">
              <button className="h_color"></button>
              <button className="h_color"></button>
              <button className="h_color"></button>
              <button className="h_color"></button>
            </div>
          )}
        </div>
        {img_url && (
          <Link to="" className="link_img">
            <img
              className="product_h_img special_product_h_img"
              src={require(`../../assets/images/${img_url}`)}
              alt=""
            />
          </Link>
        )}
      </div>
    </>
  );
}

export default ProductHCard;
