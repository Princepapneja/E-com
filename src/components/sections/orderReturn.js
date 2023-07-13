import React from "react";
import { Link } from "react-router-dom";
import Button from "../snippets/button";
import Inputs from "../snippets/inputs";

const OrderReturn = () => {
  const obj = [
    "Wrong Product Delivered",
    "Didn’t Like the Product",
    "Damaged Product ",
    "Arrived Too Late",
    "Other Reason",
  ];
  return (
    <>
      <div className="return_warning_box flex">
        <img
          src={require(`../../assets/icons/warningSymbol.svg`).default}
          alt="warning"
        />
        <span className="return_warning_head_desc">
          <h5 className="return_warning_heading">
            are you sure your order will be return
          </h5>
          <p className="return_warning_desc">
            Montes, sit euismod commodo id aliquam facilisis lorem quam. Tortor
            aliquam commodo id non, pellentesque nulla. Semper quis sapien eu
            nulla ipsum duis eget quis. Lectus amet, nibh ultricies purus in
            pellentesque eu amet.{" "}
          </p>
        </span>
      </div>
      <h3 className="product_title">Return Information</h3>
      <div className="return_info_box grid">
        {obj.map((e, i) => {
          return (
            <Inputs key={i} type="radio" label={e} id={i} name="returnReason" />
          );
        })}
      </div>
      <Inputs label="Product return reason Explain" />
      <div className="upload_file_box">
        <h3 className="product_title">Product Photo/Video</h3>
        <input
          type="file"
          name=""
          id="upload_return_prdct_img_video"
          className="upload_return_prdct_img_video"
        />
        <label
          className="return_prdct_dashed_box"
          htmlFor="upload_return_prdct_img_video"
        >
          <div className="rtn_prdct_img_upload grid">
            <span>
              {" "}
              <img
                src={require(`../../assets/icons/uploadIcon.svg`).default}
                alt="Upload Here"
              />
            </span>
            <span className="flex rtn_prdct_text_cta">
              <p className="drop_file_validation">
                Drop your files here. JPG or MP4 max 100mb.
              </p>
              <Button type="w_brdr_cta" label="Browse" />
            </span>
          </div>
        </label>
        <div className="flex return_cta">
          <Button type={"w_brdr_cta"} label={"Go back"} />
          <Button type={"link"} label={"Return order"} />
        </div>
      </div>
    </>
  );
};

export default OrderReturn;
