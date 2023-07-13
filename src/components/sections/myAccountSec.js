import React, { useRef, useState } from "react";

import Button from "../snippets/button";
import MyProfile from "../snippets/myProfile";

function MyAccountSec() {
  let menuData = [
    {
      link: "profile",
      name: "Tiana Baptista",
      img_url: "profileImage.png",
      desc: "tim.jennings@example.com",
    },
    {
      link: "orders",
      name: "My orders",
      img_url: "orders.png",
      desc: "Lorem ipsum dolor sit amet, consectetur ..",
    },
    {
      link: "savedCards",
      name: "Payment",
      img_url: "payment.png",
      desc: "Lorem ipsum dolor sit amet, consectetur ..",
    },
    {
      link: "chats",
      name: "Chats",
      img_url: "chats.png",
      desc: "Lorem ipsum dolor sit amet, consectetur ..",
    },
    {
      link: "extraForTesting",
      name: "Coupons",
      img_url: "coupon.png",
      desc: "Lorem ipsum dolor sit amet, consectetur ..",
    },
    {
      link: "wishlist",
      name: "Wishlist",
      img_url: "wishList.png",
      desc: "Lorem ipsum dolor sit amet, consectetur ..",
    },
    {
      link: "security",
      name: "Login & Security",
      img_url: "security.png",
      desc: "Lorem ipsum dolor sit amet, consectetur ..",
    },
    {
      link: "logout",
      name: "Logout",
      img_url: "logout.png",
      desc: "Lorem ipsum dolor sit amet, consectetur ..",
    },
  ];

  const [show, setShow] = useState(false);
  const handelClick = () => {
    setShow(!show);
  };
  return (
    <>
      <div>
        <div className={`grid my_account_ctas`}>
          {menuData.map((e, index) => {
            return (
              <Button
                key={index}
                type={"link3"}
                img_url_png={e.img_url}
                label_big_text={e.name}
                to={e.link}
                desc={e.desc}
                functionName={handelClick}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MyAccountSec;
