import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const astroSignup = () => 
  {
    navigate('/astro');
  }
  return (
    <footer className="footer font-small p-md-5 p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6  col-lg-3 order-0">
            <div className="footer-logo">
              <a className="navbar-brand" onClick={()=> navigate('/')}>
                <img src="./logo.svg" />
              </a>
            </div>
            <ul className="list-unstyled">
              <li className="footer-address">
                Ground Floor - 39 (Gate No. - 3), Ansal Fortune
                Arcade,Sector-18, Noida - 201301 Delhi NCR, India
              </li>
              <li className="footer-phone">+91-9650511113</li>
              <li className="footer-email">astro@astrodevam.com</li>
            </ul>
          </div>
          <div className="col-md-12 col-lg-6 order-2 my-md-5 px-md-4 px-0 footer-middle">
            <div className="row py-4 px-3">
              <div className="col-md-4">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  ASTRO DEVAM
                </h5>
                <ul className="list-unstyled">
                  {/* <li>
                <a href="#!">Blog</a>
              </li> */}
                  <li>
                    <a href="#!">About Us</a>
                  </li>

                  <li>
                    <a href="#!">For Suppliers</a>
                  </li>
                  <li>
                    <a href="#!">Copyright ©</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  HELP
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">FAQS</a>
                  </li>
                  <li>
                    <a href="#!">Why AstroDevam</a>
                  </li>

                  <li>
                    <a href="#!">Write a review</a>
                  </li>
                  <li className="pb-0">
                    <a href="#!">Ask any Query</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
                  As Astrologer
                </h5>
                <ul className="list-unstyled">
                <li>
                    <a onClick={astroSignup}>Astro Signup</a>
                  </li>
                  <li>
                    <a onClick={()=> navigate('/astrologin')}>Astro login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="clearfix w-100 d-md-none  " />
          <div className="col-md-6 col-lg-3 py-md-4 my-md-5 px-md-5 order-1 order-lg-3">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-3">
              FOLLOW US
            </h5>
            <ul className="list-unstyled d-flex footer-social-links">
              <li>
                <a href="#!">
                  <img src="./Facebook.svg" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="./twitter.svg" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="./youtube.svg" />
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="./Pinterest.svg" />
                </a>
              </li>
            </ul>
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              SECURE PAYMENT BY
            </h5>
            <img src="./payment.svg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
