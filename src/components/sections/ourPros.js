import React from "react";
import OurProsCard from "../snippets/ourProsCard";

const OurPros = () => {
  let data = [
    {
      prosHeading: "Free delivery",
      prosDesc: "Delivery is free for orders above $50.00",
      prosIcon: "freeDeliveryIcon",
    },
    {
      prosHeading: "Easy Return",
      prosDesc: "Money back after 5 days ",
      prosIcon: "easy_return",
    },
    {
      prosHeading: "Flexible Payment",
      prosDesc: "Multiple credit cards options Support",
      prosIcon: "flexible_payment",
    },
    {
      prosHeading: "24/7 Support",
      prosDesc: "We available all time for you",
      prosIcon: "support",
    },
  ];
  return (
    <section className="section_padding">
      <div className="container">
        <div className="pros-container flex">
          {data.map((e, i) => {
            return (
              <OurProsCard
                key={i}
                prosIcon={e.prosIcon}
                prosHeading={e.prosHeading}
                prosDesc={e.prosDesc}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurPros;
