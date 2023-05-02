
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Forgotpassword = ({ forgotpassClose, forgotpassshow,forgotOtpopen }) => {

    return (
        <>
            <Modal show={forgotpassshow} onHide={forgotpassClose}>
                <div className='signpopup password'>
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
                                <h3>Forgot Password</h3>

                                <form>
                                    <div className='form'>
                                        <Form.Group className="form-wrap" controlId="exampleForm.ControlInput1">
                                            <Form.Check
                                                type="radio"
                                                label={`Reset Using Email`}
                                                aria-selected='true'
                                                checked="checked"
                                            />

                                            <Form.Check
                                                type="radio"
                                                label={`Reset Using Mobile Number`}
                                            />
                                     <div class="input-wrap">   
                                   <Form.Control type="email" PlaceHolder="Email Id" />
                                    </div>
                                            <div className='continue-btn'> <Button variant="danger" size="lg" onClick={forgotOtpopen}>
                                                Submit
                                            </Button>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </form>
                                <span className='close-btn' onClick={forgotpassClose}>X</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Forgotpassword;