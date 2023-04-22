import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = ({ signClose, signshow }) => {

  return (
    <>
      <Modal show={signshow} onHide={signClose}>
        <div className='signpopup'>
          <div className="content">
            <div className='left-content'>
              <div className="logo"><img src="./logo.svg" alt="logo" width="100%" /></div>
              <div className="icons">
                <div className='Instant-chat'>
                  <p><img src="./messages.png" alt="message" width="100%" /></p>
                  <p>Instant Chat</p>
                </div>
                <div className='Instant-phone'>
                  <p><img src="./phone.png" alt="message" width="100%" /></p>
                  <p>Instant Call</p>
                </div>

              </div>
            </div>
            <div className='right-content'>
              <div className="content-wrap">
                <h3>Sign Up</h3>
                <p><span>Don't Have an Account Yet?</span><a href="#" className="login-btn">Login</a></p>
                <p><h5>You will receive a 4 digit code on your mobile number</h5></p>
                <form>
                  <div className='form'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Enter Your Phone Number</Form.Label>
                      <Form.Control type="email" placeholder="Enter Number" />
                      &nbsp;
                      <Button variant="danger" size="lg">
                        Continue
                      </Button>
                    </Form.Group>
                  </div>
                </form>
                <p><span>By Proceeding I Agree to <a href="">Terms & Conditions</a>& <a href="">Privacy Policy</a></span></p>
                <p><button>Sign up with Email</button></p>
            </div>
          </div>
        </div>
      </div>
    </Modal >

    </>
  );
}

export default Signup;