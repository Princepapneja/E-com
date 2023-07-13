import React from "react";
import RattingStar from "./rattingStar";
import { Link } from "react-router-dom";
import Button from "./button";
import MainSlider from "./mainSlider";
function ProductDetailsbox() {
  return (
    <form action="" className="main_prdct_detail_list">
      <div className="line main_prdct_detail_item"></div>
      <div className="main_prdct_detail_item">
        <h4 className="product_desc mb-10">Color</h4>

        <div>
          <MainSlider
            card={[
              // arr.map(() => {
              // return (

              <div className="clr_box_item flex">
                <input
                  type="radio"
                  name="clr"
                  id="color1"
                  className="clr_radio"
                />
                <label htmlFor="color1" className="clr_circle">
                  <span
                    style={{ backgroundColor: "#DCE775" }}
                    className="clr_circle_inner"
                  ></span>
                </label>

                <label className="product_desc" htmlFor="color1">
                  clr NAMe
                </label>
              </div>,
              <div className="clr_box_item flex">
                <input
                  type="radio"
                  name="clr"
                  id="color2"
                  className="clr_radio"
                />
                <label htmlFor="color2" className="clr_circle">
                  <span
                    style={{ backgroundColor: "#1F292D" }}
                    className="clr_circle_inner"
                  ></span>
                </label>
                <label className="product_desc" htmlFor="color2">
                  clr NAMe
                </label>
              </div>,
              <div className="clr_box_item flex">
                <input
                  type="radio"
                  name="clr"
                  id="color3"
                  className="clr_radio"
                />
                <label htmlFor="color3" className="clr_circle">
                  <span
                    style={{ backgroundColor: "#81C784" }}
                    className="clr_circle_inner"
                  ></span>
                </label>

                <label className="product_desc" htmlFor="color3">
                  clr NAMe
                </label>
              </div>,
              //   );
              // })
            ]}
          />

          {/*
           */}
        </div>
      </div>
      <div className="line main_prdct_detail_item"></div>
      <div className="main_prdct_detail_item">
        <h4 className="product_desc mb-10">Size (mm)</h4>
        <div className="size_scale">
          <MainSlider
            left_pad={20}
            card={[
              <div>
                <input type="radio" name="c" id="30" className="size_number" />
                <label className="size_scale_label" htmlFor="30">
                  30
                </label>
              </div>,
              <div>
                <input type="radio" name="c" id="32" className="size_number" />
                <label className="size_scale_label" htmlFor="32">
                  32
                </label>
              </div>,
              <div>
                <input type="radio" name="c" id="34" className="size_number" />
                <label className="size_scale_label" htmlFor="34">
                  34
                </label>
              </div>,
              <div>
                <input type="radio" name="c" id="36" className="size_number" />
                <label className="size_scale_label" htmlFor="36">
                  36
                </label>
              </div>,

              <div>
                <input type="radio" name="c" id="30" className="size_number" />
                <label className="size_scale_label" htmlFor="30">
                  30
                </label>
              </div>,
              <div>
                <input type="radio" name="c" id="32" className="size_number" />
                <label className="size_scale_label" htmlFor="32">
                  32
                </label>
              </div>,
              <div>
                <input type="radio" name="c" id="34" className="size_number" />
                <label className="size_scale_label" htmlFor="34">
                  34
                </label>
              </div>,
              <div>
                <input type="radio" name="c" id="36" className="size_number" />
                <label className="size_scale_label" htmlFor="36">
                  36
                </label>
              </div>,
            ]}
          />
        </div>
      </div>
      <div className="line main_prdct_detail_item"></div>
      <div className="main_prdct_detail_item">
        <div className="flex prdct_price_box">
          <span>
            <h4 className="section_heading">$320.00</h4>
            <p className="text-third">Inclusive of all taxes</p>
          </span>
          <span>
            <h4 className="number_ratting">4.5</h4>
            <RattingStar />
          </span>
        </div>
        <p className="product_desc">
          10-day replacement only &nbsp;
          <Link to="" className="text-second">
            Read more
          </Link>
        </p>
      </div>
      <div className="main_prdct_detail_item flex">
        <Button type="transparent_cta" label="Add to cart" className="prdct_btn" />
        <Button type="link" label="Buy now" className="prdct_btn" />
      </div>
    </form>
  );
}

export default ProductDetailsbox;
