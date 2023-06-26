import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = ({ loginClose, loginshow, forgotpassShow }) => {
  const hide = () =>{

  }
  return (
    <>
      <Modal show={loginshow} onHide={hide}>
        <div className="signpopup container">
          <div className="content row">
            <div className="left-content d-none d-md-flex  col-md-6 p-4 flex-wrap">
              <div className="logo mx-auto">
                <img src="./logo.svg" alt="logo" width="100%" />
              </div>
              <div className="col-12">
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
            </div>
            <div className="right-content col-md-6 p-4">
              <div className="content-wrap">
                <h3>Login</h3>
                <p>
                  <span>Now consult your favorite Astrologer</span>
                </p>
                <form>
                  <div className="form">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>
                        Enter Your Email ID or Phone Number
                      </Form.Label>
                      <Form.Control type="email" />

                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" />
                      <div class="forgot-link">
                        <a href="#" onClick={forgotpassShow}>
                          Forgot Password?
                        </a>
                      </div>
                      <div className="continue-btn">
                        {" "}
                        <Button variant="danger" size="lg">
                          Continue
                          <span>
                            <img src="./circle-right.png" />
                          </span>
                        </Button>
                      </div>
                    </Form.Group>
                  </div>
                </form>
                <span className="close-btn" onClick={loginClose}>
                  X
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
