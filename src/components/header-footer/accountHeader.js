import React from 'react';
import { Link } from "react-router-dom";

function AccountHeader() {
  return (
    <header className="account_header">
      <div className='container'>
        <nav class="account_navbar">
          <div className='account_navbar_logo'>
            <Link to="/" className='preview-icon-account'>
              <img src={require('../../assets/icons/preview-icon.svg').default} alt="error" />
            </Link>
            <Link class="navbar-brand" to='/'>
              <img src={require('../../assets/icons/logo.svg').default} alt="error" className='logo_account_icons'/>
              <img src={require('../../assets/icons/account-log.svg').default} alt="error" className='logo_account_icons-rep'/>
            </Link>
          </div>
          <div className='account_navbar_left'>
            <span className='text-second'> Log in or Register For Best Experience</span>
            <Link to='/'>
              <img src={require('../../assets/icons/login-icon.png')} alt="login-logo-icon"/>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default AccountHeader