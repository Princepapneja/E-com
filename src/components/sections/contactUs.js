import React from "react";
import Button from "../snippets/button";
import Inputs from "../snippets/inputs";
import SecHeader from "../snippets/secHeader";

const ContactUs = () => {
  return (
    <>
      <section className="section_padding">
        <div className="container">
          <SecHeader
            heading={"Get In touch!"}
            breadcrumb={"Contact us"}
            to={"ContactUs"}
            line={true}
          />
          <h3 className="form_heading">Contact us</h3>
          <div className="contact_form_map flex">
            <form action="" className="flex form_gap">
              <Inputs label={"name"} />
              <Inputs label={"Email/Phone no."} />
              <Inputs label={"Select an option..."} type={"select"} />
              <Inputs label={"Comment"} />
              <Inputs
                label={
                  <>
                    By continuing, you agree to{" "}
                    <span className="special_text">Buynow</span> policy
                  </>
                }
                type="checkbox"
                name="agree"
              />
              <Button type="button" label={"send message"} />
              {/* type={"text-area"} */}
            </form>
            <img
              className="map_img"
              src={require(`../../assets/images/map.png`)}
              alt="Map"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
