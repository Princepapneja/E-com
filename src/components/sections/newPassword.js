import React, {useState} from "react";
import Button from "../snippets/button";

function NewPassword() {

    
  // Hide Show Password
  const [passwordShown, setPasswordShown] = useState(false);
  const usePasswordToggle = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const [passwordShown2, setPasswordShown2] = useState(false);
  const usePasswordToggle2 = () => {
    setPasswordShown2(passwordShown2 ? false : true);
  };

  return (
    <section className="page_sec new_password_sec">
      <div className='container'>
        <div className="section-flex">
          <div className='page_body'>
            <div className='page_leftSide'>
              <h2 className="product_title form_title">Enter New Password</h2>
              <p className='page_text text-second'>
                New Password Must Be Different From Previous Used Password.
              </p>
              <form action="">
                <div className='phone-email-input'>
                  <div className="password_wrapper new_password">
                    <input type={passwordShown ? "text" : "password"} className="form_input" placeholder=" password" />
                    <img src={require('../../assets/images/eye.svg').default} alt="error" className="eye_icon" onClick={usePasswordToggle} />
                  </div>

                  <span className="password_req">Password Must Be 8 Characters</span>

                  <div className="password_wrapper confrim_password">
                    <input type={passwordShown2 ? "text" : "password"} className="form_input" placeholder=" Confirm password" />
                    <img src={require('../../assets/images/eye.svg').default} alt="error" className="eye_icon" onClick={usePasswordToggle2} />
                  </div>
                </div>
                <div className='btn_wrapper'>
                <Button type="button" label="Change Password" className="registerotp" />
                </div>
              </form>
            </div>
            <div className='page_rightSide'>
              <img src={require('../../assets/images/new-password.png')} alt="error"/>
            </div>
          </div>
      </div>
    </div>  
    </section>
  )
}

export default NewPassword