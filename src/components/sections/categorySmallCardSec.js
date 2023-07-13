import React from "react";
import CategorySmallCard from "../snippets/categorySmallCard";
import MainSlider from "../snippets/mainSlider";

const CategoryCardSec = ({ sectionName }) => {
  return (
    <section className={`section_padding ${sectionName && sectionName}`}>
      <div className="container">
        <div className="category_small_card_parent">
          {/* <img className="sec_arrow_left"
          src={require(`../../assets/icons/arrow_with_circle.svg`).default}
          alt=""
        /> */}
          <svg
            className="sec_arrow_left"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.501953"
              width="31"
              height="31"
              rx="15.5"
              fill="white"
              stroke="#67517A"
            />
            <path
              d="M14.6754 11.5898C14.3508 11.2651 13.8244 11.2651 13.4998 11.5898C13.1754 11.9142 13.1751 12.44 13.4991 12.7648L16.0245 15.2956C16.414 15.686 16.414 16.3179 16.0245 16.7083L13.4991 19.2391C13.1751 19.5639 13.1754 20.0897 13.4998 20.4141C13.8244 20.7388 14.3508 20.7388 14.6754 20.4141L18.3805 16.7091C18.771 16.3185 18.771 15.6854 18.3805 15.2948L14.6754 11.5898Z"
              fill="#1F292D"
            />
          </svg>

          <MainSlider
            card={[
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
              <CategorySmallCard
                img_url="cameraLens.png"
                category_name={"lappy"}
              />,
            ]}
            sectionName={sectionName && sectionName}
          />
          {/* <img
          src={require(`../../assets/icons/arrow_with_circle.svg`).default}
          alt=""
          className="sec_arrow_right"
        /> */}
          <svg
            className="sec_arrow_right"
            width="32"
            height="33"
            viewBox="0 0 32 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.501953"
              width="31"
              height="31"
              rx="15.5"
              fill="white"
              stroke="#67517A"
            />
            <path
              d="M14.6754 11.5898C14.3508 11.2651 13.8244 11.2651 13.4998 11.5898C13.1754 11.9142 13.1751 12.44 13.4991 12.7648L16.0245 15.2956C16.414 15.686 16.414 16.3179 16.0245 16.7083L13.4991 19.2391C13.1751 19.5639 13.1754 20.0897 13.4998 20.4141C13.8244 20.7388 14.3508 20.7388 14.6754 20.4141L18.3805 16.7091C18.771 16.3185 18.771 15.6854 18.3805 15.2948L14.6754 11.5898Z"
              fill="#1F292D"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CategoryCardSec;
