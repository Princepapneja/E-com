import { useState } from "react";
import RegisterForm from "../components/sections/registerForm";
import Layout from "./../layout";
import { NavLink } from "react-router-dom";
import RegisterOtp from "../components/sections/registerOtp";

const Signup = () => {
   const [otpComp, setOtpComp] = useState(false);
   if(otpComp){
    return <RegisterOtp />
   }else{
    return (
        <section className="login_sec">
           <div className="container">
              <div className="sec_body">
               {/* Left side content */}
               <div className='left_side_content'>
                  <div className="tab_wrapper">
                    <NavLink to="/login" className="tab_cta">Log in</NavLink>
                    <NavLink to="/register" className="tab_cta">Register</NavLink>
                  </div>
                  
                  <div className="tab_body">
                     <div className="tab_content_left">
                        <RegisterForm setOtpComp={setOtpComp}/>
                     </div>
                  </div>
               </div>

               {/* Right Side Image */}
               <div className="tab_content_right">
                  <img src={require("../assets/images/register-img.png")} alt="error" className="register_form_img" />
               </div>
              </div>
           </div>
        </section>
     );
   }
   
};

export default Layout(Signup, "account");
