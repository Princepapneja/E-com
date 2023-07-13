import React, {  useEffect } from 'react';

function RegisterOtp() {

  useEffect(() => {
    const inputs = document.querySelectorAll(".otp-field input");
    inputs.forEach((input, index) => {
        input.dataset.index = index;
        input.addEventListener("keyup", handleOtp);
        input.addEventListener("paste", handleOnPasteOtp);
    });

    function handleOtp(e) {
        const input = e.target;
        let value = input.value;
        let isValidInput = value.match(/[0-9]/gi);
        input.value = "";
        input.value = isValidInput ? value[0] : "";

        let fieldIndex = input.dataset.index;
        if (fieldIndex < inputs.length - 1 && isValidInput) {
            input.nextElementSibling.focus();
        }

        if (e.key === "Backspace" && fieldIndex > 0) {
            input.previousElementSibling.focus();
        }

        if (fieldIndex === inputs.length - 1 && isValidInput) {
            submit();
        }
    }

    function handleOnPasteOtp(e) {
        const data = e.clipboardData.getData("number");
        const value = data.split("");
        if (value.length === inputs.length) {
            inputs.forEach((input, index) => (input.value = value[index]));
            submit();
        }
    }

    function submit() {
     
        // 👇 Entered OTP
        let otp = "";
        inputs.forEach((input) => {
            otp += input.value;
            input.disabled = false;
            input.classList.add("disable");
        });
    }
  });
  
 
  return (
    <section className="page_sec Register_otp_sec">
      <div className='container'>
        <div className="section-flex">
        <div className='page_body'>
          <div className='page_leftSide'>
            <h2 className="product_title "> Please Check your Email! <span className='r_otp'> (Register OTP) </span></h2>
            <p className='page_text '>
                Please check your email, 6-digit confirmation code to Tim.@example, please enter the confirmation code to verify your email.
            </p>
            <form action="">
              <div className='otp_number'>
                <input type="number"  max="1" className='text-second'/>
                <input type="number"  max="1" className='text-second'/>
                <input type="number"  max="1" className='text-second'/>
                <input type="number"  max="1" className='text-second'/>
                <input type="number"  max="1" className='text-second'/>
                <input type="number"  max="1" className='text-second'/>
              </div>
      
              <div className='btn_wrapper'>
                <button className='form_btn registerotp'  type='button'>VERIFY</button>    
                <div className='reSendContent'>
                  <span className='text-second'>Don’t have a code?</span>
                  <button className='reSendOtp text-second'   type='button'>Resend Code</button>
                </div>
              </div>
            </form>
          </div>
          <div className='page_rightSide'>
            <img src={require('../../assets/images/register-img.png')} alt="error"/>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default RegisterOtp;