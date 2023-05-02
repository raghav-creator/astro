import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Otp = ({otpClose,otpshow}) => {

  return (
    <>
      <Modal show={otpshow} onHide={otpClose}>
      <div className='signpopup otp'>
          <div className="content">
            <div className='left-content'>
              <div className="logo"><img src="./otp.png" alt="logo" width="100%" /></div>
            </div>
            <div className='right-content'>
              <div className="content-wrap">
                <h3> Enter OTP</h3>
                <p><span>OTP has been sent to your Phone Number 9876565654</span></p>
                <form>
                  <div className='form'>
                    <div className="field-wrap">
                      <Form.Control type="email"  />
                    </div>
                    <div className="field-wrap">
                      <Form.Control type="email"  />
                    </div>
                    <div className="field-wrap">
                      <Form.Control type="email"  />
                    </div>
                    <div className="field-wrap">
                      <Form.Control type="email" />
                    </div>
                  </div>
                  <div className='continue-btn'  onClick={otpClose}> <Button variant="danger" size="lg">
                        Verify OTP
                      </Button>
                      </div>
                </form>
                <span className='close-btn' onClick={otpClose}>X</span>
            </div>
          </div>
        </div>
      </div>
      </Modal>
    </>
  );
}

export default Otp;