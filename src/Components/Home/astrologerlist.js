import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import callnow from "../../Assets/imgs/callnow.png";
import { useNavigate } from "react-router-dom";
const AstrologerList = () => {
  const [callNow, setcallNow] = useState(false);

  const [callStart, setcallStart] = useState(false);

  const [callEnd, setcallEnd] = useState(false);
  const navigate = useNavigate();
  const hide = () =>
  {

  }
  const callhide=()=>{
    setcallStart(false);
  }
  const opencallstart = () =>
  {
     setcallNow(false);
     setcallStart(true);
  }
  const opencallNow =() => 
  {
    setcallNow(true);
  }
  const openchatNow =() => 
  {
    setcallNow(true);
  }
  const callconnect=()=> {
    setcallStart(false);
    navigate("/callnow")
  }
  const chatconnect=()=> {
    setcallStart(false);
    navigate("/chatnow")
  }


  return (
    <>
      <Container>
        <div class="row astro-list">
          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>

                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold " onClick={openchatNow}>Chat Now</button>
                <button class="orange" onClick={opencallNow}>
                  Call Now
                </button>
              </div>
              <div class="status">
                <span class="online">online</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>
                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold " onClick={() => setcallEnd(true)}>
                  Chat Now
                </button>
                <button class="orange" onClick={() => setcallStart(true)}>
                  Call Now
                </button>
              </div>
              <div class="status">
                <span class="online">online</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>
                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold ">Chat Now</button>
                <button class="orange">Call Now</button>
              </div>
              <div class="status">
                <span class="offline">offline</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>
                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold ">Chat Now</button>
                <button class="orange">Call Now</button>
              </div>
              <div class="status">
                <span class="busy">Busy</span>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>
                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold ">Chat Now</button>
                <button class="orange">Call Now</button>
              </div>
              <div class="status">
                <span class="online">online</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>
                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold ">Chat Now</button>
                <button class="orange">Call Now</button>
              </div>
              <div class="status">
                <span class="online">online</span>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>
                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold ">Chat Now</button>
                <button class="orange">Call Now</button>
              </div>
              <div class="status">
                <span class="online">online</span>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-lg-3">
            <div class="astro-grid">
              <div class="content">
                <span>
                  <img src="./astro-image.svg" />
                </span>
                <span class="purple">Kalyan Parkash</span>
                <div className="astroDetails mb-3">
                  <span class="black">Vedic Astrology</span>
                  <span class="black">English,Hindi,Punjabi</span>
                  <span class="black">Exp 10 Yrs</span>
                  <span class="black bold">400 / Min</span>
                </div>
              </div>
              <div class="button">
                <button class="gold ">Chat Now</button>
                <button class="orange">Call Now</button>
              </div>
              <div class="status">
                <span class="online">online</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Modal show={callNow} onHide={hide}>
        <Modal.Header closeButton className="callHeader flex-wrap">
          <Modal.Title className="text-center">Share Details</Modal.Title>
          <p className="text-center w-100 mt-3">
            to share it with your astrologer, for saving time on consultation
          </p>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-12">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Name <sup class="text-danger">*</sup>
                  </Form.Label>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </div>

              <div className="col-12 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Gender <sup class="text-danger">*</sup>
                  </Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Select</option>
                    <option value="1">Male</option>
                    <option value="2">Female</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Date of birth <sup class="text-danger">*</sup>
                  </Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Date</option>

                    <option value="1">1</option>
                    <option value="1">2</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="col-md-4 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="fillnone">month</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Month</option>
                    <option value="1">January</option>
                    <option value="2">2</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="col-md-4 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="fillnone">year</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Year</option>
                    <option value="1">1980</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Time of Birth <sup class="text-danger">*</sup>
                  </Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Hour</option>

                    <option value="1">1</option>
                    <option value="1">2</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="col-md-4 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="fillnone">Min</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Minutes</option>
                    <option value="1">January</option>
                    <option value="2">2</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="col-md-4 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label className="fillnone">am</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="1">AM</option>
                    <option value="2">PM</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 my-3 switchFom">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Not Sure of Time"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    Birth Place <sup class="text-danger">*</sup>
                  </Form.Label>

                  <Form.Control type="text" placeholder="Search" />
                </Form.Group>
              </div>

              <div className="col-md-6 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Marital Status</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Select</option>
                    <option value="1">January</option>
                    <option value="2">2</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 my-3">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Topic of concern</Form.Label>

                  <Form.Select
                    aria-label="Default select example"
                    className="form-control"
                  >
                    <option value="0">Select</option>
                    <option value="1">January</option>
                    <option value="2">2</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="danger" onClick={opencallstart}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={callStart}
        onHide={hide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {/* <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <div className="row justify-content-between align-items-center">
            <div className="col-md-3">
              <div className="imgRounded mx-auto">
                <img src="./astro-image.svg" className="img-fluid" />
              </div>
            </div>
            <div className="col flex-grow-1">
              <h3>Kalyan Prakash</h3>
              <p className="mb-0 fs-5">₹400 /Min</p>
              <span className="fs-xs">Wait Time - 5 Min</span>
            </div>
            <div className="col-md-3">
              <div class="row">
                <div class="col-md-6"><Button variant="danger" onClick={callconnect}>Call</Button></div>
                <div class="col-md-6"><Button variant="danger" onClick={chatconnect}>Chat</Button></div>
              </div>
              <br></br>
              <div class="row">
                <div class="col-md-12"><Button variant="danger" onClick={callhide}>Cancel</Button></div>
                </div>
              
              
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={callEnd}
        onHide={() => setcallEnd(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        {/* <Modal.Header>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="py-4">
          <div className="row  align-items-center">
            <div className="col">
              <h3>Leave Waitlist?</h3>
              <p className="mb-0 ">
                Are you sure you want to leave the waitlist for Kalyan Prakash?
              </p>
            </div>
          </div>
          <div className="row mt-3 justify-content-end gap-3">
            <div className="col-md-2">
              <Button variant="outline-secondary" className="w-100">
                No
              </Button>
            </div>
            <div className="col-md-2">
              <Button variant="danger" className="w-100">
                Yes
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AstrologerList;

