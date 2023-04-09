import React from 'react';
 
const Header=()=>
{
  return <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
  <a className="navbar-brand" href="#"><img src="./logo.svg" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link button button-chat" href="#">Chat with Astrologer</a>
      </li>
      <li className="nav-item">
        <a className="nav-link button button-call" href="#">Call with Astrologer</a>
      </li>
      <li className="nav-item">
        <a className="nav-link button-product" href="#">Products</a>
      </li>
      <li className="nav-item">
        <a className="nav-link button-services" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link button-helpline" href="#"><span>Helpline number <span>+91-9650-511-113</span></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link button-signup" href="#">Sign up</a>
      </li>
      <li className="nav-item">
        <a className="nav-link button-login" href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>
}
 
export default Header;