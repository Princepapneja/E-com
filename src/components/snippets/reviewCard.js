import React from "react";
import Button from "./button";
import RattingStar from "./rattingStar";
function ReviewCard() {
  return (
    <>
      <div className="review_card">
        <div className="reviwer_profile_details mb-10 flex ">
          <div>
            <img
              src={require(`../../assets/icons/Avatar.svg`).default}
              alt="Avatar"
              className="review_avatar"
            />
            <span>
              <h3 className="text-second">Craig Septimus</h3>
              <p className="text-third">6 July 2021</p>
            </span>
          </div>
          <div className="reviwer_ratting">
            <RattingStar star='3.5' />
          </div>
        </div>
        <p className="text-third mb-10">
          A mauris amet, et molestie urna ut. Felis, eros varius molestie amet,
          quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et
          sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae
          suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae
          sed.
        </p>
        <div className="line mb-10"></div>
        <div className="t-center">
          {/* <span> */}
          <Button type="transparent_cta" label={"Helpful"} />
          {/* </span> */}
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
