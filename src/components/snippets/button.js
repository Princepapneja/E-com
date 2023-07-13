import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Button({
  type,
  label,
  idName,
  className,
  to,
  fillClr,
  img_url,
  index,
  elem,
  isActive,
  setIsActive,
  setMode,
  functionName,
  desc,
  label_big_text,
  disabled,
  img_url_png
}) {
  // useEffect(() => {
  //   let c = document.querySelectorAll(".w_brdr_cta");
  //   console.log(c);
  //   // if (functionName) {
  //   //   // c.setAttribute('style')
  //   //   c.setAttribute('onClick','{(()=>{})}')
  //   // } else {
  //   //   c.removeAttribute('onClick','{(()=>{functionName()})}')
  //   // }
  // });
  return (
    <>
      {type === "button" && (
        <>
          <button
            className={`form_btn ${className ? className : ""}`}
            type={type}
            id={idName}
            disabled={disabled}
            onClick={(()=>{
              functionName()
            })}
          >
            {" "}
            {label}{" "}
          </button>
        </>
      )}

      {type === "link" && (
        <>
          <Link
            className={`form_btn ${className ? className : ""}`}
            type={type}
            id={idName}
            to={to}
          >
            {img_url && (
              <img
                src={require(`../../assets/icons/${img_url}`)}
                alt="imgError"
                className="btn_inner_img"
              />
            )}
            <span>{label}</span>
          </Link>
        </>
      )}
      {type === "link2" && (
        <>
          <Link
            className={`link2  ${className ? className : ""}`}
            type={type}
            id={idName}
            to={to}
          >
            <span>{label}</span>

            <span className="btn_svg">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6753 0.587821C1.35065 0.263177 0.824299 0.263176 0.499655 0.58782C0.175261 0.912214 0.174975 1.43807 0.499015 1.76282L3.02435 4.29366C3.41384 4.68401 3.41384 5.31599 3.02435 5.70634L0.499015 8.23718C0.174975 8.56193 0.175261 9.08779 0.499655 9.41218C0.824299 9.73682 1.35065 9.73682 1.6753 9.41218L5.38037 5.70711C5.77089 5.31658 5.77089 4.68342 5.38037 4.29289L1.6753 0.587821Z"
                  fill={`${fillClr ? fillClr : "#422659"}`}
                />
              </svg>
            </span>
          </Link>
        </>
      )}

      {type === "link3" && (
        <>
          <Link
            className={`link3 flex ${className ? className : ""}`}
            type={type}
            id={idName}
            to={to}
            
          >
            {/* signin big cta with arrow */}
            <div className="link3_img_label flex">
              {
                img_url_png && <span className="link3_img">
                <img
                  src={require(`../../assets/images/${img_url_png}`)}
                  alt=""
                />
              </span>
              }
              {img_url && (
                <span className="link3_img">
                  <img
                    src={require(`../../assets/icons/${img_url}`)}
                    alt=""
                  />
                </span>
              )}
              <div className="grid link3_label_box">
                {label && <span className="link3_label">{label}</span>}
                {label_big_text && (
                  <span className="link3_label_big_text">{label_big_text}</span>
                )}
                {desc && <p className="product_desc">{desc}</p>}
              </div>
            </div>
            <div className="link3_svg">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6753 0.587821C1.35065 0.263177 0.824299 0.263176 0.499655 0.58782C0.175261 0.912214 0.174975 1.43807 0.499015 1.76282L3.02435 4.29366C3.41384 4.68401 3.41384 5.31599 3.02435 5.70634L0.499015 8.23718C0.174975 8.56193 0.175261 9.08779 0.499655 9.41218C0.824299 9.73682 1.35065 9.73682 1.6753 9.41218L5.38037 5.70711C5.77089 5.31658 5.77089 4.68342 5.38037 4.29289L1.6753 0.587821Z"
                  fill="#574b9b8a"
                />
              </svg>
            </div>
          </Link>
        </>
      )}
      {type === "button3" && (
        <>
          <button
            className={`link3 flex ${className ? className : ""}`}
            type={type}
            id={idName}
        
            onClick={() => {
              {
                functionName();
              }
            }}
          >
            {/* signin big cta with arrow */}
            <div className="link3_img_label flex">
              {
                img_url_png && <span className="link3_img">
                <img
                  src={require(`../../assets/images/${img_url_png}`)}
                  alt=""
                />
              </span>
              }
              {img_url && (
                <span className="link3_img">
                  <img
                    src={require(`../../assets/icons/${img_url}`)}
                    alt=""
                  />
                </span>
              )}
              <div className="grid link3_label_box">
                {label && <span className="link3_label">{label}</span>}
                {label_big_text && (
                  <span className="link3_label_big_text">{label_big_text}</span>
                )}
                {desc && <p className="product_desc">{desc}</p>}
              </div>
            </div>
            <div className="link3_svg">
              <svg
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6753 0.587821C1.35065 0.263177 0.824299 0.263176 0.499655 0.58782C0.175261 0.912214 0.174975 1.43807 0.499015 1.76282L3.02435 4.29366C3.41384 4.68401 3.41384 5.31599 3.02435 5.70634L0.499015 8.23718C0.174975 8.56193 0.175261 9.08779 0.499655 9.41218C0.824299 9.73682 1.35065 9.73682 1.6753 9.41218L5.38037 5.70711C5.77089 5.31658 5.77089 4.68342 5.38037 4.29289L1.6753 0.587821Z"
                  fill="#574b9b8a"
                />
              </svg>
            </div>
          </button>
        </>
      )}
      {/* bg  back white  */}
      {type === "transparent_cta" && (
        <>
          <button
            className={`transparent_cta ${className ? className : ""}`}
            type={type}
            id={idName}
            to={{ to }}
          >
            <span className="text-fourth">{label}</span>
          </button>
        </>
      )}
      {type === "active_cta" && (
        <>
          <button
            className={`category_name text-uppercase ${
              isActive === index ? "swiper_active" : ""
            }`}
            onClick={() => {
              setIsActive &&    setIsActive(index);
              setMode && setMode(index);
            }}
            disabled={disabled}
          >
            {label}
          </button>
        </>
      )}

      {/* without border Cta */}
      {type === "w_brdr_cta" && (
        <>
          <button
            className="w_brdr_cta"
            onClick={() => {
              {
                functionName();
              }
            }}
            disabled={disabled}
          >
            {label}
          </button>
        </>
      )}
      {type === "w_brdr_link" && (
        <>
          <Link
            className={`w_brdr_cta ${className ? className : ""}`}
            
            to={to}
          >
            {label}
          </Link>
        </>
      )}
    </>
  );
}

export default Button;
