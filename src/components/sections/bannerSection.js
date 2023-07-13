import React from "react";
import Button from "../snippets/button";

function BannerSection({ specialBanner,heading }) {
  return (
    <section
      className="banner-section section_padding"
      style={
        specialBanner && {
          background: `url(${
            require("../../assets/images/HeaderBG.svg").default
          }) `,
        }
      }
    >
      <div className="container">
        <div
          className={`banner-content flex ${
            specialBanner && "special-banner-content"
          }`}
        >
          {!specialBanner && (
            <div className="banner-img-container">
              <img
                src={require("../../assets/images/banner-img.png")}
                alt="Section img"
              />
            </div>
          )}

          <div className="text_content flex">

<div>
{
  specialBanner && <span className="banner_special_heading ">Top collections <img
  src={require("../../assets/icons/fire-icon.svg").default}
  alt="Section img"
/></span>
}
            <h1 className="primary_heading banner_heading">
              {/* Best place to find and buy products for your need */}
              {heading}
            </h1>
</div>
            <div className="line"></div>
            <div className="first_discount flex">
              <span className="product_title">For first pruches</span>
              {
                !specialBanner && <img
                src={require("../../assets/icons/fire-icon.svg").default}
                alt="Section img"
              />
              }
              <span className="product_title discount_text">get 30% off</span>
            </div>
            <div className="flex banner_cta_box">
              <Button
                type={"link"}
                label={"Shop Now"}
                img_url={"cart-icon.svg"}
              />
              {specialBanner && (
                <>
                  <ul>
                    <li className="product_title">100k+</li>
                    <li className="text-six">Collections</li>
                  </ul>
                  <div>
                    <div className="rotated_line"></div>
                  </div>
                  <ul>
                    <li className="product_title">60k+</li>
                    <li className="text-six">Users</li>
                  </ul>
                </>
              )}
            </div>
          </div>
          {specialBanner && (
            <div className="flex skew_banners">
              <img
                className="front_banner"
                src={require("../../assets/images/banner_front.png")}
                alt="Section img"
              />
              <img
                src={require("../../assets/images/back_banner.png")}
                alt="Section img"
                className="back_banner"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
