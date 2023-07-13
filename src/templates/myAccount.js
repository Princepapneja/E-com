import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyAccountSec from "../components/sections/myAccountSec";
import ProfileSec from "../components/sections/profileSec";
import ImportantNote from "../components/snippets/importantNote";
import Layout from "../layout";
import SecHeader from "../components/snippets/secHeader";
import MyOrders from "../components/snippets/myOrders";
import UpiSec from "../components/sections/upiSec";
import SavedCardSec from "../components/sections/savedCardSec";
import OrderReturn from "../components/sections/orderReturn";
import OrderHeader from "../components/snippets/orderHeader";
import OrderItemDetails from "../components/sections/orderItemDetails";
import CustomerCare from "../components/sections/customerCare";

function MyAccount() {
  let { slug } = useParams();
  let cta = [
    {
      ctaName: "UPI Payment",
      ctaLink: "/myAccount/upiSec",
    },
    {
      ctaName: "Cards (debit, credit)",
      ctaLink: "/myAccount/savedCards",
    },
  ];

  const handelSlug = () => {
    if (slug === "profile") {
      return <ProfileSec />;
    } else if (slug === "orders") {
      return <MyOrders />;
    } else if (slug === "savedCards") {
      return <SavedCardSec />;
    } else if (slug === "upiSec") {
      return <UpiSec />;
    } else if (slug === "orderReturn") {
      return <OrderReturn />;
    } else if (slug === "extraForTesting") {
      return <CustomerCare />;
    }else if (slug === undefined) {
      return <MyAccountSec />;
    } else {
      return <ImportantNote />;
    }
  };

  return (
    <>
      <section className="section_padding">
        <div className="container">
          <SecHeader
            heading="My account"
            breadcrumb={["My Account", slug]}
            to={["myAccount"]}
            line={true}
            ctas={slug === "savedCards" || slug === "upiSec" ? cta : false}
          />
          {handelSlug()}
        </div>
      </section>
    </>
  );
}

export default Layout(MyAccount);
