import React, { useEffect, useState, useRef } from "react";
import AboutProductHeader from "./aboutProductHeader";
import Button from "./button";
import ReviewCard from "./reviewCard";

function CustomerReviews({heading,panelHideshow,index}) {
  const [rotate, setRotate]=useState(false)
  let percent = 60;
  return (
    <>
      <div
        onClick={() => {
          panelHideshow(index)
        }}
      >
        <AboutProductHeader
          heading={heading}
            // index={index}
            rotate={rotate}
            setRotate={setRotate}
        />
      </div>
      <div className="product_trans_box">
        <div className="customer_review_snippet_box flex">
          <ul>
            <li className="review_ratting_card">
              <div className="text-second flex j-between">
                <span>Rating</span>
                <span>
                  4.8 Out of 5
                  <img
                    src={require(`../../assets/icons/star.svg`).default}
                    alt="Star"
                  />
                </span>{" "}
              </div>
              <div className="divider_my-20"></div>
              <div>
                <div className="review_percentage_item flex">
                  <div className="flex review_img_num">
                    <img
                      src={require(`../../assets/icons/darkStar.svg`).default}
                      alt=""
                    />
                    <span className="ratting_num">5</span>
                  </div>

                  <div
                    className="review-bar"
                    style={{
                      background: `linear-gradient(to right, $green-color ${percent}% ,#EAF2EA ${
                        100 - percent
                      }%)`,
                    }}
                  ></div>
                  <span className="text-third">{percent}%</span>
                </div>
                <div className="review_percentage_item flex">
                  <div className="flex review_img_num">
                    <img
                      src={require(`../../assets/icons/darkStar.svg`).default}
                      alt=""
                    />
                    <span className="ratting_num"> 4</span>
                  </div>

                  <div
                    className="review-bar"
                    style={{
                      background: `linear-gradient(to right, $green-color ${percent}% ,#EAF2EA ${
                        100 - percent
                      }%)`,
                    }}
                  ></div>
                  <span className="text-third">{percent}%</span>
                </div>
                <div className="review_percentage_item flex">
                  <div className="flex review_img_num">
                    <img
                      src={require(`../../assets/icons/darkStar.svg`).default}
                      alt=""
                    />
                    <span className="ratting_num"> 3</span>
                  </div>

                  <div
                    className="review-bar"
                    style={{
                      background: `linear-gradient(to right, $green-color ${percent}% ,#EAF2EA ${
                        100 - percent
                      }%)`,
                    }}
                  ></div>
                  <span className="text-third">{percent}%</span>
                </div>
                <div className="review_percentage_item flex">
                  <div className="flex review_img_num">
                    <img
                      src={require(`../../assets/icons/darkStar.svg`).default}
                      alt=""
                    />
                    <span className="ratting_num"> 2</span>
                  </div>

                  <div
                    className="review-bar"
                    style={{
                      background: `linear-gradient(to right, $green-color ${percent}% ,#EAF2EA ${
                        100 - percent
                      }%)`,
                    }}
                  ></div>
                  <span className="text-third">{percent}%</span>
                </div>
                <div className="review_percentage_item flex">
                  <div className="flex review_img_num">
                    <img
                      src={require(`../../assets/icons/darkStar.svg`).default}
                      alt=""
                    />
                    <span className="ratting_num"> 1</span>
                  </div>

                  <div
                    className="review-bar"
                    style={{
                      background: `linear-gradient(to right, $green-color ${percent}% ,#EAF2EA ${
                        100 - percent
                      }%)`,
                    }}
                  ></div>
                  <span className="text-third">{percent}%</span>
                </div>
              </div>
            </li>
            <li className="product_review_img_box grid">
              <img
                src={require(`../../assets/images/mainProduct.png`)}
                alt=""
              />
            </li>
          </ul>
          <div className="rotated_line"></div>
          <div className="line"></div>
          <div>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />

            <Button
              type="button"
              className="review_cta"
              label={"See all reviews"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerReviews;
