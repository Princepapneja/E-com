import React from 'react';
import Layout from '../layout';
import { Link } from 'react-router-dom';
import Inputs from '../components/snippets/inputs';

function ForgetPassword() {
  return (
    <section className="page_sec forget_password_sec">
      <div className='container'>
        <div className="section-flex">
          <div className='page_body'>
            <div className='page_leftSide'>
              <h2 className="form_title">Reset Your Password</h2>
              <p className='page_text'>
                Please enter your email with associated your account, we sent one time password to your email.
              </p>
              <form action="">
                <div className='phone-email-input'>
                  <Inputs type="email" label="Email" name="email"/>
                </div>
                <div className='btn_wrapper'>
                  <button className='form_btn registerotp' type='button'  >Continue</button>    
                  <div className='reSendContent'>
                    <span className='text-second'>Back to</span>
                    <Link to='/register' className='reSendOtp text-second' type='button'>Register</Link>
                  </div>
                </div>
              </form>
            </div>
            <div className='page_rightSide'>
              <img src={require('../assets/images/forget-img.png')} alt="error"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Layout(ForgetPassword,"account");