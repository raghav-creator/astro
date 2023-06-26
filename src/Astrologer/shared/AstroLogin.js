import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
import callingimg from "../../Assets/imgs/iPhoneAstro.png";
import { useNavigate } from "react-router-dom";
const AstroLogin = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container py-5">
        <div class="row justify-content-center">
          <div className="col-md-7">
            <div className="signpopup">
              <div className="content row">
                <div className="left-content gradientTwo col-md-6">
                  <div className="logo pt-3">
                    <img src="./logo.svg" alt="logo" width="100%" />
                  </div>
                  <div className="icons">
                    <div className="Instant-chat">
                      <p>
                        <img src="./messages.png" alt="message" width="100%" />
                      </p>
                      <p>Instant Chatting</p>
                    </div>
                    <div className="Instant-phone">
                      <p>
                        <img src={callingimg} alt="message" width="100%" />
                      </p>
                      <p>Instant Callings</p>
                    </div>
                  </div>
                </div>
                <div className="right-content col-md-6">
                  <div className="content-wrap p-3">
                    <h3>Login</h3>
                    {/* <p><span>Now consult your favorite Astrologer</span></p> */}
                    <form>
                      <div className="form">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <div className="my-3">
                            <Form.Label>Email ID</Form.Label>
                            <Form.Control type="email" />
                          </div>
                          <div className="my-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                          </div>
                          <div class="forgot-link">
                            <a href="#">Forgot Password?</a>
                          </div>
                          <div className="continue-btn">
                            {" "}
                            <Button variant="danger" size="lg" onClick={()=>navigate('/dashboard')}>
                              Login
                              <span>
                                <img src="./circle-right.png" />
                              </span>
                            </Button>
                          </div>

                          <div className="d-flex align-items-center gap-2 mt-3">
                            <input type="checkbox" name="checkbox" />
                            <span className="fs-12">
                              By signing in, you agree to our{" "}
                              <Link to="#" className="text-danger">
                                terms and conditions
                              </Link>
                            </span>
                          </div>
                        </Form.Group>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AstroLogin;
