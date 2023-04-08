import React from 'react';
 
const Footer=()=>
{
  return <footer class="footer font-small p-md-5 p-3">
  <div class="container">
    <div class="row">
        <div class="col-md-3">
          <div class="footer-logo">
          <a class="navbar-brand" href="#"><img src="./logo.svg" /></a>
          </div>
          <ul class="list-unstyled">
            <li class="footer-address">
                Ground Floor - 39 (Gate No. - 3),
                Ansal Fortune Arcade,Sector-18, 
                Noida - 201301 Delhi NCR, India
            </li>
            <li class="footer-phone">
              +91-9650511113
            </li>
            <li class="footer-email">
              astro@astrodeam.com
            </li>
          </ul>
        </div>
        <div class="col-md-6 my-md-5 px-md-4 px-0 footer-middle">
          <div class="row py-4 px-3">
            <div class="col-md-4">
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">ASTRO DEVAM</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">About Us</a>
                </li>
                <li>
                  <a href="#!">Photos and Videos Gallery</a>
                </li>
                <li>
                  <a href="#!">For Suppliers</a>
                </li>
                <li>
                  <a href="#!">Copyright ©</a>
                </li>
              </ul>
            </div>
            
            <div class="col-md-4">
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">HELP</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">Rss Feed</a>
                </li>
                <li>
                  <a href="#!">FAQS</a>
                </li>
                <li>
                  <a href="#!">Why AstroDevam</a>
                </li>
                <li>
                  <a href="#!">Photos and Videos Gallery</a>
                </li>
                <li>
                  <a href="#!">Write a review</a>
                </li>
                <li class="pb-0">
                  <a href="#!">Ask any Query</a>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h5 class="font-weight-bold text-uppercase mt-3 mb-4">INFORMATION</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#!">Your Account</a>
                </li>
                <li>
                  <a href="#!">Payment Options</a>
                </li>
                <li>
                  <a href="#!">Privilege Member</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="clearfix w-100 d-md-none" />
        <div class="col-md-3 py-md-4 my-md-5 px-md-5">
          <h5 class="font-weight-bold text-uppercase mt-3 mb-3">FOLLOW US</h5>
          <ul class="list-unstyled d-flex footer-social-links">
            <li>
              <a href="#!"><img src="./Facebook.svg"/></a>
            </li>
            <li>
              <a href="#!"><img src="./twitter.svg"/></a>
            </li>
            <li>
            <a href="#!"><img src="./youtube.svg"/></a>
            </li>
            <li>
            <a href="#!"><img src="./Pinterest.svg"/></a>
            </li>
          </ul>
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">SECURE PAYMENT BY</h5>
          <img src="./payment.svg"/>
        </div>

      </div>
    </div>
</footer>
}
 
export default Footer;