import React from "react";
import Layoutuser from "../../Components/shared/Layoutuser";
import ReactStars from "react-rating-stars-component";
import { Form } from "react-bootstrap";

import { render } from "react-dom";
import Button from "react-bootstrap/Button";

import callnowimg from "../../Assets/imgs/callnow.png";
import videocallingimg from "../../Assets/imgs/videocalling.png";

function Callnow() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <Layoutuser>
      <div className="container my-md-5">
        <div className="row">
          <div className="col-12">
            Call with Astrologer Kaylan Prakesh, 09:30 PM
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card videocallingCard w-100 p-0 overflowHidden">
              <div className="py-3 px-5">
                <div className="row justify-content-between align-items-center">
                  <div className="col-md-6">
                    <div className="d-flex gap-3 flex-wrap flex-md-nowrap">
                      <div className="imgRounded mx-auto">
                        <img src={callnowimg} className="img-fluid" />
                      </div>

                      <div className="flex-grow-1">
                        <h3 className="mb-0">Kalyan Prakash</h3>
                        <p className="mb-0 fs-5 text-success">
                          Balance: (10:00 mins)
                        </p>
                        <span className="fs-5">Video Call in Progress</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-2 d-flex justify-content-end">
                    <Button variant="danger">End</Button>
                  </div>
                </div>
              </div>

              <div className="bg-dark w-100 videocallSection position-relative">
                <img src={videocallingimg} className="img-fluid" />

                {/* ===================== Review section start ============================ */}
                <div className="videocallReview bg-white px-3 py-5 w-100">
                  <div class="contaienr">
                    <div className="row judtify-content-center">
                      <div className="col-12 text-center">
                        <h3>Your Review</h3>
                        <div className="customratting">
                          <ReactStars
                            classNames="mx-auto "
                            count={5}
                            onChange={ratingChanged}
                            size={50}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            color="#D9D9D9"
                            activeColor="#ffd700"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row flex-column align-items-center gap-3">
                      <div className="col-8 mx-auto ">
                        <Form>
                          <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Write your review</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Write your review here..."
                            />
                          </Form.Group>
                        </Form>
                      </div>
                      <div className="col-3 d-flex justify-content-center">
                        <Button variant="danger" className="mx-auto">
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layoutuser>
  );
}

export default Callnow;
