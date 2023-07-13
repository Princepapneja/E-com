

const Footer = () => {
  return (
    <>
      <footer className="footer section_padding">
        <div className="container ">
          <div className="footer_content grid">
            <ul className="footer_list flex">
              <li className="footer_item">
                <img src={require("../../assets/icons/logo_white.svg").default} alt="" className="footer_logo" />
                <p className="footer_info text-capital">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit sem tortor dui mattis vulputate fermentum. Turpis nisi, nulla interdum luctus.</p>
              </li>
              <li className="footer_item">
                <div className="footer_contact grid">
                  <a href="mailto:debra.holt@example.com">
                    <img src={require("../../assets/icons/mail_icon.svg").default} alt="Mail Icon" />
                  </a>
                  <a className="footer_contact_link" href="mailto:debra.holt@example.com">
                    debra.holt@example.com
                  </a>
                </div>

                <div className="footer_contact grid">
                  <a  href="https://www.google.com/maps/place/Sunstar+Ayurveda/@38.911016,-75.6677528,11z/data=!3m1!4b1!4m5!3m4!1s0x89b8900000000001:0x710ea2348a627feb!8m2!3d38.9108887!4d-75.5277059">
                    <img src={require("../../assets/icons/location_icon.svg").default} alt="Mail Icon" />
                  </a>
                  <a className="footer_contact_link" href="https://www.google.com/maps/place/Sunstar+Ayurveda/@38.911016,-75.6677528,11z/data=!3m1!4b1!4m5!3m4!1s0x89b8900000000001:0x710ea2348a627feb!8m2!3d38.9108887!4d-75.5277059">
                    6391 Elgin St. Celina, Delaware 10299
                  </a>
                </div>
              </li>
              <li className="footer_item">
                <p className="footer_info">Download the app</p>
                <div className="download_apps">
                  <img className="download_img" src={require("../../assets/icons/apple_download.svg").default} alt="Apple Download Icon" />
                  <img className="download_img" src={require("../../assets/icons/ps-download.svg").default} alt="Play Store Download Icon" />
                </div>
              </li>
            </ul>
            <ul className="footer_list flex">

              <li className="footer_menu flex">
                <div className="footer_menu_items text-capital">
                  <h3 className="footer_menu_heading white">Customer support</h3>
                  <ul className="footer_navlist grid">
                    <li className="footer_nav_item">
                      <a href="/products
                      " className="footer_nav_link">
                        Contact us
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Help center
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Exchanges
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Credit cards
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Debit cards
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_menu_items text-capital">
                  <h3 className="footer_menu_heading white">Contact with us</h3>
                  <ul className="footer_navlist grid">
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Facebook
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Instagram
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Twitter
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Linkedin
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_menu_items text-capital">
                  <h3 className="footer_menu_heading white">About</h3>
                  <ul className="footer_navlist grid">
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Careers
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        About us
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        Blogs
                      </a>
                    </li>
                    <li className="footer_nav_item">
                      <a href="/" className="footer_nav_link">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
              </li>


              <li className="grid copyright_box footer_item">
                <p className="copyright_line">© 2021. All rights reserved</p>
                <a className="box_link" href="/">
                  Terms of Service
                </a>
                <a className="box_link" href="/">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

