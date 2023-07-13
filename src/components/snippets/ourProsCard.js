import React from "react";

const OurProsCard = ({prosHeading,prosDesc,prosIcon}) => {
    console.log(prosIcon);
  return (
    <div className="pros_card">
      <div className="pros_logo">
        <img src={require(`../../assets/icons/${prosIcon}.svg`)} alt="" />
      </div>
        <h3 className="product_title">{prosHeading}</h3>
        <p className="pros_desc ">{prosDesc}</p>
    </div>
  );
};

export default OurProsCard;
