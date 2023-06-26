import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signupemail = ({ signemailClose,otpshow, signemailshow, signShow }) => {
  const hide = () =>{

  }
  return (
    <>
      <Modal show={signemailshow} onHide={hide}>
        <div className="signpopup">
          <div className="content row">
            <div className="left-content d-none d-md-block col-md-6 p-5">
              <div className="logo">
                <img src="./logo.svg" alt="logo" width="100%" />
              </div>
              <div className="icons">
                <div className="Instant-chat">
                  <p>
                    <img src="./messages.png" alt="message" width="100%" />
                  </p>
                  <p>Instant Chat</p>
                </div>
                <div className="Instant-phone">
                  <p>
                    <img src="./phone.png" alt="message" width="100%" />
                  </p>
                  <p>Instant Call</p>
                </div>
              </div>
            </div>
            <div className="right-content col-md-6 p-0">
              <div className="card bg-white w-100">
                <div className="content-wrap">
                  <h3>Sign Up</h3>
                  <p>
                    <span>Don't Have an Account Yet?</span>
                    <a href="#" className="login-btn">
                      Login
                    </a>
                  </p>
                  <p>
                    <h5>You will receive a 4 digit code on your Email ID</h5>
                  </p>
                  <form>
                    <div className="form">
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Enter Your Email Id</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />
                        &nbsp;
                        <div className="continue-btn">
                          {" "}
                          <Button
                            variant="danger"
                            size="lg"
                            onClick={otpshow}
                          >
                            Continue
                            <span>
                              <img src="./circle-right.png" />
                            </span>
                          </Button>
                        </div>
                      </Form.Group>
                    </div>
                  </form>
                  <p>
                    <span>
                      By Proceeding I Agree to <a href="">Terms & Conditions</a>
                      & <a href="">Privacy Policy</a>
                    </span>
                  </p>
                  <p className="signEmail-btn">
                    <button onClick={signShow}>Sign up with Mobile</button>
                  </p>
                  <span className="close-btn" onClick={signemailClose}>
                    X
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Signupemail;
