import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import RattingStar from "./rattingStar";

const ProductSectionCard = ({
  discount_text,
  new_old_text,
  wishlist_heart,
  img_url,
  product_title,
  product_rating,
  product_price,
  hover_cta,
  desc,
  nrml_cta,
  clr_option,
  product_line,
  type,
  in_stock,
  cart_cta,
}) => {
  const [wishList, setWishList] = useState(false);
  // console.log(nrml_cta)
  return (
    <>
      <ul
        className={
          type === "center"
            ? "special_product_card"
            : type === "third"
            ? "product_card bg-white"
            : type === "reverse"
            ? "reverse_product_card"
            : type === "full_img"
            ? "product_full_img_card"
            : type === "center_img"
            ? "bg-white product_card"
            : "product_card"
        }
      >
        <li className="product_header flex">
          {discount_text && (
            <span className="discount_offer">{discount_text}</span>
          )}
          <div className="flex discount_heart">
            {new_old_text && (
              <span className="discount_offer">{new_old_text}</span>
            )}
            {wishlist_heart && (
              <svg
                onClick={() => setWishList(!wishList)}
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
            )}
          </div>
        </li>
        {/* <Link to="/vbmv "> */}
        {type === "center_img" && desc && (
          <li className=" product_desc center_img_product_desc">
            <Link to="/"> {desc}</Link>
          </li>
        )}
        {img_url && (
          <li
            className={
              type === "center"
                ? "special_product_image"
                : type === "third"
                ? " bg-main product_image"
                : type === "reverse"
                ? "reverse_product_image"
                : type === "full_img"
                ? "product_full_img"
                : type === "center_img"
                ? "product_center_img"
                : "product_image"
            }
          >
            <Link to="/">
              <img src={require(`../../assets/images/${img_url}`)} alt="" />
            </Link>
          </li>
        )}
        {clr_option && (
          <li className="color_list flex">
            <div className="item_color_green"></div>
            <div className="item_color_yellow"></div>
            <div className="item_color_brown"></div>
            <div className="item_color_black"></div>
          </li>
        )}
        {/* </Link> */}
        <li
          {...((type === "center" || type === "reverse") && {
            className: "t-center",
          })}
        >
          <ul className={type !== "reverse" ? "product_detail_box" : ""}>
            {/* ${type === "center" && "mb-10"} */}
            {product_title && (
              <li
                className={`mb-10 ${
                  type === "full_img" ? "product_desc" : "product_title"
                }`}
              >
                <Link to="/">{product_title}</Link>
              </li>
            )}
            {type !== "center_img" && desc && (
              <li className=" product_desc mb-10">
                <Link to="/"> {desc}</Link>
              </li>
            )}
            {type === "full_img"  &&  (
              <li className="flex full_img_price_rating">
                {
                   product_price  &&
                <span className="product_price">{product_price}</span>

                }
                {
                  product_rating  &&
                <div className="product_rating">
                  <RattingStar star={product_rating} />
                </div>
                }

              </li>
            )}
            {type !== "full_img" && product_rating && (
              <li className="product_rating mb-10">
                {/* <img
                  src={require(`../../assets/icons/${product_rating}`)}
                  alt="error"
                /> */}

                <RattingStar star={product_rating} />
              </li>
            )}
            {product_line && <li className="product_line"></li>}

            <li>
              <ul
                className={`flex product_price_cart ${
                  (type === "center" || type === "reverse") && "f-column"
                } `}
              >
                {type !== "full_img" && product_price && (
                  <li className="product_price">{product_price}</li>
                )}
                {cart_cta && (
                  <li className="cart_cta">
                    <Link to="/cart">
                      <img
                        src={
                          require("../../assets/icons/cart-icon.svg").default
                        }
                        alt="imgError"
                        className="simple_product_cart_img"
                      />
                    </Link>
                  </li>
                )}
                {nrml_cta && (
                  <li className="nrml_cta">
                    <Button
                      label="Buy"
                      type="link2"
                      className="view_cta text-uppercase"
                    />
                  </li>
                )}
                {in_stock && <div className="in_stock_cta">In-stock</div>}
                {hover_cta && (
                  <li>
                    <Link to="" className="product_cart_button">
                      <img
                        src={
                          require("../../assets/icons/cart-icon.svg").default
                        }
                        alt="imgError"
                        className="product_cart_img"
                      />
                      <p className=" product_cart_cta">Add Cart</p>
                    </Link>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default ProductSectionCard;
