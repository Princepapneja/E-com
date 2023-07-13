import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../snippets/button";
import ProductHCard from "../snippets/productHCard";

const Header = () => {
  const [show, setShow] = useState(false);
  const [CategoryShow, setCategoryShow] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [account, setAccount] = useState(false);

  return (
    <>
      <header className="header">
        {/* === === === Topbar Start === === === */}

        <div className="header_topbar">
          <div className="container">
            <div className="top_bar flex">
              <ul className="topbar_item flex">
                <li className="topbar_icon">
                  {" "}
                  <img
                    src={require("../../assets/icons/topbar-icon.svg").default}
                    alt="imgError"
                  />{" "}
                </li>
                <li>
                  {" "}
                  <Link to="/" className="topbar_link text-third text_capital">
                    {" "}
                    Free delivery on $100.00{" "}
                  </Link>
                </li>
              </ul>
              <ul className="topbar_item flex">
                <li>
                  {" "}
                  <Link to="/" className="topbar_link text-third text_capital">
                    Help center
                  </Link>
                </li>
                <li className="return_policy">
                  {" "}
                  <Link to="/" className="topbar_link text-third text_capital">
                    Returns policy
                  </Link>
                </li>
                <li className="support">
                  {" "}
                  <Link to="/" className="topbar_link text-third text_capital">
                    {" "}
                    Support (+00) 0123456789{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* === === === Main Header Start === === === */}

        <div className="header_navbar">
          <div className="container">
            <div className="navbar flex">
              <div className="nav flex">
                <Link to="/">
                  <img
                    src={require("../../assets/icons/logo.svg").default}
                    alt="imgError"
                  />
                </Link>
                <ul className="nav_list flex">
                  <li className="nav_item">
                    <div to="/" className="nav_link text-second text_capital">
                      Home
                    </div>
                    <ul className="dropdown dropdown_home flex">
                      <li className="home_item">
                        <ul>
                          <li className="header_dropdown_item">
                            <Link
                              to="/"
                              className="home_link dropdown_link text-second head_dropdown_link flex"
                            >
                              Home - 1
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                          <li className="header_dropdown_item">
                            <Link
                              to="/"
                              className="home_link dropdown_link text-second head_dropdown_link flex"
                            >
                              Home - 2
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                          <li className="header_dropdown_item">
                            <Link
                              to="/"
                              className="home_link dropdown_link text-second head_dropdown_link flex"
                            >
                              Home - 3
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                          <li className="header_dropdown_item">
                            <Link
                              to="/"
                              className="home_link dropdown_link text-second head_dropdown_link flex"
                            >
                              Home - 4
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="home_border"></li>
                      <li className="home_img">
                        <img
                          src={require("../../assets/images/home-hover.png")}
                          alt="imgError"
                        />
                      </li>
                    </ul>
                  </li>

                  <li className="nav_item">
                    <div className="nav_link text-second text_capital">
                      Top deals
                    </div>
                    {/* prince code  */}
                    <div className="dropdown  td_menu_box flex ">
                      <ul className="td_lists flex">
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className="line"></div>
                      <div className="flex td_bottom">
                        <div className="td_img_box">
                          <h3 className="td_img_heading">
                            Top Products for you
                          </h3>
                          <Link to="/" className="white_btn">
                            {" "}
                            Shop now
                          </Link>
                        </div>
                        <div className="">
                          <ProductHCard
                            discount="10% off"
                            title="Apple MacBook Pro "
                            price="500.00"
                          />
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="nav_item">
                    {" "}
                    <div className="nav_link text-second text_capital">
                      Hot offers
                    </div>
                    {/* page code  */}
                    <div className="dropdown dropdown_home flex ho_box ">
                      <ul className="td_lists flex">
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="td_upper">
                          <h3 className="td_up_heading">Today’s deals</h3>
                          <ul className="td_up_list">
                            <li className="td_list_item">
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                              <Link
                                to="/"
                                className="home_link dropdown_link head_dropdown_link flex"
                              >
                                Mobile
                                <img
                                  src={
                                    require("../../assets/icons/rightArrow.svg")
                                      .default
                                  }
                                  alt="imgError"
                                  className="drop_arrow_icon"
                                />
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <div className=" rotated_line"></div>
                      <div className="ho_special_list">
                        <div className="td_lists">
                          <div className="td_upper">
                            <h3 className="td_up_heading">Today’s deals</h3>
                            <ul className="td_up_list">
                              <li className="td_list_item">
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav_item">
                    {" "}
                    <div to="/" className="nav_link text-second text_capital">
                      Pages{" "}
                    </div>
                    <div className="dropdown dropdown_home flex page_box ">
                      <ul className="td_lists  ">
                        <li>
                          <div className="td_upper">
                            <ul className="page_list flex">
                              <li className="td_list_item">
                                <h3 className="td_up_heading">
                                  Product details pages
                                </h3>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <h3 className="td_up_heading">Today’s deals</h3>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                                <Link
                                  to="/"
                                  className="home_link dropdown_link head_dropdown_link flex"
                                >
                                  Mobile
                                  <img
                                    src={
                                      require("../../assets/icons/rightArrow.svg")
                                        .default
                                    }
                                    alt="imgError"
                                    className="drop_arrow_icon"
                                  />
                                </Link>
                              </li>
                              <li className="rotated_line"></li>
                              <li className="td_list_item">
                                <div>
                                  <h3 className="td_up_heading">
                                    Product details pages
                                  </h3>

                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                </div>
                                <div>
                                  <h3 className="td_up_heading">
                                    Product details pages
                                  </h3>

                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                </div>
                                <div>
                                  <h3 className="td_up_heading">
                                    Today’s deals
                                  </h3>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                  <Link
                                    to="/"
                                    className="home_link dropdown_link head_dropdown_link flex"
                                  >
                                    Mobile
                                    <img
                                      src={
                                        require("../../assets/icons/rightArrow.svg")
                                          .default
                                      }
                                      alt="imgError"
                                      className="drop_arrow_icon"
                                    />
                                  </Link>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="nav_right flex">
                <div className="navbar_search">
                  <div className="nav_search flex">
                    <img
                      className="search_icon"
                      src={require("../../assets/icons/search.svg").default}
                      alt="imgError"
                    />
                    <input
                      className="nav_search_input"
                      type="text"
                      placeholder="Search"
                    />
                    <div className="primary_cta nav_search_btn_box ">
                      <div
                        className="text-first nav_search_btn flex"
                        onClick={() => setAccount(!account)}
                      >
                        <span>All</span>
                        <img
                          src={
                            require("../../assets/icons/down-arrow.svg").default
                          }
                          className={`${account && "rotate-180"}`}
                          alt="imgError"
                        />
                      </div>
                      <ul className={`dropdown  ${account && "active"}`}>
                        <li className="head_dropdown_item">
                          {" "}
                          <Link
                            to="/"
                            className="dropdown_link text-second head_dropdown_link flex"
                          >
                            All Type
                            <img
                              src={
                                require("../../assets/icons/rightArrow.svg")
                                  .default
                              }
                              alt="imgError"
                              className="drop_arrow_icon"
                            />
                          </Link>
                        </li>
                        <li className="head_dropdown_item">
                          {" "}
                          <Link
                            to="/"
                            className="dropdown_link text-second head_dropdown_link flex"
                          >
                            Mobiles
                            <img
                              className="drop_arrow_icon"
                              src={
                                require("../../assets/icons/rightArrow.svg")
                                  .default
                              }
                              alt="imgError"
                            />
                          </Link>
                        </li>
                        <li className="head_dropdown_item">
                          {" "}
                          <Link
                            to="/"
                            className="dropdown_link text-second  head_dropdown_link flex"
                          >
                            Laptops
                            <img
                              src={
                                require("../../assets/icons/rightArrow.svg")
                                  .default
                              }
                              alt="imgError"
                              className="drop_arrow_icon"
                            />
                          </Link>
                        </li>
                        <li className="head_dropdown_item">
                          {" "}
                          <Link
                            to="/"
                            className="dropdown_link text-second  head_dropdown_link flex"
                          >
                            Watches
                            <img
                              src={
                                require("../../assets/icons/rightArrow.svg")
                                  .default
                              }
                              alt="imgError"
                              className="drop_arrow_icon"
                            />
                          </Link>
                        </li>
                        <li className="head_dropdown_item">
                          {" "}
                          <Link
                            to="/"
                            className="dropdown_link text-second head_dropdown_link flex"
                          >
                            Tablets
                            <img
                              src={
                                require("../../assets/icons/rightArrow.svg")
                                  .default
                              }
                              alt="imgError"
                              className="drop_arrow_icon"
                            />
                          </Link>
                        </li>

                        <li className="head_dropdown_item">
                          {" "}
                          <Link
                            to="/"
                            className="dropdown_link text-second head_dropdown_link flex"
                          >
                            Headphones
                            <img
                              src={
                                require("../../assets/icons/rightArrow.svg")
                                  .default
                              }
                              alt="imgError"
                              className="drop_arrow_icon"
                            />
                          </Link>
                        </li>
                        <li className="head_dropdown_item">
                          {" "}
                          <Link
                            to="/"
                            className="dropdown_link text-second head_dropdown_link flex"
                          >
                            Printers
                            <img
                              src={
                                require("../../assets/icons/rightArrow.svg")
                                  .default
                              }
                              alt="imgError"
                              className="drop_arrow_icon"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <ul className="flex nav_icons">
                  <li className="nav_item">
                    <div className="flag flex nav_link_icon flex">
                      <img
                        src={
                          require("../../assets/icons/header-flag.svg").default
                        }
                        alt="imgError"
                      />
                      <img
                        src={
                          require("../../assets/icons/flag-dropdown.svg")
                            .default
                        }
                        alt="imgError"
                      />
                    </div>
                    <ul className="dropdown dropdown_lang">
                      <li className="head_dropdown_item">
                        <div className="lang_search flex">
                          <img
                            className="search_icon"
                            src={
                              require("../../assets/icons/search.svg").default
                            }
                            alt="imgError"
                          />
                          <input
                            className="nav_search_input"
                            type="text"
                            placeholder="Search"
                          />
                        </div>
                      </li>
                      <li className="head_dropdown_item">
                        {" "}
                        <Link
                          to="/"
                          className="dropdown_link text-second head_dropdown_link flex"
                        >
                          <div className="dropdown_language">
                            Hindi - <span className="lang">HI</span>
                          </div>
                          <img
                            src={
                              require("../../assets/icons/rightArrow.svg")
                                .default
                            }
                            alt="imgError"
                            className="drop_arrow_icon"
                          />
                        </Link>
                      </li>
                      <li className="head_dropdown_item">
                        {" "}
                        <Link
                          to="/"
                          className="dropdown_link text-second head_dropdown_link flex"
                        >
                          <div className="dropdown_language">
                            English - <span className="lang">EN</span>
                          </div>
                          <img
                            className="drop_arrow_icon"
                            src={
                              require("../../assets/icons/rightArrow.svg")
                                .default
                            }
                            alt="imgError"
                          />
                        </Link>
                      </li>
                      <li className="head_dropdown_item">
                        {" "}
                        <Link
                          to="/"
                          className="dropdown_link text-second  head_dropdown_link flex"
                        >
                          <div className="dropdown_language">
                            Italy - <span className="lang">IT</span>
                          </div>
                          <img
                            src={
                              require("../../assets/icons/rightArrow.svg")
                                .default
                            }
                            alt="imgError"
                            className="drop_arrow_icon"
                          />
                        </Link>
                      </li>
                      <li className="head_dropdown_item">
                        {" "}
                        <Link
                          to="/"
                          className="dropdown_link text-second  head_dropdown_link flex"
                        >
                          <div className="dropdown_language">
                            China - <span className="lang">CH</span>
                          </div>
                          <img
                            src={
                              require("../../assets/icons/rightArrow.svg")
                                .default
                            }
                            alt="imgError"
                            className="drop_arrow_icon"
                          />
                        </Link>
                      </li>
                      <li className="head_dropdown_item">
                        {" "}
                        <Link
                          to="/"
                          className="dropdown_link text-second head_dropdown_link flex"
                        >
                          <div className="dropdown_language">
                            United State - <span className="lang">US</span>
                          </div>
                          <img
                            src={
                              require("../../assets/icons/rightArrow.svg")
                                .default
                            }
                            alt="imgError"
                            className="drop_arrow_icon"
                          />
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="nav_item cart flex">
                    <Link to="/cart" className="nav_link_icon">
                      <img
                        src={require("../../assets/icons/cart.svg").default}
                        alt="imgError"
                      />
                    </Link>
                    <img
                      className="cart_badge"
                      src={require("../../assets/icons/cart-badge.svg").default}
                      alt="imgError"
                    />

                    <ul className="dropdown cart_dropdown">
                      <li className="cart_item grid">
                        <div className="cart_image">
                          <img
                            className="cart_img"
                            src={require("../../assets/icons/shoe.svg").default}
                            alt="imgError"
                          />
                        </div>
                        <div className="cart_discrip">
                          <p className="cart_text">
                            Asian prime-02 walking shoes
                          </p>
                          <span className="cart_price">$320.00</span>
                        </div>
                      </li>
                      <li className="cart_item grid">
                        <div className="cart_image">
                          <img
                            className="cart_img"
                            src={require("../../assets/icons/shoe.svg").default}
                            alt="imgError"
                          />
                        </div>
                        <div className="cart_discrip">
                          <p className="cart_text">
                            Asian prime-02 walking shoes
                          </p>
                          <span className="cart_price">$320.00</span>
                        </div>
                      </li>
                      <hr className="hr_line" />
                      <Button
                        type="link"
                        to="/cart"
                        label="View Cart"
                        className="drop_cart_btn"
                      />
                    </ul>
                  </li>
                  <div className="account_hover">
                    <img
                      className="account_icon"
                      src={
                        require("../../assets/icons/header-cont.svg").default
                      }
                      alt="imgError"
                    />
                    <ul className={"account_dropdown"}>
                      <li className="content_item">
                        <ul className="dropdownn_top flex">
                          <li className="drop_item_title">Welcome</li>
                          <li>
                            {" "}
                            <img
                              src={
                                require("../../assets/icons/logo-icon.svg")
                                  .default
                              }
                              alt="imgError"
                            />
                          </li>
                        </ul>
                      </li>
                      <li className="content_item">
                        <ul className="dropdown_middle">
                          <li className="drop_item">
                            <Link
                              to="/myAccount"
                              className="dropdown_link text-second head_dropdown_link flex"
                            >
                              Account
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                          <li className="drop_item">
                            <Link
                              to="/"
                              className="dropdown_link text-second head_dropdown_link flex"
                            >
                              Orders
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                          <li className="drop_item">
                            <Link
                              to="/"
                              className="dropdown_link text-second head_dropdown_link flex"
                            >
                              Wishlist
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                          <li className="drop_item">
                            <Link
                              to="/"
                              className="dropdown_link text-second head_dropdown_link flex"
                            >
                              Logout
                              <img
                                src={
                                  require("../../assets/icons/rightArrow.svg")
                                    .default
                                }
                                alt="imgError"
                                className="drop_arrow_icon"
                              />
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="content_item">
                        <ul className="dropdown_bottom flex">
                          <li>
                            {" "}
                            <Button
                              type="button"
                              label="LOG IN"
                              className="drop_account_btn"
                            />{" "}
                          </li>
                          <li>
                            {" "}
                            <Button
                              type="button"
                              label="Sign up"
                              className="drop_account_btn2"
                            />{" "}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </ul>
              </div>

              {/* === === === Responsive Navbar & Toggle === === === */}

              <div className="res_header d-none">
                <div className="res_nav flex">
                  <button onClick={() => setSearchShow(!searchShow)}>
                    <img
                      className=""
                      src={require("../../assets/icons/res-search.svg").default}
                      alt="imgError"
                    />
                  </button>
                  <Link to="">
                    <img
                      className=""
                      src={require("../../assets/icons/res-cart.svg").default}
                      alt="imgError"
                    />
                    <img
                      className="res_cart_badge"
                      src={require("../../assets/icons/cart-badge.svg").default}
                      alt="imgError"
                    />
                  </Link>
                  <button onClick={() => setShow(!show)}>
                    <img
                      className=""
                      src={require("../../assets/icons/res-toggle.svg").default}
                      alt="imgError"
                    />
                  </button>
                </div>
              </div>

              <div className={`toggle_menu d-none ${show && "active"}`}>
                <div className="toggle_top flex">
                  <div className="toggle_profile flex">
                    <img
                      src={require("../../assets/icons/user-avtar.svg").default}
                      alt="imgError"
                    />
                    <div className="profile">
                      <p className="username text-first">Tiana Baptista</p>
                      <p className="text-third user-mail">
                        tim.jennings@example.com
                      </p>
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => setShow(!show)}
                      className="toggle_close_btn"
                    >
                      <img
                        className=""
                        src={
                          require("../../assets/icons/toggle-close.svg").default
                        }
                        alt="imgError"
                      />
                    </button>
                  </div>
                </div>
                <div className="side_menu flex">
                  <div>
                    <ul className="dropdown_list">
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={
                            require("../../assets/icons/accounts.svg").default
                          }
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          Accounts
                        </Link>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={
                            require("../../assets/icons/my-order.svg").default
                          }
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          My orders
                        </Link>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={
                            require("../../assets/icons/wishlist.svg").default
                          }
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          Wishlist
                        </Link>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={require("../../assets/icons/mycart.svg").default}
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          My Cart
                        </Link>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={
                            require("../../assets/icons/top-deals.svg").default
                          }
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          Top deals
                        </Link>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={
                            require("../../assets/icons/hot-offers.svg").default
                          }
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          Hot offers
                        </Link>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={require("../../assets/icons/pages.svg").default}
                          alt="imgError"
                        />
                        <div className="dropdown_item_pages flex">
                          <Link to="/" className="dropdown_link text-second">
                            {" "}
                            Pages
                          </Link>
                          <img
                            className="dropdown_page_icon"
                            src={
                              require("../../assets/icons/dropdownArrow-pages.svg")
                                .default
                            }
                            alt="imgError"
                          />
                        </div>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={
                            require("../../assets/icons/help-center.svg")
                              .default
                          }
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          Help center
                        </Link>
                      </li>
                      <li className="dropdown_item grid">
                        {" "}
                        <img
                          src={
                            require("../../assets/icons/return-policy.svg")
                              .default
                          }
                          alt="imgError"
                        />{" "}
                        <Link to="/" className="dropdown_link text-second">
                          {" "}
                          Return policy
                        </Link>
                      </li>
                    </ul>
                    <ul className="signup_list flex">
                      <li>
                        {" "}
                        <Link to="/" className="signup_link text-third">
                          {" "}
                          Log In
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link to="/" className="signup_link text-third">
                          {" "}
                          Sign Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="side_face"
                    onClick={() => setShow(!show)}
                  ></div>
                </div>
                <Link to="/" className=" special_signup_link text-third">
                  Support (+00) 0123456789{" "}
                </Link>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className={`mob_searchbar d-none ${searchShow && "active"}`}>
              <ul className="search_bar grid">
                <li>
                  <button onClick={() => setSearchShow(!searchShow)}>
                    <img
                      src={require("../../assets/icons/left-arrow.svg").default}
                      alt="imgError"
                    />
                  </button>
                </li>
                <div className="nav_search res-nav-search flex">
                  <img
                    className="search_icon"
                    src={require("../../assets/icons/search.svg").default}
                    alt="imgError"
                  />
                  <input
                    className="nav_search_input"
                    type="text"
                    placeholder="Search"
                  />
                </div>
                <li className="header_category_filter">
                  {" "}
                  <button onClick={() => setCategoryShow(!CategoryShow)}>
                    <img
                      className="searchbar-icon"
                      src={
                        require("../../assets/icons/searchbar-icon.svg").default
                      }
                      alt="imgError"
                    />
                  </button>
                  <div
                    className={`h_category_filter_list  ${
                      CategoryShow && "active"
                    }`}
                  >
                    <div className="td_list_item">
                      <Link
                        to="/"
                        className="home_link dropdown_link head_dropdown_link flex"
                      >
                        Mobile
                        <img
                          src={
                            require("../../assets/icons/rightArrow.svg").default
                          }
                          alt="imgError"
                          className="drop_arrow_icon"
                        />
                      </Link>
                      <Link
                        to="/"
                        className="home_link dropdown_link head_dropdown_link flex"
                      >
                        Mobile
                        <img
                          src={
                            require("../../assets/icons/rightArrow.svg").default
                          }
                          alt="imgError"
                          className="drop_arrow_icon"
                        />
                      </Link>
                      <Link
                        to="/"
                        className="home_link dropdown_link head_dropdown_link flex"
                      >
                        Mobile
                        <img
                          src={
                            require("../../assets/icons/rightArrow.svg").default
                          }
                          alt="imgError"
                          className="drop_arrow_icon"
                        />
                      </Link>
                      <Link
                        to="/"
                        className="home_link dropdown_link head_dropdown_link flex"
                      >
                        Mobile
                        <img
                          src={
                            require("../../assets/icons/rightArrow.svg").default
                          }
                          alt="imgError"
                          className="drop_arrow_icon"
                        />
                      </Link>
                      <Link
                        to="/"
                        className="home_link dropdown_link head_dropdown_link flex"
                      >
                        Mobile
                        <img
                          src={
                            require("../../assets/icons/rightArrow.svg").default
                          }
                          alt="imgError"
                          className="drop_arrow_icon"
                        />
                      </Link>
                      <Link
                        to="/"
                        className="home_link dropdown_link head_dropdown_link flex"
                      >
                        Mobile
                        <img
                          src={
                            require("../../assets/icons/rightArrow.svg").default
                          }
                          alt="imgError"
                          className="drop_arrow_icon"
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="research_bar">
                <p className="recent text-third">Recent</p>
                <ul className="searchbar_dropdown">
                  <li className="search_dropdown_item">
                    {" "}
                    <Link
                      to="/"
                      className="dropdown_link text-second search_dropdown_link flex"
                    >
                      Apple watch series 8 45mm strap
                      <div>
                        <img
                          src={require("../../assets/icons/cross.svg").default}
                          alt="imgError"
                          className="drop_cross_icon"
                        />
                      </div>
                    </Link>
                  </li>
                  <li className="search_dropdown_item">
                    {" "}
                    <Link
                      to="/"
                      className="dropdown_link text-second search_dropdown_link flex"
                    >
                      Camera stand for mobile video{" "}
                      <img
                        className="drop_cross_icon"
                        src={require("../../assets/icons/cross.svg").default}
                        alt="imgError"
                      />
                    </Link>
                  </li>
                  <li className="search_dropdown_item">
                    {" "}
                    <Link
                      to="/"
                      className="dropdown_link text-second  search_dropdown_link flex"
                    >
                      Aliquam interdum nam rhoncus, in{" "}
                      <img
                        src={require("../../assets/icons/cross.svg").default}
                        alt="imgError"
                        className="drop_cross_icon"
                      />
                    </Link>
                  </li>
                  <li className="search_dropdown_item">
                    {" "}
                    <Link
                      to="/"
                      className="dropdown_link text-second  search_dropdown_link flex"
                    >
                      Erat purus viverra porttitor eu
                      <img
                        src={require("../../assets/icons/cross.svg").default}
                        alt="imgError"
                        className="drop_cross_icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
