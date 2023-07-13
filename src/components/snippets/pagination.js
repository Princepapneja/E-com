import React from "react";
import { Link, NavLink } from "react-router-dom";

const Pagination = () => {
  return (
    <>
      <div className="flex pagination_box">
        <button className="arrow_cta">
          <img
            className="rotate-180"
            src={require(`../../assets/icons/right_arrow_light.svg`).default}
            alt=""
          />
        </button>

          <Link className="page_number active">1</Link>
          <Link className="page_number active">2</Link>
          <span></span>
          <Link className="page_number active">9</Link>
          <Link className="page_number active">10</Link>
        
        <button className="arrow_cta">
          <img
            src={require(`../../assets/icons/right_arrow_light.svg`).default}
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default Pagination;
