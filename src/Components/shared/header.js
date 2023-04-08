import React from 'react';
 
const Header=()=>
{
  return <nav class="navbar navbar-expand-lg navbar-light bg-light p-4">
  <a class="navbar-brand" href="#"><img src="./logo.svg" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link button button-chat" href="#">Chat with Astrologer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link button button-call" href="#">Call with Astrologer</a>
      </li>
      <li class="nav-item">
        <a class="nav-link button-product" href="#">Products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link button-services" href="#">Services</a>
      </li>
      <li class="nav-item">
        <a class="nav-link button-helpline" href="#"><span>Helpline number <span>+91-9650-511-113</span></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link button-signup" href="#">Sign up</a>
      </li>
      <li class="nav-item">
        <a class="nav-link button-login" href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>
}
 
export default Header;