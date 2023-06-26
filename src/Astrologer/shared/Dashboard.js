import React from "react";
import SidebarLayout from "../layout/sidebarLayout";
import { Container } from "react-bootstrap";
import chaticons from "../../Assets/imgs/chat.png";
import chatcards from "../../Assets/imgs/chatOne.png";
import arrowright from "../../Assets/imgs/ArrowRight.svg";
import calendar from "../../Assets/imgs/calendar.png";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function Dashboard() {
  return (
    <SidebarLayout>
      <div className="mt-4 container-lg container-md-fluid">
        <div className="row  ">
          <div className="col-md-3 col-sm-6 mb-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 mb-3">
            <div class="cardShortOptions px-3 py-4 d-flex align-items-center justify-content-center gap-3 flex-column">
              <img className="cardShortOptions-img" src={chaticons} />
              <h4>Chat</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 container-lg container-md-fluid">
        <div className="row gap-3 gap-md-0">
          <div className="col-md-6">
            <Card className="w-100 infoCards text-white">
              <Card.Body className="py-0">
                <Card.Title>Important Policies:</Card.Title>
                <Card.Text>
                  1. Never be rude to any customer
                  <br />
                  2. Never share your personal details with any customer
                </Card.Text>
                <button className="btn btn-white">Go somewhere</button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6">
            <Card className="w-100 bg-purple-dark text-white border-20">
              <Card.Body className="py-0">
                <Card.Title>Check Your Performance:</Card.Title>
                <Card.Text>
                  Look into your daily ratings, earning and performance on
                  Astrotalk
                </Card.Text>
                <button className="btn btn-white">View my socres</button>
                <br />
                <br />
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="my-4 container-lg container-md-fluid">
        <div className="row">
          <div className="col-md-12">
            <Card className="tablecustom bg-white border-20 px-0">
              <Card.Body>
                <Table bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Your price</th>
                      <th>Status</th>
                      <th>Next online time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Report</td>
                      <td>(0.0/query)</td>
                      <td>
                        <Form>
                          <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label=""
                            className="astroSwitch"
                          />
                        </Form>
                      </td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="my-4 container-lg container-md-fluid">
        <div className="row gap-3 gap-md-0">
          <div className="col-md-6">
            <div class="cardShortOptions p-4 d-flex align-items-center  gap-3 ">
              <img src={calendar} />
              <h5>Weekly Time-Table</h5>
              <img src={arrowright} className="ms-auto" />
            </div>
          </div>
          <div className="col-md-6">
            <div class="cardShortOptions p-4 d-flex align-items-center  gap-3 ">
              <img src={chatcards} />
              <h5>Chat as your own Assistant</h5>
              <img src={arrowright} className="ms-auto" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-4 container-lg container-md-fluid">
        <div className="row">
          <div class="col-md-12">
            <Card className="w-100  bg-white">
              <Card.Body>
                <Card.Title className="mb-0">
                  Feedback to the CEO Office!
                </Card.Title>
                <p>Please share your honest feedback to help us improve</p>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Control
                        as="textarea"
                        className="textAreaHeight"
                        placeholder="Please share your honest feedback to help
us improve "
                      />
                    </Form.Group>
                  </Form>
                </Card.Text>
                <button className="btn btn-yellow-500">Send Feedback</button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

export default Dashboard;
