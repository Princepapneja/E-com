

const Newsletter = () => {
  return (
    <>
           {/* ============== Newsletter section============== */}
           {/* ============== Newsletter section first block============== */}
    
      <section className="newsletter section_padding">
        <div className="container">
          <div className="news_container flex">
            <ul>
              <li className="news_list_item">
                <img src={require("../../assets/icons/newsletter.svg").default} alt="" />
              </li>
              <li className="news_list_item">
                <h3 className="news_heading">Subscribe to our newsletter</h3>
              </li>
              <li className="news_list_item">
                <p className="news_para">Get 10% discount</p>
              </li>
            </ul>
           {/* ============== Newsletter section Second block============== */}

            <div className="news_mail_box">
              <div className="n_m_input_box flex">
                    <input type="text" className="mail_input" placeholder="Enter your email..." />
                  <img src={require("../../assets/icons/arrow.svg").default} alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
