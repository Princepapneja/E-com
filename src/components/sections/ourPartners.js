import React from "react";

function OurPartners() {
  let arr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <section className="our_partners section_padding">
        <div className="container">
          <div className="partner_heading t-center">
            <span>our partners</span>
          </div>
          <div className="flex partners_imgs">
            {arr.map((e,index) => {
              return (
                <div key={index} className="partners_img">
                  <img
                    src={
                      require("../../assets/images/partner_logo.svg").default
                    }
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default OurPartners;
