import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import userIcon from "../../Assets/imgs/user.png";
import activeStatus from "../../Assets/imgs/EllipseAvtive.svg";

import Otp from "../../Components/shared/popup/otp";
import Createpassword from "../../Components/shared/popup/createpassword";
import Forgotpassword from "../../Components/shared/popup/forgotpassword";
import Login from "../../Components/shared/popup/login";
import Signupphone from "../../Components/shared/popup/signupphone";
import Signupemail from "../../Components/shared/popup/signupemail";

const Header = () => {
  const [signshow, setsignShow] = useState(false);
  const [signemailshow, setsignemailShow] = useState(false);
  const [loginshow, setloginShow] = useState(false);
  const [otpshow, setotpShow] = useState(false);
  const [passwordshow, setpasswordShow] = useState(false);
  const [forgotpassshow, setforgotpassShow] = useState(false);
  const signemailClose = () => {
    setsignemailShow(false);
  };
  const signClose = () => {
    setsignShow(false);
    setotpShow(true);
  };
  const signemail = () => {
    setsignShow(false);
    setsignemailShow(true);
  };
  const signShow = () => {
    setsignemailShow(false);
    setsignShow(true);
  };
  const loginClose = () => setloginShow(false);
  const loginShow = () => setloginShow(true);
  const otpClose = () => {
    setotpShow(false);
    setpasswordShow(true);
  };
  const passwordClose = () => {
    setpasswordShow(false);
  };
  const forgotpassShow = () => {
    setloginShow(false);
    setforgotpassShow(true);
  };
  const forgotpassClose = () => {
    setforgotpassShow(false);
  };
  const forgotOtpopen = () => {
    setforgotpassShow(false);
    setotpShow(true);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img src="./logo.svg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#features" className="button button-chat">
                Chat with Astrologer
              </Nav.Link>
              <Nav.Link href="#pricing" className="button button-call">
                Call with Astrologer
              </Nav.Link>
              <Nav.Link href="" className="button-product">
                Products
              </Nav.Link>

              <Nav.Link href="" className="button-services">
                Services
              </Nav.Link>

              <Nav.Link href="" className="button-helpline">
                <span>
                  Helpline number <span>+91-9650-511-113</span>
                </span>
              </Nav.Link>

              <Nav.Link
                eventKey={2}
                href="#memes"
                className=" position-relative"
                onClick={loginShow}
              >
                <img src={userIcon} className="loginHeaderImg" />{" "}
                <img
                  className="position-absolute activeStatusIcon"
                  src={activeStatus}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            {/* <li className="nav-item">
        <a className="nav-link button-signup" onClick={signShow} href="#">Sign up</a>
      </li> */}
            <li className="nav-item">
              <a
                className="nav-link position-relative "
                onClick={loginShow}
                href="#"
              >
                <img src={userIcon} className="loginHeaderImg" />{" "}
                <img
                  className="position-absolute activeStatusIcon"
                  src={activeStatus}
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <Signupphone
        signClose={signClose}
        signEmail={signemail}
        signshow={signshow}
      />
      <Signupemail
        signShow={signShow}
        signemailshow={signemailshow}
        signemailClose={signemailClose}
      />
      <Login
        loginClose={loginClose}
        loginshow={loginshow}
        forgotpassShow={forgotpassShow}
      />
      <Otp otpshow={otpshow} otpClose={otpClose} />
      <Createpassword
        passwordshow={passwordshow}
        passwordClose={passwordClose}
      />
      <Forgotpassword
        forgotpassshow={forgotpassshow}
        forgotpassClose={forgotpassClose}
        forgotOtpopen={forgotOtpopen}
      />
    </>
  );
};

export default Header;
