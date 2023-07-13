import React, { useState } from "react";
import AboutProductHeader from "./aboutProductHeader";
import Button from "./button";
import FilterAccordion from "./filterAccordion";

const ProductFilter = ({ panelHideshow }) => {
  let obj = [
     {category:["Watches",
      "Mobiles",
      "Laptops",
      "Tablets",
      "Headphones",
      "Printers",
      "Scanners",
      "Speakers",
    ]},{price:[
      '4$','50$'
    ]},
    {colors:[
      "yellow",
      "red",
      "green",
      "grey",
      "blue",
      "purple",
      "aliceblue",
      "pink",
      "black",
      "brown",
      "gold",
      "silver",
      "orange",
      "skyblue",
      "tan",
    ]}
    
  ];

  return (
    <>
      <div className="product_filter_box">
        <div className="product_filter_head flex">
          <h3 className="product_title">Filter</h3>
          <Button type="w_brdr_cta" label={"Clear all"} />
        </div>
        <div className="line"></div>
        {
        obj.map((e, i) => {
          return (
            <FilterAccordion
              data={e}
              panelHideshow={panelHideshow}
              index={i}
              key={i}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProductFilter;
