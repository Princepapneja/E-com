import Button from "../snippets/button";

const SecondBanner = () => {
  return (
    <>
           {/* ============== Second Banner ============== */}

      <section id="second_banner_section" className="section_padding">
        <div className="container">
          <ul className="second_banner flex">
            <li>
              <div>
                <span className="box_item_details">$ 108.00</span>
                <span className="box_item_details slash">&#x2f;</span>
                <span className="discount_details">60% off</span>
              </div>
              <h3
                className="second_banner_heading
              "
              >
                {" "}
                Bluetooth Headphones with Mic
              </h3>
              <Button type='link2' fillClr='#c4cfd4'  className='banner_shop_now' label='Show Now'/>
            </li>
           {/* ============== Second block(image) ============== */}

            <li>
              <img className="second_banner_img" src={require("../../assets/images/headphone.png")} alt="" />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default SecondBanner;
