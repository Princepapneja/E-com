import LoginForm from '../components/sections/loginForm';
import Layout from '../layout';
import {NavLink} from 'react-router-dom';

const Login = () => {
  return (
    <section className="account_sec">
        <div className="container">
            <div className="sec_body">
            {/* Left side content */}
                <div className='left_side_content'>
                    <div className="tab_wrapper">
                    <NavLink to="/login"  className="tab_cta">Log in</NavLink>
                    <NavLink to="/register" className="tab_cta">Register</NavLink>
                    </div>
                    
                    <div className='tab_body'>
                        <div className="tab_content_left">
                            <LoginForm />
                        </div>
                    </div>
                </div>
                {/* Right Side Image */}
                <div className="tab_content_right">
                    <img src={require('../assets/images/log-in.png')} alt="error" className="login_form_img" />
                </div>
            </div>
        </div>  
    </section>
  )
}

export default Layout(Login,"account");