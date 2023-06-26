import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Createpassword = ({ passwordClose, passwordshow }) => {
  const hide = () =>{

  }
  return (
    <>
      <Modal show={passwordshow} onHide={hide}>
        <div className="signpopup password">
          <div className="content row">
            <div className="left-content  d-none d-md-flex  col-md-6 p-4 flex-wrap">
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
            <div className="right-content col-md-6 p-0">
              <div className="card bg-white w-100">
                <div className="content-wrap">
                  <h3>Create Password</h3>
                  <p>
                    <span>At Least 6 Alpha Numeric Characters</span>
                  </p>
                  <form>
                    <div className="form">
                      <Form.Group
                        className="form-wrap"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Pasword</Form.Label>
                        <Form.Control type="email" />

                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" />

                        <div className="continue-btn">
                          {" "}
                          <Button variant="danger" size="lg" onClick={passwordClose}>
                            Submit
                          </Button>
                        </div>
                      </Form.Group>
                    </div>
                  </form>
                  <span className="close-btn" onClick={passwordClose}>
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

export default Createpassword;
