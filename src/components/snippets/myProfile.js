import React, { useState } from "react";
import Inputs from "./inputs";
import Button from "./button";

function MyProfile() {
  const [disable, setDisable] = useState(true);
  let obj = [
    {
      label: "Full name",
    },
    {
      label: "Last name",
    },
    {
      type: "email",
      label: "email",
    },
    {
      label: "Mobile no.",
    },
    {
      label: "Address",
    },
    {
      label: "Second address",
    },
    {
      label: "State",
      type: "select",
    },
    {
      label: "gender",
      type: "select",
    },
  ];
  return (
    <>
      <div>
        <div className="my_profile_box flex">
          <div className="my_profile_img_username flex">
            <img
              className="my_profile_img"
              src={require(`../../assets/icons/Avatar.svg`).default}
              alt=""
            />

            <div className="my_username_mail">
              <h3 className="my_username">Tiana Baptista</h3>
              <p className="product_desc">tim.jennings@example.com</p>
            </div>
          </div>

          <div className="my_profile_input_img">
            <input type="file" name="" id="profileImage" className="d-none" />
            <label
              htmlFor="profileImage"
              className="transparent_cta text-fourth"
            >
              Choose Image{" "}
            </label>
          </div>
        </div>
        <div className="flex j-between">
          <h3 className="product_title">Personal information</h3>
          <div>
            <img
              className={`edit_pencil ${disable === true && "d-none"}`}
              src={require(`../../assets/icons/EditIcon.svg`).default}
              alt=""
            />
            <button
              className="underline_cta"
              onClick={() => {
                setDisable(!disable);
              }}
            >
              Edit
            </button>{" "}
          </div>
        </div>
        <form className="my_personal_info_form ">
          <div className="grid my_personal_form_inputs ">
            {obj.map((e, index) => {
              return (
                <Inputs
                  label={e.label}
                  type={e.type}
                  key={index}
                  disabled={disable === true && "disabled"}
                />
              );
            })}
          </div>
          <div className="divider_my-20"></div>
          <div className="main_prdct_detail_item flex">
            <button
              className="transparent_cta text-fourth"
              disabled={disable === true && "disabled"}
            >
              cancel
            </button>
            <Button
              type="button"
              label="Save changes"
              disabled={disable === true && "disabled"}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default MyProfile;
