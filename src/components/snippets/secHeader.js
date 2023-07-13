import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";

export default function SecHeader({
  heading,
  info,
  arrows,
  breadcrumb,
  line,
  to,
  ctas,
  
}) {
  const [type, setType]= useState(true)

  const handleClick= (()=>{
    setType(!type)
    
  })
 
  return (
    <>
      <div className="sec_header-container">
        <div className="sec_header">
          <div className="sec_heading_content">
            {heading && <h2 className="section_heading">{heading}</h2>}
            {info && <p className="text-second">{info}</p>}
          </div>
          {arrows && (
            <div className="sec_silder_arrows">
              <button type="button" className="sec_arrow_left">
                {/* onClick={prev} */}
                <img
                  src={require("../../assets/icons/next_arrow.svg").default}
                  alt=""
                />
              </button>
              <div className="line"></div>
              <button type="button" className="sec_arrow_right">
                <img
                  src={require("../../assets/icons/next_arrow.svg").default}
                  alt=""
                />
              </button>
            </div>
          )}
          {
          ctas && 
          <div className="sec_header_cta flex">
          <Button type= {type=== true ? 'w_brdr_link' : 'link'} label={ctas[0].ctaName} functionName={handleClick} to={ctas[0].ctaLink}/>
          <Button type={!type=== true ? 'w_brdr_link' : 'link'} label={ctas[1].ctaName} functionName={handleClick} to={  ctas[1].ctaLink}/>
          </div>

          }
        </div>
        {breadcrumb && to && (
          <div className="breadcrumbs">
            <Link className="breadcrumb" to="/">Home</Link>
            <span>
              <span className="breadcrumbs_arrow">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.6753 0.587821C1.35065 0.263177 0.824299 0.263176 0.499655 0.58782C0.175261 0.912214 0.174975 1.43807 0.499015 1.76282L3.02435 4.29366C3.41384 4.68401 3.41384 5.31599 3.02435 5.70634L0.499015 8.23718C0.174975 8.56193 0.175261 9.08779 0.499655 9.41218C0.824299 9.73682 1.35065 9.73682 1.6753 9.41218L5.38037 5.70711C5.77089 5.31658 5.77089 4.68342 5.38037 4.29289L1.6753 0.587821Z"
                    fill="#495F6A"
                  />
                </svg>
              </span>
              <Link className="breadcrumb" to={`../${to[0]}`}>{breadcrumb[0]}</Link>
            </span>
            {breadcrumb && to && (
              <span>
                <span className="breadcrumbs_arrow">
                  <svg
                    width="6"
                    height="10"
                    viewBox="0 0 6 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.6753 0.587821C1.35065 0.263177 0.824299 0.263176 0.499655 0.58782C0.175261 0.912214 0.174975 1.43807 0.499015 1.76282L3.02435 4.29366C3.41384 4.68401 3.41384 5.31599 3.02435 5.70634L0.499015 8.23718C0.174975 8.56193 0.175261 9.08779 0.499655 9.41218C0.824299 9.73682 1.35065 9.73682 1.6753 9.41218L5.38037 5.70711C5.77089 5.31658 5.77089 4.68342 5.38037 4.29289L1.6753 0.587821Z"
                      fill="#495F6A"
                    />
                  </svg>
                </span>
                <Link className="breadcrumb second_breadcrumb" to={`../${to[1]}`}>{breadcrumb[1]}</Link>
              </span>
            )}
          </div>
        )}
        {line && <div className="sec_header-line "></div>}
      </div>
    </>
  );
}
