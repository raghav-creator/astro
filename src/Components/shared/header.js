import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Signupphone from "./popup/signupphone";
import Login from "../shared/popup/login";
import Otp from "./popup/otp";
import Signupemail from "./popup/signupemail";
import Createpassword from "./popup/createpassword";
import Forgotpassword from "./popup/forgotpassword";
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
                {" "}
                Chat with Astrologer
              </Nav.Link>
              <Nav.Link href="#pricing" className="button button-call">
                {" "}
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
                href="#deets"
                className="button-signup"
                onClick={signShow}
              >
                Sign up
              </Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
                className="button-login"
                onClick={loginShow}
              >
                Login
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
        <a className="navbar-brand" href="#">
          <img src="./logo.svg" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link button button-chat" href="#">
                Chat with Astrologer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link button button-call" href="#">
                Call with Astrologer
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link button-product" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link button-services" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link button-helpline" href="#">
                <span>
                  Helpline number <span>+91-9650-511-113</span>
                </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link button-signup" onClick={signShow} href="#">
                Sign up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link button-login" onClick={loginShow} href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
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
