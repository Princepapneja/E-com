import { Link } from "react-router-dom";
import Button from "../snippets/button";
import Inputs from "../snippets/inputs";

const LoginForm = () => {
  return (
    <div className="form_wrapper"> 
        <h4 className="form_heading">Log in to buynow</h4>
        <form action="">
            <div className="feilds_wrapper">
              <Inputs label="Email" name="name" type="email"/>
              <Inputs type="password" label="Password" name="password"/>

              <div className="login_policy_wrapper">
                <div className="policy_wrapper login_policy_wrapper">
                  <Inputs type="checkbox" name="policy" label="By continuing, you agree to Buynow policy"/>
                </div>

                <div className='forget_btn'>
                  <Link to='/forget-password' className='forgetBtn'>Forget?</Link>
                </div>
              </div>
            </div>
            <Button type="button" label="LOG IN" />
        </form>

        <div className='spacer'>
          <span className='spacer-line spacer_line1'></span>
          <span className='or'>or</span>
          <span className='spacer-line spacer_line2'></span>
        </div>    

        <div className='form_social_media'>
          <Link className='form_social' to='/'>
            <img src={require('../../assets/icons/google_icon.svg').default} alt="error" className="google_icon" />
            <span className='social_label'>google</span>
          </Link>
          <Link className='form_social' to='/'>
            <img src={require('../../assets/icons/facebook_icon.svg').default} alt="error" className="facebook_icon" />
            <span className='social_label'>facebook</span>
          </Link>
        </div>        
    </div>
  )
}

export default LoginForm;