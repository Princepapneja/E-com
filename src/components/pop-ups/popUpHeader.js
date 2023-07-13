import React from "react";

const PopUpHeader = () => {
  return (
    <div className="pop-up_header">
      <h3 className="pop-up_heading">Filter</h3>
      <img src={require(`../../assets/icons/crossP.svg`).default} alt="" />
    </div>
  );
};

export default PopUpHeader;
