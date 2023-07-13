import React, { Fragment, useEffect, useRef, useState } from "react";
import AboutProductHeader from "./aboutProductHeader";
const FilterAccordion = ({ index, panelHideshow, data }) => {
  const [active, isActive] = useState();
  const [rotate, setRotate] = useState();
  useEffect(() => {
    if (index === 0) {
      setRotate(true);
    } else {
      setRotate(false);
    }
  }, []);
  const ref= useRef(null)
const [value,setValue]= useState(50)

  return (
    <div className="product_filter_menu">
      <div
        onClick={() => {
          panelHideshow(index);
        }}
      >
        <AboutProductHeader
          heading={Object.keys(data)}
          rotate={rotate}
          setRotate={setRotate}
        />
      </div>
      <div className="product_trans_box">
        {data.category && (
          <>
            {data.category.map((e, i) => {
              return (
                <button
                  key={i}
                  className={`${active === i && "active"} product_filter_item`}
                  onClick={() => {
                    isActive(i);
                  }}
                >
                  {e}
                </button>
              );
            })}
            <button className="underline_cta">View All</button>
          </>
        )}
        {
          data.price &&
     <div className="price_filter">
      <span className="padd"  style={{left:`calc(${value}%)`, transform: `translateX(${-value}%)`}} >

      <span className="tooltip">{value}<span className="tooltip_square"></span></span>
      </span>
      <input ref ={ref} type="range" id="price_range" onChange={(e)=>{setValue(e.target.value)}} value={value}  className="range_input" style={{background: `linear-gradient(to right ,  #422659 ${value}%,#c9c1cf ${value/2}%)`}} />
        
        <div className="flex range_bar_details"><span className="text-third">low: $0</span><span className="text-third">High:${value*50}</span>

        </div>
     </div>
    }
    {/* clrs part */}
        <div className="flex filter_clrs">
          {data.colors &&
            data.colors.map((e, i) => {
              return (
                <div className="clr_box_item flex" key={i}>
                  <input
                    type="checkbox"
                    name="clr"
                    id={i}
                    className="clr_radio"
                  />
                  <label htmlFor={i} className="clr_circle">
                    <span
                      style={{ backgroundColor: `${e}` }}
                      className="clr_circle_inner"
                    ></span>
                  </label>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default FilterAccordion;
