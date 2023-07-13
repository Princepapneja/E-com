import React, { useState } from "react";

function Inputs({ type, label, name, id, img_url, altText, spanText,checked,disabled }) {
  const [passwordShown, setPasswordShown] = useState(false);
 
  return (
    <div className="user-input">
      {type === "email" && (
        <>
          <input
            type={type}
            id={name}
            className="form_input "
            autoComplete="off"
            placeholder=" "
            disabled={disabled}
          />
          {label && (
            <label htmlFor={name} className="inputLabel">
              {label}
            </label>
          )}
        </>
      )}

      {type === "password" && (
        <>
          <input
            type={passwordShown ? "text" : "password"}
            className="form_input"
            id={name}
            placeholder=" "
            disabled={disabled}
          />
          <img
            src={require("../../assets/images/eye.svg").default}
            alt="error"
            className="eye_icon"
            onClick={() => setPasswordShown(!passwordShown)}
          />
          <img
            src={require("../../assets/images/eye-close.svg").default}
            alt="error"
            className="eye_icon eye_icon_close"
            style={{ display: !passwordShown && "none" }}
            onClick={() => setPasswordShown(!passwordShown)}
          />
          {label && (
            <label htmlFor={name} className="inputLabel ">
              {label}
            </label>
          )}
        </>
      )}

      {type === "checkbox" && (
        <div className="input_checkbox">
          <input type="checkbox" id={name} className="form_checkbox" disabled={disabled} />
          {label && (
            <label className="checkbox_label" htmlFor={name}>
              {label}
            </label>
          )}
        </div>
      )}
      {type === "radio" && (
        <div className="input_radio flex ">
          <input type="radio" id={id} name={name} className="form_radio" disabled={disabled} checked={checked} readOnly />
          <label className="radio_label" htmlFor={id}>
            {label}
          </label>
          {img_url && (
            <img src={require(`../../assets/icons/${img_url}`)} alt={altText} />
          )}
          {spanText && <span className="span_text">{spanText}</span>}
        </div>
      )}
      {type === "select" && (
        <div className="select_menu_box">
          <img
            className="select_menu_arrow_img"
            src={require(`../../assets/icons/selectDownward.svg`).default}
            alt=""
          />
          <select className="select_menu" disabled={disabled}>
            <option defaultValue="select upi">--select-{label}---</option>
          </select>
        </div>
      )}
      {!type && (
        <>
          <input
            type={type}
            id={name}
            className="form_input"
            autoComplete="off"
            placeholder=" "
            disabled={disabled}
          />
          {label && (
            <label htmlFor={name} className="inputLabel">
              {label}
            </label>
          )}
        </>
      )}
    </div>
  );
}
export default Inputs;
