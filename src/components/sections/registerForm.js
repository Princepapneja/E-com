import Inputs from "../snippets/inputs";

function RegisterForm({ setOtpComp }) {
  return (
    <div className="form_wrapper">
      <h4 className="form_heading">Create Your Account</h4>
      <form>
        <div className="feilds_wrapper">

          <div className="required_feild">
            <Inputs label="Your Name" name="name" type="" />
          </div>

          <div className="required_feild">
            <Inputs label="Email" name="email" type="email" />
          </div>

          <div className="required_feild">
            <Inputs label="Password" name="password" type="password" />
          </div>

          <div className="required_feild">
            <Inputs label="Password" name="cnfpassword" type="password" />
          </div>

          <div className="policy_wrapper">
            <input type="checkbox" id="checkbox2" className="form_checkbox" value="policy" />
            <label className="checkbox_label checkbox_label_registration" htmlFor="checkbox2">
              By continuing, you agree to Buynow policy
            </label>
          </div>
        </div>
        <button className="form_btn" type="button">
          Create account
        </button>
      </form>

      <div className="spacer">
        <span className="spacer-line spacer_line1"></span>
        <span className="or">or</span>
        <span className="spacer-line spacer_line2"></span>
      </div>

      <div className="form_social_media">
        <a className="form_social" href="/">
          <img src={require("../../assets/icons/google_icon.svg").default} alt="error" className="google_icon" />
          <span className="social_label">google</span>
        </a>
        <a className="form_social" href="/">
          <img src={require("../../assets/icons/facebook_icon.svg").default} alt="error" className="facebook_icon" />
          <span className="social_label">facebook</span>
        </a>
      </div>
    </div>
  );
}

export default RegisterForm;
