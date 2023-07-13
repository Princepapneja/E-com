import React from "react";

function RattingStar(star) {
  const ratting = [1, 2, 3, 4, 5];

  return (
    <>
 
        {ratting.map((e, index) => {
          let halfStar = index + 0.5;
          let stars = parseFloat(Object.values(star));
          return (
            <span className="rating_star"  key={index}>
              {
                 (stars >= index + 1) ? (
                  <img
                    src={require("../../assets/icons/star.svg").default}
                    alt=""
                  />
                  ): ((stars >= halfStar) ?(
                  <img
                    src={require("../../assets/icons/half-star.svg").default}
                    alt=""
                  />
                  ) :(
                  <img
                    src={require("../../assets/icons/empty-star.svg").default}
                    alt=""
                  />
                  ))
              }
             
            </span>
          );
        })}

    </>
  );
}

export default RattingStar;
